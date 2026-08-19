import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Shield } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us/', label: 'About Us' },
  { href: '/harris-county-bail-bonds/', label: 'Harris County Bail Bonds' },
  { href: '/houston-bail-bonds/', label: 'Houston Bail Bonds' },
  { href: '/the-bail-bonds-process/', label: 'Bail Bonds Process' },
  { href: '/types-of-bonds/', label: 'Types of Bonds' },
  { href: '/what-is-bail/', label: 'What is Bail?' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact-us/', label: 'Contact Us' },
]

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/images/logo.png"
            alt="Godfather's Bail Bonds"
            width={160}
            height={126}
            className="h-24 w-auto mb-4"
          />
          <h2 className="text-2xl font-black tracking-widest text-[#C9A84C] uppercase">
            Godfather&apos;s Bail Bonds
          </h2>
          <div className="mt-2 h-px w-24 bg-[#C9A84C]" />
          {/* Social icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://www.facebook.com/GodfathersBail/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/15 transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/godfather-bail-bonds/about/"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/15 transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/explore/locations/382845918/godfathers-bail-bonds/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C]/15 transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-1">Contact Us</h4>

            <a href="tel:7132243600" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/10 transition">
                <Phone size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight group-hover:text-[#C9A84C] transition">713-224-3600</p>
                <p className="text-gray-400 text-xs">Call us anytime — we answer 24/7</p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">1112 Wood St</p>
                <p className="text-gray-400 text-sm">Houston, TX 77002</p>
                <p className="text-gray-500 text-xs mt-1">Near Harris County Jail &amp; Justice Center</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0">
                <Clock size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">Open 24/7/365</p>
                <p className="text-gray-400 text-xs">Always here when you need us most</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center shrink-0">
                <Shield size={16} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">License #74603</p>
                <p className="text-gray-400 text-xs">Licensed &amp; Bonded in Texas</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-400 text-sm hover:text-[#C9A84C] transition flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA box */}
          <div className="border border-[#C9A84C]/40 rounded-lg p-7 flex flex-col items-center text-center bg-white/[0.03]">
            <p className="text-[#C9A84C] font-black text-xs uppercase tracking-widest mb-3">Need Help Now?</p>
            <p className="text-white text-sm leading-relaxed mb-6">
              You are not just a case number. We treat every client like family and work quickly to get your loved one home.
            </p>
            <a
              href="tel:7132243600"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8973f] text-black font-bold text-sm px-6 py-3 rounded transition w-full justify-center"
            >
              <Phone size={16} />
              CALL 713-224-3600
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A84C]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Godfather&apos;s Bail Bonds. All Rights Reserved. &nbsp;&bull;&nbsp; License #74603
          </p>
          <p>
            Designed &amp; Developed by{' '}
            <a
              href="https://hiddenfallsmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:underline"
            >
              Hidden Falls Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
