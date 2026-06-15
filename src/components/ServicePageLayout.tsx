import Link from 'next/link'
import { Phone, Award, Shield, Clock, MapPin, ChevronRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cleanContent, extractFirstParagraph, splitFaqContent } from '@/lib/content'
import { FaqAccordion } from '@/components/FaqAccordion'

/* ── static data ───────────────────────────────────────────── */

const SERVICE_LINKS = [
  { label: 'Harris County Bail Bonds', href: '/harris-county-bail-bonds/' },
  { label: 'Houston Bail Bonds',       href: '/houston-bail-bonds/'        },
  { label: 'Bail Bonds Process',       href: '/the-bail-bonds-process/'    },
  { label: 'Types of Bail Bonds',      href: '/types-of-bonds/'            },
  { label: 'What is Bail?',            href: '/what-is-bail/'              },
]

const TRUST_ITEMS = [
  { Icon: Shield, label: 'Licensed & Bonded', sub: 'License #74603'  },
  { Icon: Award,  label: '30+ Years',         sub: 'Trusted service' },
  { Icon: Clock,  label: 'Available 24/7',    sub: 'Day or night'    },
  { Icon: MapPin, label: 'Harris County',     sub: 'Houston area'    },
]

const QUICK_FACTS = [
  '30+ Years Experience',
  'Licensed & Bonded (#74603)',
  'Available 24/7/365',
  'Payment Plans Available',
  'Serving Harris & Montgomery County',
]

type Particle = { top: string; left?: string; right?: string; s: number; d: string; dur: string }

const PARTICLES: Particle[] = [
  { top: '12%', left: '4%',   s: 4, d: '0s',    dur: '4s'   },
  { top: '38%', left: '10%',  s: 3, d: '0.9s',  dur: '5s'   },
  { top: '60%', left: '2%',   s: 5, d: '1.5s',  dur: '3.5s' },
  { top: '22%', right: '7%',  s: 3, d: '0.3s',  dur: '4.5s' },
  { top: '72%', right: '4%',  s: 4, d: '1.2s',  dur: '3.8s' },
  { top: '48%', left: '16%',  s: 2, d: '0.6s',  dur: '5.2s' },
  { top: '82%', left: '7%',   s: 3, d: '1.8s',  dur: '4.2s' },
  { top: '28%', right: '14%', s: 5, d: '0.9s',  dur: '3.6s' },
]

/* ── props ─────────────────────────────────────────────────── */

interface WPPage {
  title?:   { rendered: string }
  content?: { rendered: string }
}

interface Props {
  page:       WPPage | null
  slug:       string
  breadcrumb: string
}

/* ── component ─────────────────────────────────────────────── */

