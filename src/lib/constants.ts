export const SITE_NAME = 'MW Global Link'
export const SITE_DESCRIPTION =
  'Argentine agro-industrial exports connecting producers with global markets.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mwgloballink.com'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const NAV_LINKS = [
  { label: 'Ecosistema',       href: '#ecosistema'       },
  { label: 'Portfolio',        href: '#portfolio'        },
  { label: 'Intelligence Hub', href: '#intelligence-hub' },
  { label: 'Global Network',   href: '#global-network'   },
  { label: 'Insights',         href: '#insights'         },
]

export const CALENDLY_URL = 'https://calendly.com/TO_BE_CONFIGURED'

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mwgloballink',
  linkedin:  'https://www.linkedin.com/company/TO_BE_CONFIGURED',
}

export const CONTACT_EMAIL = 'contacto@mwgloballink.com'

export const PRODUCTS = [
  { id: 'aceite-oliva', label: 'Aceite de Oliva' },
  { id: 'alfalfa', label: 'Alfalfa' },
  { id: 'garbanzo', label: 'Garbanzo' },
  { id: 'otros', label: 'Otros' },
]

// PLACEHOLDER — reemplazar con datos reales del equipo (nombres, fotos, bios)
export const TEAM_MEMBERS = [
  {
    id: 'ceo',
    role: 'CEO & Founder',
    description: 'Estrategia transnacional y cierre de negocios',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'intelligence',
    role: 'Intelligence & Geopolitics',
    description: 'Análisis de riesgo y detección de oportunidades',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'tech',
    role: 'AI & Tech Infrastructure',
    description: 'Arquitectura de datos y agentes autónomos',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'art',
    role: 'Art & Brand Essence',
    description: 'Comunicación visual de élite',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'vanguardia',
    role: 'Vanguardia & Futuro',
    description: 'Strategic Aerospace & Environmental Intelligence',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
]

// PLACEHOLDER — reemplazar con logos reales de aliados/partners
export const ALLIANCE_LOGOS = [
  { id: 'partner-1', name: 'Partner 1' },
  { id: 'partner-2', name: 'Partner 2' },
  { id: 'partner-3', name: 'Partner 3' },
  { id: 'partner-4', name: 'Partner 4' },
]
