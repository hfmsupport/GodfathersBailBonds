'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Landmark, Building2, Car, Pill, UserRound, Gavel } from 'lucide-react'

const services = [
  { Icon: Landmark,  label: 'HARRIS COUNTY\nBAIL BONDS',          href: '/harris-county-bail-bonds/' },
  { Icon: Building2, label: 'HOUSTON\nBAIL BONDS',                href: '/houston-bail-bonds/' },
  { Icon: Car,       label: 'DUI/DRIVING WHILE\nINTOXICATED',     href: '/the-bail-bonds-process/' },
  { Icon: Pill,      label: 'DRUG\nCHARGES',                      href: '/types-of-bonds/' },
  { Icon: UserRound, label: 'DOMESTIC\nVIOLENCE',                 href: '/types-of-bonds/' },
  { Icon: Gavel,     label: 'THEFT/\nFRAUD',                      href: '/types-of-bonds/' },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.service-card')
    if (!cards?.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('reveal-visible'), i * 100)
        })
        observer.disconnect()
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-heading">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">BAIL BOND SERVICES</h2>
          </div>
          <p className="text-gray-500 mt-3 text-sm">We handle all types of bonds — available 24/7 across Harris County</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map(({ Icon, label, href }, i) => (
            <Link
              key={i}
              href={href}
              className={`service-card reveal-hidden group flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-200 hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] group-hover:scale-110 transition-all duration-300">
                <Icon
                  size={36}
                  className="text-[#C9A84C] group-hover:text-black transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-black text-gray-900 text-xs tracking-wide leading-tight uppercase whitespace-pre-line group-hover:text-[#C9A84C] transition-colors">
                {label}
              </h3>
              {/* Gold underline on hover */}
              <div className="w-0 h-0.5 bg-[#C9A84C] mt-3 group-hover:w-10 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Not sure which type of bond you need?{' '}
          <a href="tel:7132243600" className="text-[#C9A84C] font-semibold hover:underline">
            Call us at 713-224-3600
          </a>{' '}
          — we&apos;ll guide you through every step.
        </p>
      </div>
    </section>
  )
}
