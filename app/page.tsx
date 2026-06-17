import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { QuoteSection } from '@/components/quote-section'
import { FeaturesSection } from '@/components/features-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { ExamplesSection } from '@/components/examples-section'
import { FaqSection } from '@/components/faq-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <QuoteSection />
        <FeaturesSection />
        <RoadmapSection />
        <ExamplesSection />
        <section id="faq">
          <FaqSection />
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
