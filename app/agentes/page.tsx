import type { Metadata } from 'next'
import Image from 'next/image'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
  title: 'Agentes – Dátil con IA',
  description:
    'Conoce a Datileno, el agente de IA entrenado con fuentes especializadas en el ecosistema del dátil de la región noroeste de México.',
}

const capabilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Base de conocimiento especializada',
    description:
      'Entrenado con artículos científicos, libros, manuales técnicos, fotografías, cursos y videos relacionados con el cultivo, procesamiento y comercialización del dátil.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Contexto regional',
    description:
      'Su conocimiento está enfocado en las condiciones agroclimáticas, variedades y prácticas productivas de San Luis Río Colorado, Mexicali y la región noroeste de México.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Respuestas verificadas',
    description:
      'Cada respuesta de Datileno está respaldada por las fuentes incluidas en su base de conocimiento, reduciendo la posibilidad de información incorrecta o desactualizada.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Lenguaje natural',
    description:
      'Interactúa con Datileno en español, usando el lenguaje cotidiano del campo. No se necesita conocimiento técnico para hacer preguntas o interpretar respuestas.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Respuesta instantánea',
    description:
      'Datileno genera respuestas en segundos, disponible en cualquier momento. Sin esperar a un técnico, sin agendar citas, sin buscar en documentos manualmente.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Actualización continua',
    description:
      'La base de conocimiento de Datileno se actualiza periódicamente con nuevas investigaciones, prácticas emergentes y retroalimentación de productores de la región.',
  },
]

const topics = [
  'Fenología y ciclo de vida de la palma datilera',
  'Control de plagas y enfermedades',
  'Manejo de riego y nutrición',
  'Cosecha, empaque y postcosecha',
  'Variedades: Medjool, Deglet Noor, Zahidi y otras',
  'Calidad, normas y exportación',
  'Procesamiento y valor agregado',
  'Condiciones climáticas regionales',
  'Prácticas de polinización manual',
  'Análisis de suelos y fertilización',
]

export default function AgentesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.72 0.18 52 / 0.12), transparent)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Agente de IA
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Conoce a <span className="text-primary">Datileno</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            El agente de inteligencia artificial entrenado exclusivamente con información especializada del ecosistema del dátil en la región noroeste de México.
          </p>
        </div>
      </section>

      {/* Agent profile card */}
      <section className="py-12" aria-labelledby="agent-profile">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-border overflow-hidden"
            style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 lg:p-12">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10">
                  <Image
                    src="/images/datileno-avatar.png"
                    alt="Avatar de Datileno, el agente de IA de Dátil con IA"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Info */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h2 id="agent-profile" className="text-3xl font-bold text-foreground">
                    Datileno
                  </h2>
                  <p className="text-primary font-medium mt-1">Agente especializado en dátil</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Datileno es el núcleo de Dátil con IA. Fue entrenado y configurado con un corpus curado de fuentes especializadas en el dátil, con énfasis en las condiciones productivas, climáticas y operativas de la región noroeste de México. Su propósito es responder preguntas técnicas y operativas de manera precisa, accesible y en tiempo real.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {['Español', 'Región noroeste MX', 'Actualizado 2025', 'Fuentes verificadas'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-primary/20 bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 lg:py-16" aria-labelledby="capabilities-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="capabilities-heading" className="text-3xl font-bold text-foreground mb-4">
              Capacidades del agente
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Datileno combina tecnología de lenguaje natural de última generación con una base de conocimiento especializada y verificada.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border p-6 space-y-3 hover:border-primary/40 transition-colors duration-200"
                style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                  {cap.icon}
                </div>
                <h3 className="font-semibold text-foreground">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-12 lg:py-16" aria-labelledby="topics-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-border p-8 lg:p-12"
            style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 id="topics-heading" className="text-2xl font-bold text-foreground mb-2">
                  Temas que domina Datileno
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  La base de conocimiento abarca las principales áreas del ecosistema productivo del dátil.
                </p>
                <ul className="space-y-3" role="list">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center" aria-hidden="true">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-56 flex-shrink-0 flex flex-col gap-4">
                <div
                  className="rounded-xl border border-primary/20 p-5 space-y-1"
                  style={{ backgroundColor: 'oklch(0.20 0.028 52)' }}
                >
                  <p className="text-3xl font-bold text-primary">+50</p>
                  <p className="text-sm text-muted-foreground">fuentes indexadas</p>
                </div>
                <div
                  className="rounded-xl border border-border p-5 space-y-1"
                  style={{ backgroundColor: 'oklch(0.20 0.028 52)' }}
                >
                  <p className="text-3xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">regiones productoras cubiertas</p>
                </div>
                <div
                  className="rounded-xl border border-border p-5 space-y-1"
                  style={{ backgroundColor: 'oklch(0.20 0.028 52)' }}
                >
                  <p className="text-3xl font-bold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">disponibilidad del agente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Conversa con Datileno ahora
          </h2>
          <p className="text-muted-foreground mb-8">
            Accede de forma gratuita si eres productor de dátil de la región.
          </p>
          <a
            href="https://chat.datilconia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:opacity-90"
            style={{ backgroundColor: 'oklch(0.72 0.18 52)' }}
          >
            Iniciar conversación
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
