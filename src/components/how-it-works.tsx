'use client'

import { useEffect, useRef } from 'react'
import { Phone, Search, CreditCard, Home } from 'lucide-react'

const steps = [
  { Icon: Phone,      number: 1, title: 'CALL US ANYTIME',           desc: 'We are open 24/7/365. One call is all it takes.' },
  { Icon: Search,     number: 2, title: 'WE FIND THE BOND DETAILS',  desc: 'We handle the paperwork and court details for you.' },
  { Icon: CreditCard, number: 3, title: 'CHOOSE A PAYMENT PLAN',     desc: 'We accept Cash App, Venmo, and Zelle. Installment plans available.' },
  { Icon: Home,       number: 4, title: 'WE GET THEM RELEASED',      desc: 'Fast, discreet and professional. Back home within hours.' },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.step-card')
    const line = lineRef.current
    if (!els && !line) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        // Animate steps in with stagger
        els?.forEach((el, i) => {
          setTimeout(() => el.classList.add('reveal-visible'), i * 150)
        })
        // Draw the connecting line
        if (line) {
          setTimeout(() => line.classList.add('anim-draw-line'), 100)
        }
        observer.disconnect()
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-heading">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">HOW IT WORKS</h2>
          </div>
          <p className="text-gray-500 mt-3 text-sm">Four simple steps to getting your loved one out of jail</p>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gray-100 overflow-hidden z-0">
            <div ref={lineRef} className="h-full bg-[#C9A84C] w-0" style={{ transition: 'width 1.2s ease-out' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {steps.map(({ Icon, number, title, desc }, i) => (
              <div
                key={i}
                className="step-card reveal-hidden flex flex-col items-center text-center group"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center group-hover:border-[#C9A84C] group-hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                    <Icon size={46} className="text-[#C9A84C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#C9A84C] text-black flex items-center justify-center font-black text-base shadow-md">
                    {number}
                  </div>
                </div>

                <h3 className="font-black text-gray-900 text-sm tracking-wide mb-2 uppercase">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="tel:7132243600" className="btn-gold text-base">
            <Phone size={18} />
            Call Us Now — 713-224-3600
          </a>
        </div>
      </div>
    </section>
  )
}
