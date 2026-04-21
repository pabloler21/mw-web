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
