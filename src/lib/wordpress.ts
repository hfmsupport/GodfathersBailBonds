const BASE_URL = 'https://godfathersbailbonds.us/wp-json/wp/v2'

// Minimal shape returned by the WP REST API for posts/pages
export interface WPPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
}

export async function getPage(slug: string) {
  const res = await fetch(`${BASE_URL}/pages?slug=${slug}&status=publish`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  const pages = await res.json()
  return pages[0] ?? null
}

export async function getAllPosts(): Promise<WPPost[]> {
  // Fetch page 1 first to read the X-WP-TotalPages header
  const res1 = await fetch(
    `${BASE_URL}/posts?per_page=100&status=publish&page=1`,
    { next: { revalidate: 3600 } }
  )
  if (!res1.ok) return []

  const totalPages = parseInt(res1.headers.get('X-WP-TotalPages') ?? '1', 10)
  const posts1: WPPost[] = await res1.json()

  if (totalPages <= 1) return posts1

  // Fetch remaining pages in parallel
  const rest: WPPost[][] = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((page) =>
      fetch(`${BASE_URL}/posts?per_page=100&status=publish&page=${page}`, {
        next: { revalidate: 3600 },
      }).then((r): Promise<WPPost[]> => (r.ok ? r.json() : Promise.resolve([])))
    )
  )

  return [...posts1, ...rest.flat()]
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}&status=publish`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  const posts = await res.json()
  return posts[0] ?? null
}

export async function getMediaUrl(id: number): Promise<string | null> {
  const res = await fetch(`${BASE_URL}/media/${id}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  const media = await res.json()
  return media.source_url ?? null
}

export async function getRecentPosts(count: number) {
  const res = await fetch(
    `${BASE_URL}/posts?per_page=${count}&status=publish&orderby=date&order=desc`,
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return []
  return res.json()
}
