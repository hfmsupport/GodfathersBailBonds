import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getAllPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Bail Bond Tips & News Blog',
  description:
    'Houston bail bond guides, tips, and news from Godfather\'s Bail Bonds. Learn about the bail process, your rights, and what to expect in Harris County.',
  alternates: { canonical: '/blog/' },
  openGraph: { url: '/blog/' },
}

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <main className="bg-white w-full">
      <Header />

      <section className="w-full bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C9A961]">Blog</h1>
          <p className="text-gray-300 mt-4">Bail bond tips, guides, and news for Houston and Harris County</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-gray-600 text-center">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
              >
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="font-bold text-gray-900 text-lg mb-3 leading-tight">
                    <Link href={`/${post.slug}/`} className="hover:text-yellow-600">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                  )}
                  <Link
                    href={`/${post.slug}/`}
                    className="inline-block mt-4 text-yellow-600 font-semibold text-sm hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
