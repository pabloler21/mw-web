'use client'

import { motion } from 'framer-motion'
import { CALENDLY_URL } from '@/lib/constants'

export default function CTABlock() {
  return (
    <section className="relative overflow-hidden bg-surface-secondary border-y border-surface-elevated">

      {/* Accent glow */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 py-20 flex flex-col items-center text-center gap-8">

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-accent">
            Próximo paso
          </p>
          {/* PLACEHOLDER — reemplazar con título definitivo */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary max-w-2xl">
            ¿Listo para expandir tu negocio al mundo?
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* PLACEHOLDER — reemplazar con subtítulo definitivo */}
          <p className="font-body text-base text-text-secondary leading-relaxed text-center">
            Agendá una sesión estratégica con nuestro equipo.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-10 py-4 bg-accent text-surface-primary font-body text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors duration-200 rounded-sm text-center"
          >
            Agendar Estrategia
          </a>
        </motion.div>

      </div>
    </section>
  )
}
