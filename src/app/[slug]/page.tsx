import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/wordpress'
import { BlogPostLayout } from '@/components/BlogPostLayout'

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
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
