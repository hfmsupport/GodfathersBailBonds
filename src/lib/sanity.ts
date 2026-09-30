import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uv7zig89',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  perspective: 'published',
})

export interface SanityPost {
  id: string
  slug: string
  date: string
  title: string
  excerpt: string
  bodyHtml?: string
  featuredImageUrl?: string | null
  metaTitle?: string
  metaDescription?: string
  categories?: string[]
}

export type SanityPostListItem = Pick<
  SanityPost,
  'id' | 'slug' | 'date' | 'title' | 'excerpt' | 'featuredImageUrl'
>

export type SanityPostSidebarItem = Pick<SanityPost, 'id' | 'slug' | 'date' | 'title'>

const POST_LIST_FIELDS = `
  "id": _id,
  "slug": slug.current,
  "date": publishedAt,
  title,
  excerpt,
  "featuredImageUrl": mainImage.asset->url
`

const POST_FULL_FIELDS = `
  "id": _id,
  "slug": slug.current,
  "date": publishedAt,
  title,
  excerpt,
  bodyHtml,
  "featuredImageUrl": mainImage.asset->url,
  metaTitle,
  metaDescription,
  categories
`

const POST_SIDEBAR_FIELDS = `
  "id": _id,
  "slug": slug.current,
  "date": publishedAt,
  title
`

export async function getAllPosts(): Promise<SanityPostListItem[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${POST_LIST_FIELDS} }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_FULL_FIELDS} }`,
    { slug },
    { next: { revalidate: 3600 } }
  )
  return post ?? null
}

export async function getRecentPosts(count: number): Promise<SanityPostSidebarItem[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$count] { ${POST_SIDEBAR_FIELDS} }`,
    { count: count - 1 },
    { next: { revalidate: 3600 } }
  )
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{ "slug": slug.current, publishedAt }`,
    {},
    { next: { revalidate: 3600 } }
  )
  return posts.map((p: { slug: string }) => p.slug)
}

export interface SanityPostForSitemap {
  slug: string
  date: string
}

export async function getAllPostsForSitemap(): Promise<SanityPostForSitemap[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) { "slug": slug.current, "date": publishedAt }`,
    {},
    { cache: 'no-store' }
  )
}
