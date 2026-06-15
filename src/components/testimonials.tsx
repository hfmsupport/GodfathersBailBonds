'use client'

import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    stars: 5,
    quote: 'We started with Fay on a Friday and continued with Virginia on the weekend. Our son\'s situation was complicated with bonds in two counties, but Virginia explained clearly what needed to be done. She was also very understanding and sympathetic. Both ladies were wonderful.',
    name: 'Gary Jaeger',
    role: 'Google Review',
  },
  {
    stars: 5,
    quote: 'This bail bond place is the way to be!!! They are open 24 hours and are there to work hard to bail you out. Fay was the one to help me out and thumbs up for this woman — she definitely knows what she\'s doing. Good job Fay!',
    name: 'Genesis Medina',
    role: 'Google Review',
  },
  {
    stars: 5,
    quote: 'The lady who answered the phone, who by the way has been in the business 20+ years, was the most kind and empathetic person I ever spoke to about anything that had to do with jail. This bonding company is a true business — they are willing to negotiate a payment plan no matter the size of the bond.',
    name: 'Hugh Johnson',
    role: 'Google Review',
  },
]

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-[#C9A84C] text-[#C9A84C]" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.testimonial-card')
    if (!cards?.length) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('reveal-visible'), i * 160)
        })
        observer.disconnect()
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="section-heading">
            <h2 className="text-4xl font-black text-white tracking-tight">WHAT OUR CLIENTS SAY</h2>
          </div>
          <p className="text-gray-500 mt-3 text-sm">Real stories from families we&apos;ve helped across Houston</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map(({ stars, quote, name, role }, i) => (
            <div
              key={i}
              className="testimonial-card reveal-hidden group relative bg-[#1a1a1a] border border-white/5 border-l-2 border-l-[#C9A84C] rounded-xl p-8 hover:border-l-[#D4AF5F] hover:shadow-[0_0_30px_rgba(201,168,76,0.12)] transition-all duration-400"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Quote icon */}
              <Quote
                size={36}
                className="text-[#C9A84C]/20 absolute top-6 right-6 group-hover:text-[#C9A84C]/35 transition-colors"
              />

              {/* Stars */}
              <StarRow count={stars} />

              {/* Text */}
              <p className="text-gray-300 mt-4 mb-6 leading-relaxed text-sm italic">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#C9A84C] font-black text-sm">{name[0]}</span>
                </div>
                <div>
                  <p className="text-[#C9A84C] font-bold text-sm">{name}</p>
                  <p className="text-gray-600 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 border border-[#C9A84C]/30 rounded-full px-8 py-3 text-gray-400 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <span>5.0 rating · 30+ years of trusted service in Houston</span>
          </div>
        </div>
      </div>
    </section>
  )
}
