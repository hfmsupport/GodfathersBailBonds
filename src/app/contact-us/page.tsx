import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function ContactUs() {
  return (
    <main className="bg-white w-full">
      <Header />
      <section className="w-full bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C9A961]">Contact Us</h1>
          <p className="text-gray-300 mt-4 text-lg">We are available 24/7/365 — call us anytime.</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <Phone size={40} className="text-yellow-600" />
            <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
            <a href="tel:7132243600" className="text-yellow-600 font-bold text-xl hover:underline">713-224-3600</a>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MapPin size={40} className="text-yellow-600" />
            <h3 className="font-bold text-gray-900 text-lg">Address</h3>
            <p className="text-gray-600">1112 Wood St<br />Houston, TX 77002</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Clock size={40} className="text-yellow-600" />
            <h3 className="font-bold text-gray-900 text-lg">Hours</h3>
            <p className="text-gray-600">Open 24/7/365<br />We never close</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
