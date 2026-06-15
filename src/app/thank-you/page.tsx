import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Phone } from 'lucide-react'

export default function ThankYou() {
  return (
    <main className="bg-white w-full">
      <Header />
      <section className="w-full bg-gray-900 py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle size={64} className="text-[#C9A961] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-gray-300 text-lg mb-8">We have received your message and will be in touch shortly. For immediate assistance, call us now.</p>
          <a href="tel:7132243600" className="inline-flex items-center gap-3 bg-[#C9A961] hover:bg-yellow-600 text-white px-8 py-4 rounded font-bold text-lg transition mb-6">
            <Phone size={24} />Call 713-224-3600
          </a>
          <div className="mt-6">
            <Link href="/" className="text-gray-400 hover:text-white underline">Return to Homepage</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
