'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Godfather's Bail Bonds"
            width={164}
            height={129}
            className="w-[164px] h-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-semibold text-sm">
          <Link href="/" className="hover:text-yellow-600 transition">HOME</Link>
          <Link href="/about-us/" className="hover:text-yellow-600 transition">ABOUT US</Link>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-600 transition">
              BAIL BONDS <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg py-2 w-56 z-50">
                <Link href="/harris-county-bail-bonds/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-600">Harris County Bail Bonds</Link>
                <Link href="/houston-bail-bonds/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-600">Houston Bail Bonds</Link>
                <Link href="/the-bail-bonds-process/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-600">Bail Bonds Process</Link>
                <Link href="/types-of-bonds/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-600">Types of Bail Bonds</Link>
                <Link href="/what-is-bail/" className="block px-4 py-2 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-600">What is Bail?</Link>
              </div>
            )}
          </div>
          <Link href="/blog/" className="hover:text-yellow-600 transition">BLOG</Link>
          <Link href="/faq/" className="hover:text-yellow-600 transition">FAQ</Link>
          <Link href="/contact-us/" className="hover:text-yellow-600 transition">CONTACT</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:7132243600"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded font-bold text-sm flex items-center gap-2 transition"
          >
            <Phone size={20} />
            <div className="text-left hidden sm:block">
              <div className="text-xs">24/7 - CALL NOW</div>
              <div>713-224-3600</div>
            </div>
          </a>
          <button
            className="md:hidden p-2 text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-gray-800">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">HOME</Link>
            <Link href="/about-us/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">ABOUT US</Link>
            <div className="text-gray-500 text-xs uppercase tracking-wide mt-2">BAIL BONDS</div>
            <div className="pl-3 flex flex-col gap-3 font-normal">
              <Link href="/harris-county-bail-bonds/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">Harris County Bail Bonds</Link>
              <Link href="/houston-bail-bonds/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">Houston Bail Bonds</Link>
              <Link href="/the-bail-bonds-process/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">Bail Bonds Process</Link>
              <Link href="/types-of-bonds/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">Types of Bail Bonds</Link>
              <Link href="/what-is-bail/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">What is Bail?</Link>
            </div>
            <Link href="/blog/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">BLOG</Link>
            <Link href="/faq/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">FAQ</Link>
            <Link href="/contact-us/" onClick={() => setMobileOpen(false)} className="hover:text-yellow-600">CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
