import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CtaSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.50 0.12 52) 0%, oklch(0.58 0.14 58) 100%)',
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: 'oklch(0.85 0.08 68)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 blur-3xl"
            style={{ background: 'oklch(0.99 0.005 80)' }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70">
              Comienza hoy
            </p>
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance"
            >
              ¿Listo para conversar?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto leading-relaxed">
              Accede a Dátil con IA y empieza a optimizar tus decisiones con inteligencia artificial especializada en el dátil.
            </p>
            <div className="flex justify-center pt-2">
              <a
                href="https://chat.datilconia.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'lg' }), 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 shadow-lg hover:shadow-xl transition-all duration-200')}
              >
                Chatear ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
