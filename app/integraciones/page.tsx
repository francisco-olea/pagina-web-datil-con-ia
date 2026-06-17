import type { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
  title: 'Integraciones – Dátil con IA',
  description:
    'Dátil con IA se integrará con sistemas de análisis climático y de riego para ofrecer información contextualizada a los productores de la región.',
}

const integrations = [
  {
    status: 'coming-soon',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    name: 'Sistema de análisis del clima',
    description:
      'Integración con estaciones meteorológicas y modelos de pronóstico climático de la región de San Luis Río Colorado y Mexicali. Datileno podrá contextualizar sus respuestas con datos de temperatura, humedad, evapotranspiración y riesgo de heladas en tiempo real.',
    features: [
      'Datos de temperatura máxima, mínima y media',
      'Humedad relativa y punto de rocío',
      'Velocidad y dirección del viento',
      'Pronóstico de heladas y golpes de calor',
      'Índice de evapotranspiración de referencia (ETo)',
      'Acumulación de unidades calor (UC)',
    ],
  },
  {
    status: 'coming-soon',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    name: 'Sistema de riego',
    description:
      'Conexión con plataformas de manejo y programación de riego por goteo y microaspersión. Datileno podrá consultar el estado actual de la humedad del suelo, los programas de riego activos y recomendar ajustes basados en el estado fenológico del cultivo.',
    features: [
      'Monitoreo de humedad del suelo por sensor',
      'Programación y activación remota de turnos de riego',
      'Historial de láminas aplicadas por bloque',
      'Cálculo de necesidades hídricas por etapa fenológica',
      'Alertas de estrés hídrico o exceso de agua',
      'Registro y exportación de datos de riego',
    ],
  },
]

export default function IntegracionesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.72 0.18 52 / 0.10), transparent)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Próximamente
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Integraciones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Estamos desarrollando conexiones con los sistemas clave de la operación datilera para que Datileno pueda responder con información contextualizada y en tiempo real de tu parcela.
          </p>
        </div>
      </section>

      {/* Integration cards */}
      <section className="py-8 pb-20" aria-labelledby="integrations-list">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 id="integrations-list" className="sr-only">Lista de integraciones</h2>
          {integrations.map((integration) => (
            <article
              key={integration.name}
              className="rounded-2xl border border-border overflow-hidden"
              style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
            >
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                    {integration.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{integration.name}</h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-amber-500/30 bg-amber-500/10 text-amber-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                        Próximamente
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{integration.description}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border mb-6" />

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-4">Datos y funciones incluidas</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                    {integration.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center" aria-hidden="true">
                          <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Notify banner */}
      <section className="py-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-primary/20 p-8 text-center"
            style={{ backgroundColor: 'oklch(0.20 0.028 52)' }}
          >
            <h2 className="text-xl font-bold text-foreground mb-2">
              ¿Quieres ser el primero en probarlas?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Escríbenos a través de la página de contacto y te avisaremos cuando las integraciones estén disponibles para tu datilera.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm text-primary-foreground transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'oklch(0.72 0.18 52)' }}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
