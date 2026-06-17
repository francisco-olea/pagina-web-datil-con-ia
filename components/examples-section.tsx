'use client'

import { useState } from 'react'
import Image from 'next/image'

const examples = [
  {
    id: 1,
    title: 'Consulta de producción',
    caption: 'Optimización del proceso de cosecha',
    image: '/images/example-1.png',
    alt: 'Ejemplo de consulta sobre producción y cosecha de dátil en el chat de IA',
  },
  {
    id: 2,
    title: 'Control de calidad',
    caption: 'Verificación de estándares de inspección',
    image: '/images/example-2.png',
    alt: 'Ejemplo de consulta sobre control de calidad e inspección del dátil',
  },
  {
    id: 3,
    title: 'Logística y empaque',
    caption: 'Procesos operativos de empacado',
    image: '/images/example-3.png',
    alt: 'Ejemplo de consulta sobre logística y empaque del dátil',
  },
]

export function ExamplesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="examples-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Casos reales
          </p>
          <h2
            id="examples-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Ejemplos del chat en acción
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Mira cómo productores y profesionales del dátil usan la plataforma para resolver sus consultas.
          </p>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <div
              key={ex.id}
              className="group relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={ex.image}
                  alt={ex.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-card">
                <h3 className="font-semibold text-foreground">{ex.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{ex.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image
                src={examples[activeIndex].image}
                alt={examples[activeIndex].alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 bg-card">
              <h3 className="font-semibold text-foreground">{examples[activeIndex].title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{examples[activeIndex].caption}</p>
            </div>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Ejemplos de chat">
            {examples.map((ex, i) => (
              <button
                key={ex.id}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Ver ${ex.title}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === activeIndex ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
