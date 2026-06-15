'use client'

import { useEffect, useRef } from 'react'
import { Phone, MapPin, Clock, Heart } from 'lucide-react'

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cols = sectionRef.current?.querySelectorAll<HTMLElement>('.contact-col')
    if (!cols?.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        cols.forEach((col, i) => {
          setTimeout(() => col.classList.add('reveal-visible'), i * 150)
        })
        observer.disconnect()
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Left: Contact info ── */}
          <div className="contact-col reveal-hidden reveal-left space-y-8">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">GET IN TOUCH</h3>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                <Phone size={20} className="text-[#C9A84C] group-hover:text-black transition-colors" />
              </div>
              <div>
                <a href="tel:7132243600" className="text-2xl font-black text-gray-900 hover:text-[#C9A84C] transition-colors leading-none">
                  713-224-3600
                </a>
                <p className="text-gray-500 text-sm mt-1">Call us 24/7 — we always answer</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                <MapPin size={20} className="text-[#C9A84C] group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="font-bold text-gray-900">1112 Wood St</p>
                <p className="text-gray-600 text-sm">Houston, TX 77002</p>
                <p className="text-gray-400 text-xs mt-1">Just minutes from the Harris County Jail &amp; Justice Center</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                <Clock size={20} className="text-[#C9A84C] group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="font-bold text-gray-900">OPEN 24/7/365</p>
                <p className="text-gray-500 text-sm">Our office hasn&apos;t closed in 30 years</p>
              </div>
            </div>
          </div>

          {/* ── Center: Google Maps ── */}
          <div className="contact-col reveal-hidden md:col-span-1 rounded-xl overflow-hidden shadow-md border border-gray-100 h-72 md:h-auto">
            <iframe
              src="https://maps.google.com/maps?q=1112+Wood+St,+Houston,+TX+77002&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '288px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Godfather's Bail Bonds Location"
            />
          </div>

          {/* ── Right: We treat you like family ── */}
          <div className="contact-col reveal-hidden reveal-right">
            <div className="bg-[#111111] rounded-xl p-8 h-full flex flex-col justify-center border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-6">
                <Heart size={26} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
                WE TREAT YOU<br />LIKE FAMILY
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                You are not just a case number. We are here to help you through a difficult time with respect and compassion. Our bond agents have been serving Houston families for over 30 years.
              </p>
              <a href="tel:7132243600" className="btn-gold self-start">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
