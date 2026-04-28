'use client'

import { useEffect, useRef, useState } from 'react'
import { PRODUCTS } from '@/lib/constants'

declare global {
  interface Window {
    plausible?: (event: string) => void
  }
}

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  productId?: string
}

interface FormState {
  name: string
  company: string
  email: string
  port: string
  product: string
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  port?: string
  product?: string
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Requerido'
  if (!values.company.trim()) errors.company = 'Requerido'
  if (!values.email.trim()) errors.email = 'Requerido'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Email inválido'
  if (!values.port.trim()) errors.port = 'Requerido'
  if (!values.product) errors.product = 'Seleccioná un producto'
  return errors
}

export default function LeadModal({ isOpen, onClose, productId }: LeadModalProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    port: '',
    product: productId ?? '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLInputElement>(null)

  // Sync product when modal opens with a pre-selected product
  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, product: productId ?? '' }))
      setErrors({})
      setSubmitted(false)
    }
  }, [isOpen, productId])

  // Focus first field on open
  useEffect(() => {
    if (isOpen) firstFocusableRef.current?.focus()
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Prevent body scroll when open — position:fixed approach works on iOS Safari
  useEffect(() => {
    if (isOpen) {
      const y = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${y}px`
      document.body.style.width = '100%'
    } else {
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (top) window.scrollTo(0, parseInt(top) * -1)
    }
    return () => {
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (top) window.scrollTo(0, parseInt(top) * -1)
    }
  }, [isOpen])

  // Focus trap
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !overlayRef.current) return
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'input, select, button, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setIsLoading(true)
    setSubmitError(null)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          destination_port: form.port,
          product: form.product,
        }),
      })

      if (!res.ok) {
        setSubmitError('Ocurrió un error. Por favor intentá nuevamente.')
        return
      }

      window.plausible?.('lead_form_submitted')
      setSubmitted(true)
    } catch {
      setSubmitError('No se pudo enviar. Intente nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={overlayRef}
        onKeyDown={handleKeyDown}
        className="relative z-10 w-full sm:max-w-lg bg-surface-secondary border border-surface-elevated rounded-t-lg sm:rounded-sm p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-accent mb-1">Consulta</p>
            <h2 id="lead-modal-title" className="font-display text-xl font-bold text-text-primary">
              Ficha Técnica y Disponibilidad
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="flex items-center justify-center min-w-[44px] min-h-[44px] text-text-secondary hover:text-text-primary transition-colors -mr-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="font-display text-lg font-bold text-text-primary">¡Consulta enviada!</p>
            <p className="font-body text-sm text-text-secondary">Nos pondremos en contacto a la brevedad.</p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 border border-surface-elevated text-text-secondary font-body text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors rounded-sm"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            {/* Name */}
            <Field label="Nombre" error={errors.name}>
              <input
                ref={firstFocusableRef}
                id="lead-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-describedby={errors.name ? 'lead-name-error' : undefined}
                placeholder="Juan García"
                className={inputClass(!!errors.name)}
              />
            </Field>

            {/* Company */}
            <Field label="Empresa" error={errors.company}>
              <input
                id="lead-company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                aria-describedby={errors.company ? 'lead-company-error' : undefined}
                placeholder="García Exports S.A."
                className={inputClass(!!errors.company)}
              />
            </Field>

            {/* Email */}
            <Field label="Email" error={errors.email}>
              <input
                id="lead-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-describedby={errors.email ? 'lead-email-error' : undefined}
                placeholder="juan@empresa.com"
                className={inputClass(!!errors.email)}
              />
            </Field>

            {/* Port */}
            <Field label="Puerto de destino" error={errors.port}>
              <input
                id="lead-port"
                name="port"
                type="text"
                value={form.port}
                onChange={handleChange}
                aria-describedby={errors.port ? 'lead-port-error' : undefined}
                placeholder="Rotterdam, Shanghái, Miami..."
                className={inputClass(!!errors.port)}
              />
            </Field>

            {/* Product */}
            <Field label="Producto de interés" error={errors.product}>
              <select
                id="lead-product"
                name="product"
                value={form.product}
                onChange={handleChange}
                aria-describedby={errors.product ? 'lead-product-error' : undefined}
                className={inputClass(!!errors.product)}
              >
                <option value="">Seleccioná un producto</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </Field>

            {submitError && (
              <div className="flex items-center justify-between gap-3 px-4 py-3 border border-red-400/30 rounded-sm bg-red-400/5">
                <p className="font-body text-xs text-red-400">{submitError}</p>
                <button
                  type="button"
                  onClick={() => setSubmitError(null)}
                  className="font-body text-xs text-red-400 underline underline-offset-2 whitespace-nowrap"
                >
                  Reintentar
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full px-6 py-3 bg-accent text-surface-primary font-body text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors duration-200 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                'Enviar consulta'
              )}
            </button>

          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-xs uppercase tracking-widest text-text-secondary">{label}</label>
      {children}
      {error && <p className="font-body text-xs text-red-400">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `bg-surface-primary border ${hasError ? 'border-red-400/60' : 'border-surface-elevated'} text-text-primary font-body text-sm px-4 py-2.5 rounded-sm focus:outline-none focus:border-accent transition-colors placeholder:text-text-secondary/40 w-full`
}
