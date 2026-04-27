'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import { TEAM_MEMBERS, ALLIANCE_LOGOS } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as const },
  }),
}

export default function Ecosistema() {
  return (
    <SectionWrapper id="ecosistema">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">Ecosistema</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
          El equipo detrás del resultado
        </h2>
      </motion.div>

      {/* Team grid */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.id}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-surface-secondary border border-surface-elevated rounded-sm p-6 flex flex-col gap-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            {/* Avatar placeholder */}
            <div className="w-14 h-14 rounded-full bg-surface-elevated border border-accent/20 flex items-center justify-center">
              <span className="font-display text-sm font-bold text-accent">{member.initials}</span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-body text-xs uppercase tracking-widest text-accent">{member.role}</p>
              <p className="font-display text-base font-bold text-text-primary">{member.name}</p>
            </div>

            <p className="font-body text-sm text-text-secondary leading-relaxed">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Alliance logos strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-surface-elevated pt-12"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-text-secondary text-center mb-8">
          Alianzas estratégicas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {ALLIANCE_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-32 h-12 bg-surface-elevated border border-surface-elevated rounded-sm flex items-center justify-center"
            >
              {/* PLACEHOLDER — reemplazar con <Image> del logo real */}
              <span className="font-body text-xs text-text-secondary">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </SectionWrapper>
  )
}
