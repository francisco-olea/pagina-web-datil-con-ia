'use client'

import { useEffect, useRef, useState } from 'react'

const phases = [
  {
    title: 'Lanzamiento Agente Dátil con IA',
    date: 'Junio 2026',
    status: 'current',
    description: 'Lanzamiento oficial de la plataforma con agente entrenado en el ecosistema del dátil.',
  },
  {
    title: 'Integración análisis del clima',
    date: 'Agosto 2026',
    status: 'upcoming',
    description: 'Datos meteorológicos en tiempo real integrados para consultas sobre condiciones de cultivo.',
  },
  {
    title: 'Integración sistema de riego',
    date: 'Noviembre 2026',
    status: 'upcoming',
    description: 'Conecta tu sistema de riego para recomendaciones precisas e inteligentes.',
  },
  {
    title: 'Sistema Integral Productivo',
    date: '2027',
    status: 'upcoming',
    description: 'Sistema completo para la operación y estadística del dátil, incluyendo métricas, reportes y gestión de recursos.',
  },
]

function TimelineItem({
  phase,
  index,
  isLast,
}: {
  phase: (typeof phases)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex gap-6 lg:gap-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline indicator */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
            phase.status === 'current'
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border bg-card text-muted-foreground'
          }`}
          aria-hidden="true"
        >
          {phase.status === 'current' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span className="text-sm font-semibold">{index + 1}</span>
          )}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 flex-1 mt-2 min-h-[60px] ${
              phase.status === 'current' ? 'bg-primary/40' : 'bg-border'
            }`}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              phase.status === 'current'
                ? 'bg-primary/15 text-primary border border-primary/30'
                : 'bg-muted text-muted-foreground border border-border'
            }`}
          >
            {phase.date}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
      </div>
    </div>
  )
}

export function RoadmapSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      aria-labelledby="roadmap-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Hoja de ruta
          </p>
          <h2
            id="roadmap-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Roadmap del producto
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Conoce las próximas etapas de desarrollo de la plataforma.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {phases.map((phase, index) => (
            <TimelineItem
              key={phase.title}
              phase={phase}
              index={index}
              isLast={index === phases.length - 1}
            />
          ))}
        </div>

        {/* Roadmap image removed as requested */}
      </div>
    </section>
  )
}
