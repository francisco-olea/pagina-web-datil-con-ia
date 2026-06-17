import type { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Precios – Dátil con IA',
  description:
    'Acceso gratuito a Dátil con IA para productores de dátil de la región noroeste de México. Conoce los planes disponibles.',
}

const freeFeatures = [
  'Acceso a Datileno, el agente especializado en dátil',
  'Hasta 10 consultas por mes',
  'Respuestas en lenguaje natural en español',
  'Base de conocimiento con +50 fuentes verificadas',
  'Información sobre cultivo, calidad, cosecha y más',
  'Contexto regional: San Luis Río Colorado y Mexicali',
  'Disponible desde cualquier dispositivo',
  'Sin necesidad de instalación',
]

export default function PreciosPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Planes y precios
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Creemos que el conocimiento especializado del dátil debe ser accesible. Por eso, el acceso para productores de la región es completamente gratuito.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24" aria-labelledby="plans-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="plans-heading" className="sr-only">Planes disponibles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Free plan */}
            <article
              className="relative rounded-2xl border-2 border-primary overflow-hidden"
              style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
              aria-labelledby="plan-gratuito"
            >
              {/* Popular badge */}
              <div
                className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-semibold tracking-wide"
                style={{ backgroundColor: 'oklch(0.72 0.18 52)', color: 'oklch(0.10 0.015 40)' }}
              >
                Para productores de dátil
              </div>

              <div className="p-8 pt-14">
                <div className="mb-6">
                  <h3 id="plan-gratuito" className="text-xl font-bold text-foreground mb-1">
                    Plan Productor
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Acceso a la plataforma para datileros de la región noroeste de México.
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-bold text-primary">$0</span>
                  <div className="pb-1">
                    <span className="text-foreground font-medium">MXN</span>
                    <span className="block text-xs text-muted-foreground">por mes</span>
                  </div>
                </div>

                <a
                  href="https://chat.datilconia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: 'default' }), 'w-full font-semibold mb-8')}
                  style={{ backgroundColor: 'oklch(0.72 0.18 52)', color: 'oklch(0.10 0.015 40)' }}
                >
                  Comenzar gratis
                </a>

                {/* Divider */}
                <div className="border-t border-border mb-6" />

                {/* Features */}
                <ul className="space-y-3" role="list">
                  {freeFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'oklch(0.72 0.18 52 / 0.15)' }}
                        aria-hidden="true"
                      >
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Limit note */}
                <div
                  className="mt-6 rounded-xl border border-border p-4"
                  style={{ backgroundColor: 'oklch(0.14 0.018 40)' }}
                >
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Limite de uso:</strong> El plan gratuito incluye aproximadamente 10 consultas por mes. Las consultas se reinician el primer día de cada mes.
                  </p>
                </div>
              </div>
            </article>

            {/* Coming soon plan */}
            <article
              className="relative rounded-2xl border border-border overflow-hidden opacity-70"
              style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
              aria-labelledby="plan-proximo"
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 id="plan-proximo" className="text-xl font-bold text-foreground">
                      Plan Profesional
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-amber-500/30 bg-amber-500/10 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                      Próximamente
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Funcionalidades avanzadas para operadores, técnicos y empresas del ecosistema del dátil.
                  </p>
                </div>

                {/* Price placeholder */}
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-bold text-foreground/30">—</span>
                </div>

                <button
                  disabled
                  className={cn(buttonVariants({ variant: 'outline' }), 'w-full font-semibold mb-8')}
                >
                  Próximamente
                </button>

                {/* Divider */}
                <div className="border-t border-border mb-6" />

                {/* Teaser features */}
                <ul className="space-y-3" role="list">
                  {[
                    'Todo lo del Plan Productor',
                    'Consultas ilimitadas por mes',
                    'Integración con sistemas de clima y riego',
                    'Historial completo de conversaciones',
                    'Acceso multiusuario para tu equipo',
                    'Soporte prioritario',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center border border-border"
                        aria-hidden="true"
                      >
                        <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-muted-foreground/70 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-border/50 p-4" style={{ backgroundColor: 'oklch(0.14 0.018 40)' }}>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    ¿Te interesa? <a href="/contacto" className="text-primary hover:underline">Contáctanos</a> y te avisaremos cuando esté disponible.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* FAQ note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              ¿Tienes dudas sobre los planes?{' '}
              <a href="/contacto" className="text-primary hover:underline font-medium">
                Escríbenos
              </a>{' '}
              y te ayudamos.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