export function ServicePageLayout({ page, slug, breadcrumb }: Props) {
  const title      = page?.title?.rendered   || breadcrumb
  const rawContent = page?.content?.rendered || ''
  const subtext    = extractFirstParagraph(rawContent)
  const cleaned    = cleanContent(rawContent)
  const { mainContent, faqItems } = splitFaqContent(cleaned)

  return (
    <div className="bg-[#0d0d0d] text-white w-full min-h-screen">
      <Header />

      {/* ════════════════════════════════════ HERO ═══ */}
      <section className="relative w-full min-h-[420px] flex items-center overflow-hidden">
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0d0d0d] to-[#141414]" />
        {/* Gold left-border accent */}
        <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />

        {/* Gold particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#C9A84C] pointer-events-none"
            style={{
              width:  p.s,
              height: p.s,
              top:    p.top,
              left:   p.left,
              right:  p.right,
              opacity: 0.55,
              animation: `floatParticle ${p.dur} ${p.d} ease-in-out infinite alternate`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
              <Link href="/" className="text-[#C9A84C] hover:underline">Home</Link>
              <ChevronRight size={12} />
              <span className="text-gray-400">{breadcrumb}</span>
            </nav>

            <h1
              className="anim-fade-left text-4xl md:text-5xl font-black uppercase leading-tight mb-4 text-white"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="w-16 h-[3px] bg-[#C9A84C] mb-6 rounded-full" />

            {subtext && (
              <p className="anim-fade-left-d1 text-gray-300 text-[15px] leading-relaxed mb-8 max-w-lg">
                {subtext}
              </p>
            )}

            <div className="anim-fade-up-d3 flex flex-wrap gap-3">
              <a href="tel:7132243600" className="btn-gold text-sm">
                <Phone size={15} /> CALL US NOW →
              </a>
              <Link href="/contact-us/" className="btn-gold-outline text-sm">
                GET HELP ONLINE
              </Link>
            </div>
          </div>

          {/* Right: emergency box */}
          <div className="hidden lg:block anim-fade-right-d1">
            <div className="bg-[#1a1a1a] border border-[#C9A84C]/35 rounded-xl p-8 shadow-2xl">
              <p className="text-[#C9A84C] font-black tracking-widest text-xs mb-1 uppercase">
                Need Help Now?
              </p>
              <p className="text-gray-400 text-xs mb-5">Available 24/7 — day or night</p>
              <a href="tel:7132243600">
                <p className="text-[#C9A84C] text-[2.6rem] font-black leading-none mb-6 hover:text-[#D4AF5F] transition-colors tracking-tight">
                  713-224-3600
                </p>
              </a>
              <a href="tel:7132243600" className="btn-gold w-full justify-center">
                <Phone size={16} /> CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TRUST BAR ═══ */}
      <div className="bg-[#111111] border-y border-[#C9A84C]/12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_ITEMS.map(({ Icon, label, sub }, i) => (
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

      {/* ═══════════════════════════ MAIN CONTENT ══════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-10">

          {/* Left: WP content */}
          <div>
            {mainContent ? (
              <div className="godfather-content" dangerouslySetInnerHTML={{ __html: mainContent }} />
            ) : (
              <div className="godfather-content">
                <p>We provide professional bail bond services in Houston and Harris County. Call us at 713-224-3600 for immediate assistance.</p>
              </div>
            )}
            {faqItems.length > 0 && <FaqAccordion items={faqItems} />}
          </div>

          {/* Right: sticky sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 self-start">

            {/* Card 1 – Emergency call (gold gradient) */}
            <div
              className="rounded-xl p-6"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #A88A3C 100%)' }}
            >
              <p className="text-black font-black text-xl mb-1 leading-tight">NEED BAIL HELP?</p>
              <p className="text-black/70 text-xs mb-4">We answer 24/7 — day or night</p>
              <a href="tel:7132243600">
                <p className="text-black text-3xl font-black leading-none mb-5 hover:opacity-75 transition-opacity">
                  713-224-3600
                </p>
              </a>
              <a
                href="tel:7132243600"
                className="block w-full text-center bg-[#111111] text-[#C9A84C] font-black py-3 rounded-lg text-sm hover:bg-black transition-colors"
              >
                CALL NOW
              </a>
            </div>

            {/* Card 2 – Our services */}
            <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-xl p-6">
              <h3 className="text-[#C9A84C] font-black text-xs tracking-widest uppercase mb-4">
                Our Services
              </h3>
              <nav className="space-y-1">
                {SERVICE_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 py-1.5 text-sm transition-colors ${
                      href.includes(slug)
                        ? 'text-[#C9A84C] font-bold'
                        : 'text-gray-400 hover:text-[#C9A84C]'
                    }`}
                  >
                    <ChevronRight size={13} className="text-[#C9A84C]/50 shrink-0" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Card 3 – Quick facts */}
            <div className="bg-[#161616] border border-white/5 rounded-xl p-6">
              <h3 className="text-[#C9A84C] font-black text-xs tracking-widest uppercase mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-2">
                {QUICK_FACTS.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#C9A84C] font-bold shrink-0 mt-0.5">✓</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* ═══════════════════════════ BOTTOM CTA ════════ */}
      <div className="relative bg-[#0a0a0a] border-t border-[#C9A84C]/15 overflow-hidden">
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
