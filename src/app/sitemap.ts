import { getAllPostsForSitemap } from '@/lib/sanity'
import { SITE_URL } from '@/lib/site'

const STATIC_PAGES = [
  '/',
  '/blog/',
  '/contact-us/',
  '/about-us/',
  '/faq/',
  '/harris-county-bail-bonds/',
  '/houston-bail-bonds/',
  '/the-bail-bonds-process/',
  '/types-of-bonds/',
  '/what-is-bail/',
]

export default async function sitemap() {
  let postUrls: { url: string; lastModified: string }[] = []

  try {
    const posts = await getAllPostsForSitemap()
    postUrls = posts.map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      lastModified: p.date || new Date().toISOString(),
    }))
  } catch {
    // If Sanity is unavailable, return static pages only
  }

  const staticUrls = STATIC_PAGES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date().toISOString(),
  }))

  return [...staticUrls, ...postUrls]
}
