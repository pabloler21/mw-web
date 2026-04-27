'use client'

import { motion } from 'framer-motion'
import { openCalendly } from '@/lib/calendly'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background gradient (placeholder — replace with stock image) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #0A0A0F 0%, #14141A 50%, #0A0A0F 100%)',
        }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="max-w-content mx-auto px-6 text-center flex flex-col items-center gap-6">

        <motion.p
          className="font-body text-xs uppercase tracking-[0.3em] text-accent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          MW Global Link
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {/* PLACEHOLDER — reemplazar con título definitivo */}
          Conectamos el agro argentino{' '}
          <span className="text-accent">con el mundo</span>
        </motion.h1>

        <motion.p
          className="font-body text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* PLACEHOLDER — reemplazar con subtítulo definitivo */}
          Exportaciones agroindustriales con inteligencia global.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <button
            onClick={openCalendly}
            className="px-8 py-3 bg-accent text-surface-primary font-body text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors duration-200 rounded-sm"
          >
            Agendar Estrategia
          </button>
          <a
            href="#ecosistema"
            className="px-8 py-3 border border-surface-elevated text-text-secondary font-body text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-200 rounded-sm"
          >
            Conocer más
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#ecosistema"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-label="Scroll hacia abajo"
      >
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          >
            <path d="M1 1L10 10L19 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        ))}
      </motion.a>

    </section>
  )
}
