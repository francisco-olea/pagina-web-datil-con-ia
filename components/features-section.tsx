'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const cards = [
  {
    number: '01',
    title: 'Pregunta a la velocidad de tu pensamiento',
    description:
      'Pregúntale a Dátil con IA y consigue la respuesta que estás buscando. Sin demoras, sin complicaciones.',
    image: '/images/feature-speed.png',
    alt: 'Ilustración de velocidad de respuesta del chat de IA',
  },
  {
    number: '02',
    title: 'Una plataforma que aprende contigo',
    description:
      'No solo las fuentes ayudan a que Dátil con IA pueda responder; también las preguntas realizadas ayudan a mejorar su capacidad de inteligencia.',
    image: '/images/feature-learn.png',
    alt: 'Ilustración de aprendizaje continuo de la plataforma de IA',
  },
  {
    number: '03',
    title: 'Listo para usarse al instante',
    description:
      'Esta plataforma fue diseñada para resolver dudas de manera pronta y efectiva. Accede y comienza a preguntar de inmediato.',
    image: '/images/feature-instant.png',
    alt: 'Ilustración de activación instantánea de la plataforma',
  },
  {
    number: '04',
    title: 'El agente especializado en dátil de la región',
    description:
      'Este modelo fue diseñado y construido con datos de la región de San Luis Río Colorado y Mexicali, para dar respuestas precisas y relevantes localmente.',
    image: '/images/feature-region.png',
    alt: 'Ilustración del mapa de la región noroeste de México con palma de dátil',
  },
]

function FeatureCard({
  card,
  index,
}: {
  card: (typeof cards)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="sticky rounded-2xl border border-border/70 overflow-hidden shadow-lg transition-all duration-700"
      style={{
        top: `${96 + index * 16}px`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 60}ms`,
        /* Fully opaque surface — no transparency */
        backgroundColor: 'oklch(0.19 0.024 42)',
      }}
    >
      <div className="grid md:grid-cols-2 gap-0 min-h-[360px]">
        {/* Text */}
        <div
          className="flex flex-col justify-center p-8 lg:p-10 order-2 md:order-1"
          style={{ backgroundColor: 'oklch(0.19 0.024 42)' }}
        >
          <span className="text-4xl font-bold mb-3 font-mono" style={{ color: 'oklch(0.72 0.18 52 / 0.4)' }}>{card.number}</span>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 text-balance" style={{ color: 'oklch(0.96 0.008 75)' }}>
            {card.title}
          </h3>
          <p className="leading-relaxed" style={{ color: 'oklch(0.68 0.03 65)' }}>{card.description}</p>
        </div>
        {/* Image */}
        <div
          className="relative min-h-[200px] md:min-h-0 order-1 md:order-2 overflow-hidden"
          style={{ backgroundColor: 'oklch(0.16 0.020 42)' }}
        >
          <Image
            src={card.image}
            alt={card.alt}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="caracteristicas"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Características
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Todo lo que necesitas para dominar el conocimiento del dátil
          </h2>
        </div>

        {/* Stacking cards */}
        <div className="space-y-6">
          {cards.map((card, i) => (
            <FeatureCard key={card.number} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
