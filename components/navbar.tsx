'use client'

import { useState, useEffect, useRef } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  {
    label: 'Producto',
    href: undefined,
    items: [
      { title: 'Agentes', desc: 'Agente entrenado con información del dátil', href: '/agentes' },
      { title: 'Integraciones', desc: 'Conecta herramientas', href: '/integraciones' },
      { title: 'Características', desc: 'Conoce lo que ofrecemos', href: '/#caracteristicas' },
    ],
  },
  {
    label: 'Recursos',
    href: undefined,
    items: [
      { title: 'Fuentes de información', desc: 'Explicamos qué fuentes son consideradas', href: '/fuentes' },
      { title: 'Contáctanos', desc: 'Mándanos tu opinión o idea para mejorar el servicio', href: '/contacto' },
    ],
  },
  {
    label: 'Precios',
    href: '/precios',
    items: [],
  },
]

function DropdownMenu({ items }: { items: { title: string; desc: string; href: string }[] }) {
  if (items.length === 0) return null
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="block px-4 py-3 hover:bg-accent/60 transition-colors rounded-lg mx-1"
        >
          <span className="block text-sm font-medium text-foreground">{item.title}</span>
          {item.desc && (
            <span className="block text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</span>
          )}
        </a>
      ))}
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Dátil con IA – inicio">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">D</span>
            </div>
            <span className="font-semibold text-foreground text-base">Dátil con IA</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href && item.items.length === 0 ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-accent/50 transition-colors"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup={item.items.length > 0 ? 'true' : undefined}
                  >
                    {item.label}
                    {item.items.length > 0 && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                )}
                {activeDropdown === item.label && <DropdownMenu items={item.items} />}
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              href="https://chat.datilconia.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: 'sm' }), 'bg-primary text-primary-foreground hover:bg-primary/90 font-medium')}
            >
              Chatear ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-border py-4 space-y-1"
          >
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                </button>
                {activeDropdown === item.label && item.items.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub) => (
                      <a
                        key={sub.title}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-lg transition-colors"
                      >
                        {sub.title}
                        {sub.desc && <span className="block text-xs opacity-70 mt-0.5">{sub.desc}</span>}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-2">
              <a
                href="https://chat.datilconia.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'default' }), 'w-full bg-primary text-primary-foreground hover:bg-primary/90')}
              >
                Chatear ahora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
