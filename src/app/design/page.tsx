export default function DesignPage() {
  const colors = [
    { name: "surface-primary",   value: "#0A0A0F", className: "bg-surface-primary border border-surface-elevated" },
    { name: "surface-secondary", value: "#14141A", className: "bg-surface-secondary" },
    { name: "surface-elevated",  value: "#1E1E28", className: "bg-surface-elevated"  },
    { name: "accent",            value: "#C9A84C", className: "bg-accent"            },
    { name: "text-primary",      value: "#E8E8ED", className: "bg-text-primary"      },
    { name: "text-secondary",    value: "#8A8A9A", className: "bg-text-secondary"    },
  ];

  return (
    <div className="min-h-screen bg-surface-primary text-text-primary font-body p-12">
      <div className="max-w-content mx-auto space-y-16">

        <div>
          <h1 className="font-display text-4xl font-bold">Design Tokens</h1>
          <p className="text-text-secondary mt-2">MW Global Link — visual identity reference</p>
        </div>

        {/* Colors */}
        <section>
          <h2 className="text-xs font-bold mb-6 uppercase tracking-widest text-text-secondary">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {colors.map((color) => (
              <div key={color.name} className="rounded-lg overflow-hidden border border-surface-elevated">
                <div className={`h-20 ${color.className}`} />
                <div className="p-3 bg-surface-secondary">
                  <p className="text-text-primary text-sm font-medium">{color.name}</p>
                  <p className="text-text-secondary text-xs mt-0.5">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-xs font-bold mb-6 uppercase tracking-widest text-text-secondary">Typography</h2>
          <div className="bg-surface-secondary rounded-lg p-8 space-y-6">
            <div>
              <p className="text-xs text-text-secondary mb-3 uppercase tracking-widest">Display — Instrument Sans</p>
              <p className="font-display text-5xl font-bold text-text-primary leading-tight">MW Global Link</p>
              <p className="font-display text-3xl font-bold text-text-primary mt-3">Argentine Agro-Industrial</p>
              <p className="font-display text-xl text-text-primary mt-2">Premium export company</p>
            </div>
            <div className="border-t border-surface-elevated pt-6">
              <p className="text-xs text-text-secondary mb-3 uppercase tracking-widest">Body — DM Sans</p>
              <p className="font-body text-base text-text-primary leading-relaxed">
                Conectamos productores argentinos con importadores internacionales.
                Calidad, confianza y trayectoria en el mercado global.
              </p>
              <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">
                Texto secundario — información de soporte, etiquetas, captions.
              </p>
            </div>
          </div>
        </section>

        {/* Accent */}
        <section>
          <h2 className="text-xs font-bold mb-6 uppercase tracking-widest text-text-secondary">Accent</h2>
          <div className="flex flex-wrap items-center gap-6">
            <button className="px-6 py-2.5 border border-accent text-accent font-body text-sm uppercase tracking-widest hover:bg-accent hover:text-surface-primary transition-colors rounded-sm">
              Ver portafolio
            </button>
            <span className="text-accent font-display text-xl font-bold">Destacado en gold</span>
            <span className="text-accent text-sm">→ enlace de acción</span>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-xs font-bold mb-6 uppercase tracking-widest text-text-secondary">Spacing</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-text-secondary text-xs w-48 shrink-0">--section-gap (8rem)</span>
              <div className="h-3 bg-accent/20 border border-accent/40 rounded" style={{ width: "8rem" }} />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-text-secondary text-xs w-48 shrink-0">--content-max-width (1200px)</span>
              <div className="h-3 bg-surface-elevated border border-surface-elevated rounded flex-1 max-w-content" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
