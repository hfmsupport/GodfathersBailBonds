import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getPage } from '@/lib/wordpress'
import { cleanContent } from '@/lib/content'
import { Phone } from 'lucide-react'

export default async function AboutUs() {
  const page = await getPage('about-us')
  return (
    <main className="bg-white w-full">
      <Header />
      <section className="w-full bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C9A961]">
            {page?.title?.rendered || 'About Godfather\'s Bail Bonds'}
          </h1>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {page?.content?.rendered ? (
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-yellow-600"
            dangerouslySetInnerHTML={{ __html: cleanContent(page.content.rendered) }}
          />
        ) : (
          <div className="prose prose-lg max-w-none">
            <p>Godfather&apos;s Bail Bonds has been serving Houston and Harris County for over 30 years. We are a licensed and bonded bail bond agency committed to helping families in their time of need.</p>
            <p>License #74603 | 1112 Wood St, Houston, TX 77002 | Open 24/7/365</p>
          </div>
        )}
      </section>
      <section className="w-full bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-xl font-bold mb-6">Need Help Now?</p>
          <a href="tel:7132243600" className="inline-flex items-center gap-3 bg-[#C9A961] hover:bg-yellow-600 text-white px-8 py-4 rounded font-bold text-lg transition">
            <Phone size={24} />Call 713-224-3600
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
