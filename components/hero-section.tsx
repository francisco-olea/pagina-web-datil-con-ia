'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const words = [
  'productores',
  'profesionales',
  'administradores',
  'operadores',
  'inspectores de calidad',
  'empacadores',
  'procesadores',
  'químicos',
  'educativos',
  'chefs',
  'gestores turísticos',
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'oklch(0.72 0.18 52)' }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'oklch(0.65 0.14 75)' }}
        />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center gap-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          El futuro del dátil comienza aquí.
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
        >
          <span className="text-primary">Dátil con IA</span> apoya a{' '}
          <span className="relative inline-block min-w-[14rem]">
            <span
              className={`inline-block transition-all duration-400 text-primary/80 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              aria-live="polite"
              aria-atomic="true"
            >
              {words[currentIndex]}
            </span>
          </span>{' '}
          de dátil a brindar respuestas inteligentes.
        </h1>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://chat.datilconia.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200')}
          >
            Chatear ahora
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-muted-foreground">
          Diseñado para la región de San Luis Río Colorado y Mexicali.
        </p>

        {/* Chat preview image */}
        <div className="relative w-full max-w-3xl mt-4">
          {/* Glow behind card */}
          <div
            className="absolute -inset-6 rounded-3xl opacity-25 blur-3xl"
            style={{ background: 'oklch(0.72 0.18 52 / 0.5)' }}
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
            <Image
              src="/images/chat-preview.png"
              alt="Vista previa de la plataforma Dátil con IA mostrando una conversación de chat sobre el cultivo del dátil"
              width={960}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 left-6 bg-card border border-border rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">Datos verificados</p>
              <p className="text-xs text-muted-foreground">Fuentes especializadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
