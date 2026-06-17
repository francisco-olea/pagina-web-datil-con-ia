import type { Metadata } from 'next'
import { PageLayout } from '@/components/page-layout'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad – Dátil con IA',
  description:
    'Políticas de privacidad de Dátil con IA. Conoce cómo recopilamos, usamos y protegemos tus datos personales conforme a la LFPDPPP.',
}

const sections = [
  {
    id: 'responsable',
    title: '1. Responsable del tratamiento de datos',
    content: `Dátil con IA (en adelante "la Plataforma") es responsable del tratamiento de los datos personales que se recopilan a través del sitio web datilconia.com y de la plataforma de conversación disponible en chat.datilconia.com.

Para cualquier consulta relacionada con el tratamiento de tus datos personales, puedes comunicarte con nosotros a través de la sección de Contacto de este sitio web.`,
  },
  {
    id: 'datos',
    title: '2. Datos personales que recopilamos',
    content: `Recopilamos los siguientes tipos de datos personales según la interacción que tengas con la Plataforma:

• Datos de identificación: nombre completo y número de teléfono, cuando se proporcionan voluntariamente a través del formulario de contacto.
• Datos productivos: nombre de la datilera, tamaño de superficie productiva y ubicación geográfica, cuando el usuario se identifica como productor de dátil.
• Datos de uso: conversaciones realizadas con el agente Datileno, consultas enviadas y respuestas obtenidas.
• Datos técnicos: dirección IP, tipo de navegador, sistema operativo y páginas visitadas, recopilados automáticamente con fines de análisis de funcionamiento.`,
  },
  {
    id: 'finalidades',
    title: '3. Finalidades del tratamiento',
    content: `Los datos personales que recopilamos son utilizados para las siguientes finalidades:

Finalidades primarias (necesarias para el servicio):
• Brindar el servicio de consultas inteligentes a través del agente Datileno.
• Gestionar y responder mensajes enviados a través del formulario de contacto.
• Identificar el perfil del usuario para personalizar la experiencia de uso.
• Mejorar la base de conocimiento de la Plataforma con retroalimentación de usuarios.

Finalidades secundarias (opcionales):
• Enviarte comunicaciones sobre actualizaciones relevantes de la Plataforma, si nos das tu consentimiento expreso.`,
  },
  {
    id: 'base-legal',
    title: '4. Base legal y fundamento jurídico',
    content: `El tratamiento de tus datos personales se realiza con fundamento en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, así como en los Lineamientos del Aviso de Privacidad emitidos por el INAI.

El tratamiento se basa en el consentimiento que otorgas al usar la Plataforma y al proporcionar voluntariamente tus datos a través de los formularios disponibles.`,
  },
  {
    id: 'comparticion',
    title: '5. Transferencia de datos a terceros',
    content: `Dátil con IA no vende, renta ni comercializa tus datos personales. Podemos compartir información con terceros únicamente en los siguientes casos:

• Proveedores de servicios tecnológicos que procesan datos en nombre de la Plataforma, bajo contratos de confidencialidad (por ejemplo, servicios de infraestructura en la nube y modelos de lenguaje).
• Cuando sea requerido por autoridades competentes mediante orden judicial o requerimiento legal aplicable.

Los terceros que reciban datos están obligados a tratar la información conforme a estándares equivalentes de privacidad.`,
  },
  {
    id: 'derechos',
    title: '6. Derechos ARCO',
    content: `Conforme a la LFPDPPP, tienes derecho a:

• Acceso: conocer qué datos personales tenemos sobre ti y cómo los utilizamos.
• Rectificación: solicitar la corrección de datos inexactos o incompletos.
• Cancelación: solicitar la eliminación de tus datos cuando ya no sean necesarios.
• Oposición: oponerte al tratamiento de tus datos para finalidades secundarias.

Para ejercer cualquiera de estos derechos, contáctanos a través del formulario de Contacto indicando claramente el derecho que deseas ejercer. Responderemos en un plazo máximo de 20 días hábiles.`,
  },
  {
    id: 'cookies',
    title: '7. Uso de cookies y tecnologías de seguimiento',
    content: `La Plataforma puede utilizar cookies de sesión y persistentes con las siguientes finalidades:

• Cookies técnicas: necesarias para el funcionamiento correcto del sitio (sesión, seguridad).
• Cookies analíticas: para comprender cómo los usuarios interactúan con el sitio y mejorar su funcionamiento.

Puedes configurar tu navegador para rechazar o eliminar cookies, aunque esto puede afectar la funcionalidad de algunas partes de la Plataforma.`,
  },
  {
    id: 'menores',
    title: '8. Protección de menores de edad',
    content: `La Plataforma está dirigida a usuarios mayores de 18 años. No recopilamos intencionalmente datos personales de menores de edad. Si detectamos que hemos recopilado datos de un menor sin consentimiento parental, los eliminaremos de forma inmediata.`,
  },
  {
    id: 'cambios',
    title: '9. Cambios a este aviso de privacidad',
    content: `Dátil con IA se reserva el derecho de modificar este Aviso de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización. Te recomendamos revisarlo periódicamente. El uso continuo de la Plataforma tras la publicación de cambios implica la aceptación de los mismos.`,
  },
  {
    id: 'contacto',
    title: '10. Contacto',
    content: `Para cualquier consulta, ejercicio de derechos ARCO o reporte relacionado con el tratamiento de tus datos personales, puedes contactarnos a través de nuestra página de Contacto en datilconia.com/contacto.`,
  },
]

export default function PrivacidadPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm text-muted-foreground mb-3">Última actualización: junio de 2026</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Políticas de Privacidad
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              En Dátil con IA valoramos y respetamos tu privacidad. Este Aviso de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tus datos personales conforme a la legislación aplicable en México.
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
                <div className="prose-sm space-y-3">
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
