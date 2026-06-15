import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
