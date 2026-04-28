import { NAV_LINKS, SOCIAL_LINKS, CONTACT_EMAIL, SITE_NAME } from '@/lib/constants'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-surface-elevated">

      {/* Main grid */}
      <div className="max-w-content mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Left — brand */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-accent uppercase">
            MW Global Link
          </span>
          <p className="font-body text-sm text-text-secondary leading-relaxed max-w-xs">
            Exportaciones agroindustriales argentinas conectando productores con mercados globales.
          </p>
        </div>

        {/* Center — quick links */}
        <div className="flex flex-col gap-4 items-center">
          <p className="font-body text-xs uppercase tracking-widest text-text-secondary">Navegación</p>
          <nav className="flex flex-col gap-3 items-center">
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
        </div>

        {/* Right — social + email */}
        <div className="flex flex-col gap-4 items-center md:items-end text-center md:text-right">
          <p className="font-body text-xs uppercase tracking-widest text-text-secondary">Contacto</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 font-body text-sm text-text-secondary hover:text-accent transition-colors duration-200"
          >
            <EmailIcon />
            {CONTACT_EMAIL}
          </a>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[44px] min-h-[44px] text-text-secondary hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-elevated">
        <div className="max-w-content mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-text-secondary">
            © {currentYear} {SITE_NAME}. Todos los derechos reservados.
          </p>
          <div className="w-8 h-px bg-accent/40" />
        </div>
      </div>

    </footer>
  )
}
