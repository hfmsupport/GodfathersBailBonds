import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Clock, Shield, ChevronRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/ContactForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Contact Godfather's Bail Bonds | 24/7 Houston TX | 713-224-3600",
  description:
    "Contact Godfather's Bail Bonds in Houston, TX. Available 24/7/365 for fast bail bond help across Harris and Montgomery County. Call 713-224-3600 or send a message.",
  alternates: { canonical: '/contact-us/' },
  openGraph: { url: '/contact-us/' },
}

export default function ContactUs() {
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
            <span className="text-gray-400">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight">
            Contact Us
          </h1>
          <div className="w-16 h-[3px] bg-[#C9A84C] mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 text-base max-w-xl">
            Available 24/7/365 — call anytime or send us a message below.
          </p>
        </div>
      </section>

      {/* ════════════ CONTACT INFO BAR ════════════ */}
      <div className="bg-[#111] border-y border-[#C9A84C]/12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { Icon: Phone,  label: '713-224-3600',     sub: 'Call us 24/7',          href: 'tel:7132243600' },
            { Icon: MapPin, label: '1112 Wood St',      sub: 'Houston, TX 77002',     href: null },
            { Icon: Clock,  label: 'Open 24/7/365',     sub: 'Always here for you',   href: null },
            { Icon: Shield, label: 'License #74603',    sub: 'Licensed & Bonded',     href: null },
          ].map(({ Icon, label, sub, href }, i) => (
            <div key={i} className="flex items-center gap-3">
              <Icon size={18} className="text-[#C9A84C] shrink-0" />
              <div>
                {href
                  ? <a href={href} className="text-white font-bold text-xs hover:text-[#C9A84C] transition">{label}</a>
                  : <p className="text-white font-bold text-xs">{label}</p>
                }
                <p className="text-gray-500 text-[11px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ MAIN CONTENT ════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left: company bio */}
          <div>
            <p className="text-[#C9A84C] font-black text-xs uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
              Houston&apos;s Trusted Bail Bond Experts
            </h2>
            <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
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

            {/* Quick trust badges */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                '30+ Years Experience',
                'BBB Member',
                'Licensed #74603',
                'PBUS Member',
                'Serving Harris County',
                'Available 24/7/365',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-[#C9A84C] font-bold shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <p className="text-[#C9A84C] font-black text-xs uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

        </div>
      </div>

      {/* ════════════ BOTTOM CTA ════════════ */}
      <div className="relative bg-[#0a0a0a] border-t border-[#C9A84C]/15 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/4 via-transparent to-[#C9A84C]/4 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-3 leading-tight">
            DON&apos;T WAIT — GET OUT OF JAIL TODAY
          </h2>
          <p className="text-gray-400 mb-8">Call Godfather&apos;s Bail Bonds now for immediate assistance</p>
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
