const footerLinks = [
  {
    heading: 'Producto',
    links: [
      { label: 'Agentes', href: '/agentes' },
      { label: 'Integraciones', href: '/integraciones' },
      { label: 'Características', href: '/#caracteristicas' },
    ],
  },
  {
    heading: 'Recursos',
    links: [
      { label: 'Fuentes de información', href: '/fuentes' },
      { label: 'Contáctanos', href: '/contacto' },
    ],
  },
  {
    heading: 'Precios',
    links: [
      { label: 'Planes', href: '/precios' },
    ],
  },
]

const legalLinks = [
  { label: 'Políticas de privacidad', href: '/privacidad' },
  { label: 'Términos del servicio', href: '/terminos' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-sm font-bold">D</span>
              </div>
              <span className="font-semibold text-background text-base">Dátil con IA</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Plataforma de inteligencia artificial especializada en el ecosistema del dátil de la región noroeste de México.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-semibold text-background text-sm mb-4">{col.heading}</h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2026 Dátil con IA. Todos los derechos reservados.
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-background/50 hover:text-background/80 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
