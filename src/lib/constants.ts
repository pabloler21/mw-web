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

export const CALENDLY_URL = 'https://calendly.com/contacto-mwgloballink/30min?background_color=0a0a0f&text_color=e8e6e1&primary_color=c9a84c'

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/mwgloballink',
  linkedin:  'https://www.linkedin.com/company/mwgloballink',
}

export const CONTACT_EMAIL = 'contacto@mwgloballink.com'

export const PRODUCTS = [
  {
    id: 'fibras-bioenergia',
    label: 'Fibras & Bioenergía',
    description: 'Alfalfa y Pellets con estandarización internacional.',
    image: '/images/Alfalfa en fardo.jpg',
  },
  {
    id: 'gourmet-infusiones',
    label: 'Gourmet & Infusiones',
    description: 'Aceites de Oliva extra virgen y blends de té premium.',
    image: '/images/Aceite de oliva.jpg',
  },
  {
    id: 'ciencia-belleza',
    label: 'Ciencia y Belleza',
    description: 'Cosmética avanzada y bioinsumos.',
    image: '/images/cosmeticos.png',
  },
  {
    id: 'real-estate',
    label: 'Bienes de Capital',
    description: 'Oportunidades de inversión en desarrollos inmobiliarios.',
    image: '/images/Real Estate.jpg',
  },
  {
    id: 'cumplimiento-global',
    label: 'Cumplimiento Global',
    description: 'Servicios de Aduana, Certificaciones Internacionales e IMO Operator.',
    image: '/images/certerficar.png',
  },
  {
    id: 'tecnologia-innovacion',
    label: 'Tecnología e Innovación',
    description: 'Implementación de soluciones digitales, automatización comercial e inteligencia artificial aplicada al negocio.',
    image: '/images/tecnologia-ia.png',
  },
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
    role: 'Inteligencia & Geopolítica',
    description: 'Análisis de riesgo y detección de oportunidades',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'tech',
    role: 'IA & Infraestructura Tecnológica',
    description: 'Arquitectura de datos y agentes autónomos',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'art',
    role: 'Arte & Esencia de Marca',
    description: 'Comunicación visual de élite',
    name: 'Nombre Apellido',
    initials: 'NA',
  },
  {
    id: 'vanguardia',
    role: 'Vanguardia & Futuro',
    description: 'Inteligencia Aeroespacial y Medioambiental Estratégica',
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
