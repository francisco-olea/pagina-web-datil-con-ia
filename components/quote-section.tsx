export function QuoteSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Frase destacada"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/70">
            Nuestra visión
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance">
            Dátil sin{' '}
            <span
              className="relative inline-block"
              style={{
                backgroundImage: 'linear-gradient(135deg, oklch(0.50 0.12 52), oklch(0.62 0.13 55))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              límites
            </span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-6"
            style={{ background: 'oklch(0.50 0.12 52)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
