import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/wordpress'
import { BlogPostLayout } from '@/components/BlogPostLayout'

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  const title = post.title.rendered.replace(/<[^>]+>/g, '')
  const description = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim()
  const url = `https://godfathersbailbonds.vercel.app/${slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: "Godfather's Bail Bonds",
    },
    twitter: {
      card: 'summary',
      title,
      description,
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
