'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: '¿Qué es Dátil con IA?',
    a: 'Una plataforma entrenada con fuentes enfocadas en todos los temas alrededor del dátil, especialmente sobre la región noroeste de México.',
  },
  {
    q: '¿Cómo funciona Dátil con IA?',
    a: 'La pregunta es enviada a un agente de inteligencia artificial previamente entrenado con fuentes recopiladas para generar una respuesta óptima.',
  },
  {
    q: '¿Cuánto cuesta Dátil con IA?',
    a: 'Por ahora la plataforma aún se encuentra en desarrollo, pero si el usuario es productor de dátil se brindará acceso exclusivo sin costo.',
  },
  {
    q: '¿Cómo accedo a Dátil con IA?',
    a: 'Con usuario y contraseña asignados en: chat.datilconia.com',
  },
  {
    q: '¿Qué tipo de preguntas puedo hacer?',
    a: 'Todo tipo de preguntas relacionadas con el ecosistema del dátil: producción, calidad, logística, administración, clima, riego, gastronomía y más.',
  },
  {
    q: '¿Qué tipo de integraciones tiene?',
    a: 'Actualmente cuenta con integración con IA. Próximamente: análisis climático y sistema de riego.',
  },
  {
    q: '¿Qué son los créditos?',
    a: 'Es la forma de consumo del servicio. Cada pregunta y respuesta consume créditos dependiendo de la extensión. Se recomienda ser breve y claro para optimizar el uso de créditos.',
  },
  {
    q: '¿Mi información está segura?',
    a: 'Sí. La plataforma toma seriamente la seguridad digital y sigue prácticas de protección de datos para evitar exposición de información sensible.',
  },
]

export function FaqSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70 mb-3">
            Dudas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Preguntas frecuentes
          </h2>
        </div>

        <Accordion type="single" className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 text-sm sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
