import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostBySlug } from '@/lib/sanity'
import { BlogPostLayout } from '@/components/BlogPostLayout'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  // Decode HTML entities that may remain in title from WordPress migration
  const title = (post.metaTitle || post.title)
    .replace(/&#\d+;/g, (m) => {
      const code = parseInt(m.slice(2, -1), 10)
      return String.fromCharCode(code)
    })
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')

  const description = (post.metaDescription || post.excerpt || '').replace(/\s+/g, ' ').trim()
  const canonical = `/${slug}/`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: "Godfather's Bail Bonds",
      ...(post.featuredImageUrl
        ? { images: [{ url: post.featuredImageUrl, width: 1200, alt: title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(post.featuredImageUrl ? { images: [post.featuredImageUrl] } : {}),
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostLayout post={post} />
}
