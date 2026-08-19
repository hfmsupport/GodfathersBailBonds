import Image from 'next/image'
import Link from 'next/link'
import { Phone, Shield, Clock, MapPin, Award, ChevronRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const revalidate = 3600

const WHY_ITEMS = [
  {
    icon: Award,
    title: 'Flexibility',
    desc: 'We provide bonds for drug charges, domestic violence, DUI/driving while intoxicated, and theft/fraud charges.',
  },
  {
    icon: MapPin,
    title: 'Locations',
    desc: 'We service bail bonds in the Houston and Montgomery county area.',
  },
  {
    icon: Phone,
    title: 'Assistance',
    desc: 'Payment plans available. We accept Cash App, Venmo, and Zelle.',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    desc: "We're open 24 hours a day, 7 days a week.",
  },
  {
    icon: Shield,
    title: 'Licensed & Bonded',
    desc: 'Fully licensed Texas bail bondsman. License #74603.',
  },
  {
    icon: Award,
    title: '30+ Years Experience',
    desc: 'Steve Sondag has been helping clients since 1995 — one of the most trusted bondsmen in Texas.',
  },
]

export default function AboutUs() {
  return (
    <div className="bg-[#0d0d0d] text-white w-full min-h-screen">
      <Header />

      {/* ════════════ HERO ════════════ */}
      <section className="relative w-full min-h-[300px] flex items-end overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#080808]" />
        <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
            <Link href="/" className="text-[#C9A84C] hover:underline">Home</Link>
            <ChevronRight size={12} />
            <span className="text-gray-400">About Us</span>
          </nav>
          <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-2">
            Welcome to the
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight">
            Godfather&apos;s Bail Bonds
          </h1>
          <div className="w-16 h-[3px] bg-[#C9A84C] mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 text-base max-w-xl">
            Trusted bail bond experts serving Houston and Harris County since 1995.
          </p>
        </div>
      </section>

      {/* ════════════ TRUST BAR ════════════ */}
      <div className="bg-[#111] border-y border-[#C9A84C]/12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { Icon: Shield, label: 'Licensed & Bonded', sub: 'License #74603' },
            { Icon: Award,  label: '30+ Years',         sub: 'Since 1995'     },
            { Icon: Clock,  label: 'Available 24/7',    sub: 'Day or night'   },
            { Icon: MapPin, label: 'Harris County',     sub: 'Houston area'   },
          ].map(({ Icon, label, sub }, i) => (
            <div key={i} className="flex items-center gap-3">
              <Icon size={18} className="text-[#C9A84C] shrink-0" />
              <div>
                <p className="text-white font-bold text-xs">{label}</p>
                <p className="text-gray-500 text-[11px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ MAIN BIO SECTION ════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
              About Our Company
            </h2>
            <div className="space-y-4 text-[#e5e5e5] text-[15px] leading-relaxed">
              <p>
                At Godfather&apos;s Bail Bonds, we are experts in the bail bonds industry. We are fully licensed, and offer bonds for traffic, DUI, misdemeanor and felony arrests. We service the Houston area and are a member of the Better Business Bureau.
              </p>
              <p>
                Our founder is Steve Sondag, who began work as a bail bondsman when he opened his first bail bonds office in 1995 and has been helping people in their time of need ever since. Steve studied at the University of Houston where he graduated in 1985.
              </p>
              <p>
                He believes that community is important and is a member of many local organizations such as the Professional Bail Agent of the United States (PBUS), the Conroe Chamber of Commerce, Professional Bondsmen of Texas (PBT), the Harris County Bail Bond Association (HCBBA), and also the Lion&apos;s Club.
              </p>
              <p>
                Steve has been with his wife for more than 40 years and they have one child. His business is his passion and he employs only the most experienced bail bond agents who will treat his clients with the same professionalism and compassion that he does himself.
              </p>
              <p>
                As one of the most trusted bail bond agents in Texas, Steve is dedicated to his business, his employees, and his clients.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:7132243600" className="btn-gold text-sm">
                <Phone size={15} /> CALL US NOW →
              </a>
              <Link href="/contact-us/" className="btn-gold-outline text-sm">
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right: images */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-main.jpeg"
                alt="Bail bonds office — Houston, TX"
                width={960}
                height={640}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-[#1a1a1a] border border-[#C9A84C]/20 p-4 flex items-center justify-center">
              <Image
                src="/images/about-bbb.png"
                alt="Better Business Bureau member"
                width={399}
                height={407}
                className="max-h-48 w-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <div className="bg-[#0a0a0a] border-t border-[#C9A84C]/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] font-black text-xs uppercase tracking-widest mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
              Why Choose Us?
            </h2>
            <div className="mx-auto mt-3 w-16 h-[3px] bg-[#C9A84C] rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-[#C9A84C] font-black text-base mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ BOTTOM CTA ════════════ */}
      <div className="relative bg-[#0d0d0d] border-t border-[#C9A84C]/15 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/4 via-transparent to-[#C9A84C]/4 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-3 leading-tight">
            DON&apos;T WAIT — GET OUT OF JAIL TODAY
          </h2>
          <p className="text-gray-400 mb-8">
            Call Godfather&apos;s Bail Bonds now for immediate assistance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7132243600" className="btn-gold text-base">
              <Phone size={18} /> CALL 713-224-3600
            </a>
            <Link href="/contact-us/" className="btn-gold-outline text-base">
              GET HELP ONLINE
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
