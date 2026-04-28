'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { openCalendly } from '@/lib/calendly'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        animate={{
          backgroundColor: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0)',
          borderColor: scrolled ? 'rgba(30, 30, 40, 1)' : 'rgba(30, 30, 40, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="font-display text-sm font-bold tracking-[0.2em] text-accent uppercase">
            MW Global Link
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCalendly}
              className="hidden md:inline-flex items-center px-5 py-2 border border-accent text-accent font-body text-xs uppercase tracking-widest hover:bg-accent hover:text-surface-primary transition-colors duration-200 rounded-sm"
            >
              Agendar Estrategia
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 min-w-[44px] min-h-[44px] items-center justify-center"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-px bg-text-primary origin-center"
                animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-px bg-text-primary"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-px bg-text-primary origin-center"
                animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface-primary flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="absolute top-5 right-6 text-text-secondary hover:text-text-primary text-2xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-display text-2xl font-bold text-text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => { handleNavClick(); openCalendly() }}
              className="mt-4 px-8 py-3 border border-accent text-accent font-body text-sm uppercase tracking-widest hover:bg-accent hover:text-surface-primary transition-colors rounded-sm"
            >
              Agendar Estrategia
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
