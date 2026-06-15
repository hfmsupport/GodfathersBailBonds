import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Phone size={24} className="text-yellow-600" />
              <div>
                <p className="font-bold text-lg text-gray-900">713-224-3600</p>
                <p className="text-gray-600 text-sm">Call us 24/7 – We answer!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 mb-1">1112 Wood St</p>
                <p className="text-gray-600 text-sm">Houston, TX 77002</p>
                <p className="text-gray-600 text-xs mt-1">(Just minutes from the Harris County Jail &amp; Justice Center)</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-yellow-600" />
              <div>
                <p className="font-bold text-lg text-gray-900">OPEN 24/7/365</p>
                <p className="text-gray-600 text-sm">Always available when you need us</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-yellow-600">Home</Link>
              <Link href="/about-us/" className="hover:text-yellow-600">About Us</Link>
              <Link href="/harris-county-bail-bonds/" className="hover:text-yellow-600">Harris County Bail Bonds</Link>
              <Link href="/houston-bail-bonds/" className="hover:text-yellow-600">Houston Bail Bonds</Link>
              <Link href="/the-bail-bonds-process/" className="hover:text-yellow-600">Bail Bonds Process</Link>
              <Link href="/types-of-bonds/" className="hover:text-yellow-600">Types of Bonds</Link>
              <Link href="/what-is-bail/" className="hover:text-yellow-600">What is Bail?</Link>
              <Link href="/blog/" className="hover:text-yellow-600">Blog</Link>
              <Link href="/faq/" className="hover:text-yellow-600">FAQ</Link>
              <Link href="/contact-us/" className="hover:text-yellow-600">Contact Us</Link>
            </nav>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">WE TREAT YOU LIKE FAMILY</h3>
            <p className="text-gray-700 text-sm">
              You are not just a case number. We are here to help you through a difficult time with respect and compassion.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <span className="text-yellow-400 font-bold">G</span>
            </div>
            <p className="text-gray-400 text-sm">GODFATHER&apos;S BAIL BONDS</p>
          </div>
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>Proudly serving Houston, Harris County and Montgomery County.</p>
            <p className="mt-2">License #74603 • Licensed &amp; Bonded in Texas</p>
            <p className="mt-2">© 2024 Godfather&apos;s Bail Bonds. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
