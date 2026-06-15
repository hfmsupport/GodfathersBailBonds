import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, Award, Shield } from 'lucide-react'

const HERO_IMAGE = 'https://godfathersbailbonds.us/wp-content/uploads/2024/11/godfather-banner.webp'

const trustItems = [
  { Icon: Clock,  title: 'OPEN 24/7/365',        desc: 'We are here when you need us most.' },
  { Icon: Award,  title: '30+ YEARS EXPERIENCE',  desc: 'Over 30 years of trusted bail bond service.' },
  { Icon: Shield, title: 'LICENSED & BONDED',     desc: 'Texas Licensed (License #74603)' },
]

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">

      {/* Ken Burns background */}
      <div className="absolute inset-0 anim-kenburns">
        <Image
          src={HERO_IMAGE}
          alt="Godfather's Bail Bonds – Houston Texas"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient overlay: dark left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/35" />
      {/* Extra bottom vignette for trust bar readability */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: headline + CTA */}
        <div>
          <p className="anim-fade-left text-[#C9A84C] text-xs font-bold mb-5 uppercase tracking-[0.22em]">
            WE KNOW THAT PEOPLE MAKE MISTAKES
          </p>

          <h1 className="anim-fade-left-d1 text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.04] mb-6">
            WE&apos;LL GET YOU OUT
            <br />
            <span className="text-[#C9A84C]">OF JAIL WITHIN&nbsp;HOURS</span>
          </h1>

          <p className="anim-fade-left-d2 text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
            Fast, discreet and professional bail bond services in Houston, Harris County and Montgomery County.
          </p>

          <Link href="/contact-us/" className="anim-fade-left-d3 btn-gold text-base">
            GET HELP NOW <span aria-hidden>→</span>
          </Link>
        </div>

        {/* RIGHT: call-to-action box (desktop only) */}
        <div className="hidden lg:flex justify-end anim-fade-right-d1">
          <div className="bg-black/70 border-2 border-[#C9A84C] rounded-lg p-8 w-full max-w-sm backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Phone size={28} className="text-[#C9A84C] shrink-0" />
              <div>
                <p className="text-[#C9A84C] font-bold text-sm tracking-widest">NEED HELP NOW?</p>
                <p className="text-gray-400 text-xs mt-0.5">WE ARE AVAILABLE 24/7</p>
              </div>
            </div>

            <a href="tel:7132243600" className="block">
              <p className="text-[#C9A84C] text-5xl font-black tracking-tight leading-none mb-7 hover:text-[#D4AF5F] transition-colors">
                713-224-3600
              </p>
            </a>

            <a href="tel:7132243600" className="btn-gold w-full justify-center text-base">
              <Phone size={18} />
              CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* ── Trust bar ── */}
      <div className="relative z-10 border-t border-[#C9A84C]/25 bg-black/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#C9A84C]/20">
          {trustItems.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 py-4 sm:py-0 sm:px-8 first:pl-0 last:pr-0 anim-fade-up-d${i + 2}`}
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#C9A84C] flex items-center justify-center shrink-0 hover:anim-gold-pulse transition-all hover:bg-[#C9A84C]/10">
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{title}</p>
                <p className="text-gray-400 text-xs mt-1 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
