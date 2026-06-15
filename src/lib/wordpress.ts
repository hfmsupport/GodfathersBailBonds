const BASE_URL = 'https://godfathersbailbonds.us/wp-json/wp/v2'

export async function getPage(slug: string) {
  const res = await fetch(`${BASE_URL}/pages?slug=${slug}&status=publish`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null
  const pages = await res.json()
  return pages[0] ?? null
}

export async function getAllPosts() {
  const [res1, res2] = await Promise.all([
    fetch(`${BASE_URL}/posts?per_page=100&status=publish&page=1`, { next: { revalidate: 3600 } }),
    fetch(`${BASE_URL}/posts?per_page=100&status=publish&page=2`, { next: { revalidate: 3600 } }),
  ])
  const posts1 = res1.ok ? await res1.json() : []
  const posts2 = res2.ok ? await res2.json() : []
  return [...posts1, ...posts2]
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
