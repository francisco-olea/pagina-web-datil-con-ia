import type { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
  title: 'Términos del Servicio – Dátil con IA',
  description:
    'Términos y condiciones de uso de Dátil con IA. Lee nuestras políticas sobre el uso de la plataforma, limitaciones y responsabilidades.',
}

const sections = [
  {
    id: 'aceptacion',
    title: '1. Aceptación de los términos',
    content: `Al acceder y utilizar la plataforma Dátil con IA, disponible en datilconia.com y chat.datilconia.com, el usuario acepta quedar vinculado por los presentes Términos del Servicio. Si no estás de acuerdo con alguna de estas condiciones, debes abstenerte de usar la Plataforma.

Dátil con IA se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en este sitio. El uso continuo de la Plataforma tras dichas modificaciones implica la aceptación de los nuevos Términos.`,
  },
  {
    id: 'descripcion',
    title: '2. Descripción del servicio',
    content: `Dátil con IA es una plataforma de inteligencia artificial especializada en el ecosistema del dátil de la región noroeste de México. El servicio principal consiste en permitir a los usuarios interactuar con "Datileno", un agente de IA entrenado con fuentes de información especializadas sobre el cultivo, procesamiento, calidad y comercialización del dátil.

La Plataforma está diseñada principalmente para productores, profesionales y personas relacionadas con la industria datilera de las regiones de San Luis Río Colorado, Sonora y Mexicali, Baja California.`,
  },
  {
    id: 'uso-aceptable',
    title: '3. Uso aceptable',
    content: `El usuario se compromete a utilizar la Plataforma exclusivamente para fines legales y conforme a estos Términos. Queda estrictamente prohibido:

• Usar la Plataforma para fines ilegales, fraudulentos o no autorizados.
• Intentar acceder a sistemas, datos o cuentas sin autorización.
• Enviar contenido malicioso, spam, o información falsa al agente.
• Reproducir, distribuir o explotar comercialmente el contenido de la Plataforma sin autorización previa y por escrito.
• Realizar ingeniería inversa, descompilar o intentar extraer el código fuente de la Plataforma.
• Usar herramientas automatizadas para acceder o interactuar con el servicio de manera masiva sin autorización.`,
  },
  {
    id: 'limitaciones',
    title: '4. Limitaciones del servicio',
    content: `El Plan Productor (gratuito) está sujeto a un límite de aproximadamente 10 consultas por mes calendario. Las consultas no utilizadas no se acumulan para el mes siguiente.

Dátil con IA se reserva el derecho de modificar, suspender o descontinuar el servicio, o cualquier parte del mismo, en cualquier momento y sin previo aviso, incluyendo la disponibilidad del plan gratuito. Se notificará con razonable anticipación cuando sea posible.`,
  },
  {
    id: 'precision',
    title: '5. Exactitud de la información',
    content: `Datileno es un agente de inteligencia artificial. Si bien está entrenado con fuentes verificadas y especializadas, sus respuestas pueden contener imprecisiones, errores u omisiones. La información proporcionada por la Plataforma tiene carácter orientativo y no sustituye la asesoría técnica profesional de agrónomos, ingenieros o especialistas certificados.

Dátil con IA no garantiza la exactitud, integridad, vigencia o idoneidad de la información para un caso de uso específico. El usuario asume la responsabilidad de verificar la información antes de tomar decisiones críticas de producción.`,
  },
  {
    id: 'propiedad',
    title: '6. Propiedad intelectual',
    content: `Todo el contenido de la Plataforma — incluyendo textos, gráficos, logotipos, nombre "Datileno", código, diseño y base de conocimiento — es propiedad de Dátil con IA y está protegido por las leyes de propiedad intelectual aplicables en México.

El usuario no adquiere ningún derecho de propiedad intelectual sobre el contenido de la Plataforma por el mero hecho de utilizarla. Se otorga únicamente una licencia limitada, no exclusiva e intransferible para el uso personal y no comercial del servicio.`,
  },
  {
    id: 'privacidad',
    title: '7. Privacidad y datos personales',
    content: `El tratamiento de datos personales de los usuarios se rige por las Políticas de Privacidad de Dátil con IA, disponibles en datilconia.com/privacidad. Dichas Políticas de Privacidad forman parte integrante de estos Términos del Servicio.`,
  },
  {
    id: 'responsabilidad',
    title: '8. Limitación de responsabilidad',
    content: `En la máxima medida permitida por la ley, Dátil con IA no será responsable por:

• Daños directos, indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de la Plataforma.
• Pérdidas económicas derivadas de decisiones tomadas con base en la información proporcionada por Datileno.
• Interrupciones, errores, retrasos o fallas técnicas del servicio.
• Accesos no autorizados a las conversaciones del usuario derivados de vulnerabilidades ajenas a nuestro control.

La responsabilidad total de Dátil con IA frente al usuario, bajo cualquier causa de acción, no excederá en ningún caso el monto pagado por el usuario a la Plataforma en los últimos 12 meses.`,
  },
  {
    id: 'suspension',
    title: '9. Suspensión y cancelación',
    content: `Dátil con IA se reserva el derecho de suspender o cancelar el acceso de cualquier usuario que viole estos Términos del Servicio, sin necesidad de aviso previo y sin responsabilidad hacia el usuario afectado.

El usuario puede dejar de usar la Plataforma en cualquier momento. Si deseas solicitar la eliminación de tus datos, puedes hacerlo a través del formulario de Contacto.`,
  },
  {
    id: 'legislacion',
    title: '10. Legislación aplicable y jurisdicción',
    content: `Estos Términos del Servicio se rigen e interpretan de conformidad con las leyes vigentes en los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada de estos Términos, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la ciudad de Mexicali, Baja California, México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.`,
  },
  {
    id: 'contacto',
    title: '11. Contacto',
    content: `Si tienes preguntas o comentarios sobre estos Términos del Servicio, puedes contactarnos a través de la sección de Contacto disponible en datilconia.com/contacto.`,
  },
]

export default function TerminosPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm text-muted-foreground mb-3">Última actualización: junio de 2026</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Términos del Servicio
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Estos Términos del Servicio regulan el uso de la plataforma Dátil con IA. Te recomendamos leerlos detenidamente antes de usar el servicio.
            </p>
          </div>

          {/* Table of contents */}
          <nav
            className="rounded-xl border border-border p-5 mb-10"
            style={{ backgroundColor: 'oklch(0.17 0.022 42)' }}
            aria-label="Tabla de contenidos"
          >
            <h2 className="text-sm font-semibold text-foreground mb-3">Contenido</h2>
            <ol className="space-y-1.5 list-decimal list-inside" role="list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {section.title.replace(/^\d+\.\s/, '')}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`heading-${section.id}`}>
                <h2
                  id={`heading-${section.id}`}
                  className="text-lg font-semibold text-foreground mb-3 scroll-mt-24"
                >
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
