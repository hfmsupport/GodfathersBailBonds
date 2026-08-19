import { getAllPosts } from '@/lib/wordpress'

const BASE_URL = 'https://godfathersbailbonds.vercel.app'

const STATIC_PAGES = [
  '',
  '/blog',
  '/contact-us',
  '/about-us',
  '/faq',
  '/harris-county-bail-bonds',
  '/houston-bail-bonds',
  '/the-bail-bonds-process',
  '/types-of-bonds',
  '/what-is-bail',
]

export default async function sitemap() {
  let postUrls: { url: string; lastModified: string }[] = []

  try {
    const posts = await getAllPosts()
    postUrls = posts.map((p) => ({
      url: `${BASE_URL}/${p.slug}/`,
      lastModified: p.date || new Date().toISOString(),
    }))
  } catch {
    // If WP API is unavailable, just return static pages
  }

  const staticUrls = STATIC_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date().toISOString(),
  }))

  return [...staticUrls, ...postUrls]
}
