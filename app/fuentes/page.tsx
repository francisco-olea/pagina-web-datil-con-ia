import type { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
  title: 'Fuentes de Información – Dátil con IA',
  description:
    'Conoce cómo recopilamos, filtramos y subimos la información que alimenta a Datileno: artículos científicos, libros, fotografías, cursos, videos y más.',
}

const pipeline = [
  {
    step: '01',
    title: 'Identificación de fuentes',
    description:
      'Nuestro equipo busca y evalúa continuamente fuentes de información relacionadas con el dátil. Se priorizan fuentes provenientes de instituciones académicas, centros de investigación, organismos agropecuarios y expertos reconocidos de la región noroeste de México.',
  },
  {
    step: '02',
    title: 'Recopilación',
    description:
      'Una vez identificadas, las fuentes son descargadas, digitalizadas o transcritas según su formato. En el caso de videos y cursos, se generan transcripciones estructuradas. Las fotografías son catalogadas con metadatos descriptivos de contexto agronómico.',
  },
  {
    step: '03',
    title: 'Filtrado y verificación',
    description:
      'Cada documento pasa por un proceso de revisión para verificar su relevancia, vigencia y rigor técnico. Se eliminan fuentes con información desactualizada, sin respaldo científico o fuera del contexto de la región. Solo el material aprobado avanza.',
  },
  {
    step: '04',
    title: 'Procesamiento y estructuración',
    description:
      'El contenido aprobado se segmenta, etiqueta por tema y etapa productiva, y se convierte a formatos legibles para el modelo. Los documentos extensos se dividen en fragmentos semánticos para facilitar la búsqueda y recuperación de información precisa.',
  },
  {
    step: '05',
    title: 'Carga a la base de conocimiento',
    description:
      'Los fragmentos procesados se integran a la base de conocimiento vectorial de Datileno. Cada fragmento conserva referencia a su fuente original para garantizar trazabilidad y transparencia en las respuestas del agente.',
  },
  {
    step: '06',
    title: 'Actualización continua',
    description:
      'La base de conocimiento no es estática. Se revisa y actualiza periódicamente para incorporar nuevas investigaciones, correcciones y retroalimentación de los productores que utilizan la plataforma.',
  },
]

const sourceTypes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    type: 'Artículos científicos',
    description: 'Publicaciones arbitradas de revistas especializadas en agronomía, fisiología vegetal, manejo postcosecha y tecnología de alimentos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    type: 'Libros y manuales técnicos',
    description: 'Obras especializadas sobre cultivo de palma datilera, manejo de huertas, control de plagas, calidad y comercialización del dátil.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    type: 'Fotografías',
    description: 'Imágenes documentadas de etapas fenológicas, síntomas de plagas y enfermedades, procesos de cosecha y empaque, catalogadas con contexto técnico.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    type: 'Videos y cursos',
    description: 'Material audiovisual de capacitación, demostraciones de campo, webinars de expertos y cursos en línea sobre manejo productivo del dátil.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    type: 'Reportes técnicos',
    description: 'Informes de dependencias como INIFAP, SAGARPA/SADER, CIAD, universidades regionales y organismos del sector agropecuario de México.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    type: 'Conocimiento de productores',
    description: 'Retroalimentación y buenas prácticas documentadas de productores experimentados de la región, que enriquecen el conocimiento práctico del agente.',
  },
]

export default function FuentesPage() {
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
            Transparencia de datos
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Fuentes de información
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            La calidad de Datileno depende de la calidad de sus fuentes. Aquí explicamos de dónde proviene la información, cómo se selecciona y cómo llega a la base de conocimiento.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-8 lg:py-12" aria-labelledby="pipeline-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pipeline-heading" className="text-2xl font-bold text-foreground mb-10 text-center">
            Proceso de curación
          </h2>
          <div className="relative space-y-0">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-8 bottom-8 w-px hidden sm:block"
              style={{ backgroundColor: 'oklch(0.72 0.18 52 / 0.25)' }}
              aria-hidden="true"
            />
            {pipeline.map((step, index) => (
              <div key={step.step} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Step indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 border-primary/40"
                    style={{
                      backgroundColor: index === 0 ? 'oklch(0.72 0.18 52)' : 'oklch(0.19 0.024 42)',
                      color: index === 0 ? 'oklch(0.10 0.015 40)' : 'oklch(0.72 0.18 52)',
                    }}
                  >
                    {step.step}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pt-2.5 pb-2">
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source types */}
      <section className="py-12 lg:py-16" aria-labelledby="sources-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="sources-heading" className="text-2xl font-bold text-foreground mb-3">
              Tipos de fuentes utilizadas
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              La diversidad de formatos enriquece el conocimiento de Datileno y le permite responder desde múltiples perspectivas del ecosistema del dátil.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sourceTypes.map((source) => (
              <div
                key={source.type}
                className="rounded-xl border border-border p-6 space-y-3 hover:border-primary/40 transition-colors duration-200"
                style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary">
                  {source.icon}
                </div>
                <h3 className="font-semibold text-foreground">{source.type}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment note */}
      <section className="py-10 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-primary/20 p-8"
            style={{ backgroundColor: 'oklch(0.20 0.028 52)' }}
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Compromiso con la calidad de la información</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ninguna fuente entra a la base de conocimiento sin pasar por revisión humana. Si detectas información incorrecta o desactualizada en las respuestas de Datileno, puedes reportarla a través de nuestra página de contacto. Tu retroalimentación es parte esencial del proceso de mejora continua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
