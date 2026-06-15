import Link from 'next/link'
import { Phone, ChevronRight, Calendar } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cleanContent } from '@/lib/content'
import { getRecentPosts } from '@/lib/wordpress'

const SERVICE_LINKS = [
  { label: 'Harris County Bail Bonds', href: '/harris-county-bail-bonds/' },
  { label: 'Houston Bail Bonds',       href: '/houston-bail-bonds/'        },
  { label: 'Bail Bonds Process',       href: '/the-bail-bonds-process/'    },
  { label: 'Types of Bail Bonds',      href: '/types-of-bonds/'            },
  { label: 'What is Bail?',            href: '/what-is-bail/'              },
]

interface WPPost {
  title:    { rendered: string }
  content:  { rendered: string }
  date:     string
  excerpt?: { rendered: string }
  slug?:    string
}

type RecentPost = {
  id: number
  slug: string
  title: { rendered: string }
  date: string
}

export async function BlogPostLayout({ post }: { post: WPPost }) {
  const recentPosts: RecentPost[] = await getRecentPosts(5)
  const cleaned = cleanContent(post.content.rendered)
  const dateStr = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="bg-[#0d0d0d] text-white w-full min-h-screen">
      <Header />

      {/* ════════════════ HERO ═══ */}
      <section className="relative w-full min-h-[320px] flex items-end overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#080808]" />
        <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-5">
            <Link href="/" className="text-[#C9A84C] hover:underline">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog/" className="text-[#C9A84C] hover:underline">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-gray-400 truncate max-w-[200px]">Article</span>
          </nav>

          <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
            <Calendar size={13} className="text-[#C9A84C]" />
            <span>{dateStr}</span>
          </div>

          <h1
            className="anim-fade-left text-3xl md:text-4xl font-black leading-tight text-white"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="w-14 h-[3px] bg-[#C9A84C] mt-5 rounded-full" />
        </div>
      </section>

      {/* ════════════════ MAIN ═══ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-10">

          {/* Content */}
          <article>
            <div className="godfather-content" dangerouslySetInnerHTML={{ __html: cleaned }} />
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 self-start">

            {/* Emergency card */}
            <div
              className="rounded-xl p-6"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #A88A3C 100%)' }}
            >
              <p className="text-black font-black text-lg mb-1">NEED BAIL HELP NOW?</p>
              <p className="text-black/70 text-xs mb-4">We answer 24/7 — day or night</p>
              <a href="tel:7132243600">
                <p className="text-black text-2xl font-black leading-none mb-4 hover:opacity-75 transition-opacity">
                  713-224-3600
                </p>
              </a>
              <a
                href="tel:7132243600"
                className="block w-full text-center bg-[#111111] text-[#C9A84C] font-black py-3 rounded-lg text-sm"
              >
                CALL NOW
              </a>
            </div>

            {/* Recent posts */}
            {recentPosts.length > 0 && (
              <div className="bg-[#1a1a1a] border border-[#C9A84C]/20 rounded-xl p-6">
                <h3 className="text-[#C9A84C] font-black text-xs tracking-widest uppercase mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-3">
                  {recentPosts.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/${rp.slug}/`}
                      className="block group"
                    >
                      <p className="text-gray-300 text-xs leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                        <span dangerouslySetInnerHTML={{ __html: rp.title.rendered }} />
                      </p>
                      <p className="text-gray-600 text-[11px] mt-0.5">
                        {new Date(rp.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            <div className="bg-[#161616] border border-white/5 rounded-xl p-6">
              <h3 className="text-[#C9A84C] font-black text-xs tracking-widest uppercase mb-4">
                Our Services
              </h3>
              <nav className="space-y-1">
                {SERVICE_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 py-1.5 text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                  >
                    <ChevronRight size={13} className="text-[#C9A84C]/50 shrink-0" />
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* ════════════════ BOTTOM CTA ═══ */}
      <div className="relative bg-[#0a0a0a] border-t border-[#C9A84C]/15 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/4 via-transparent to-[#C9A84C]/4 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-3">
            Need Bail Help Right Now?
          </h2>
          <p className="text-gray-400 mb-7 text-sm">
            Godfather&apos;s Bail Bonds is available 24/7 across Houston and Harris County.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7132243600" className="btn-gold">
              <Phone size={16} /> CALL 713-224-3600
            </a>
            <Link href="/contact-us/" className="btn-gold-outline">
              GET HELP ONLINE
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
