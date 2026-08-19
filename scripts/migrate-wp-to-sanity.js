#!/usr/bin/env node
/**
 * WordPress → Sanity Migration Script
 * Godfather's Bail Bonds
 *
 * Usage:
 *   SANITY_API_TOKEN=<write-token> node scripts/migrate-wp-to-sanity.js
 *
 * Requirements:
 *   npm install @sanity/client node-fetch
 */

const { createClient } = require('@sanity/client')

const WP_BASE = 'https://godfathersbailbonds.us/wp-json/wp/v2'
const SANITY_PROJECT_ID = 'uv7zig89'
const SANITY_DATASET = 'production'
const SANITY_API_VERSION = '2024-01-01'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('ERROR: SANITY_API_TOKEN env var is required (needs write access)')
  process.exit(1)
}

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  token,
  useCdn: false,
})

async function fetchAllPosts() {
  const res1 = await fetch(`${WP_BASE}/posts?per_page=100&status=publish&page=1`)
  if (!res1.ok) throw new Error(`WP API error: ${res1.status}`)
  const totalPages = parseInt(res1.headers.get('X-WP-TotalPages') ?? '1', 10)
  const posts1 = await res1.json()
  console.log(`Total pages: ${totalPages}, first batch: ${posts1.length}`)

  if (totalPages <= 1) return posts1

  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map((page) =>
      fetch(`${WP_BASE}/posts?per_page=100&status=publish&page=${page}`)
        .then((r) => r.ok ? r.json() : [])
    )
  )
  return [...posts1, ...rest.flat()]
}

async function getMediaUrl(id) {
  if (!id) return null
  try {
    const res = await fetch(`${WP_BASE}/media/${id}`)
    if (!res.ok) return null
    const media = await res.json()
    return media.source_url ?? null
  } catch {
    return null
  }
}

async function uploadImageToSanity(imageUrl, title) {
  if (!imageUrl) return null
  try {
    const res = await fetch(imageUrl)
    if (!res.ok) return null
    const buffer = Buffer.from(await res.arrayBuffer())
    const ext = imageUrl.split('.').pop().split('?')[0].toLowerCase()
    const mimeMap = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif' }
    const contentType = mimeMap[ext] || 'image/jpeg'
    const asset = await client.assets.upload('image', buffer, {
      filename: `${title.slice(0, 50).replace(/[^a-z0-9]/gi, '-')}.${ext}`,
      contentType,
    })
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  } catch (err) {
    console.warn(`  Image upload failed: ${err.message}`)
    return null
  }
}

async function stripHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

async function migrate() {
  console.log('Fetching WordPress posts...')
  const posts = await fetchAllPosts()
  console.log(`Found ${posts.length} posts to migrate`)

  let successCount = 0
  let imageCount = 0
  let failCount = 0

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const title = post.title.rendered.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/&nbsp;/g, ' ')
    console.log(`[${i + 1}/${posts.length}] ${title}`)

    try {
      // Check if already migrated
      const existing = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]._id`,
        { slug: post.slug }
      )
      if (existing) {
        console.log(`  → Already exists, skipping`)
        successCount++
        continue
      }

      // Get featured image
      let mainImage = null
      if (post.featured_media) {
        const imgUrl = await getMediaUrl(post.featured_media)
        if (imgUrl) {
          mainImage = await uploadImageToSanity(imgUrl, post.slug)
          if (mainImage) imageCount++
        }
      }

      // Build excerpt plain text
      const excerptHtml = post.excerpt?.rendered || ''
      const excerptText = await stripHtml(excerptHtml)

      // Build Sanity document
      const doc = {
        _type: 'post',
        _id: `wp-post-${post.id}`,
        title,
        slug: { _type: 'slug', current: post.slug },
        publishedAt: post.date,
        excerpt: excerptText.slice(0, 500),
        bodyHtml: post.content.rendered,
        ...(mainImage && { mainImage }),
        metaTitle: title,
        metaDescription: excerptText.slice(0, 160),
      }

      await client.createOrReplace(doc)
      successCount++
      console.log(`  ✓ Migrated`)

      // Rate limit: small delay every 10 posts
      if ((i + 1) % 10 === 0) {
        await new Promise(r => setTimeout(r, 500))
      }
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`)
      failCount++
    }
  }

  console.log('\n=== Migration Complete ===')
  console.log(`✓ Migrated: ${successCount}`)
  console.log(`📸 Images: ${imageCount}`)
  console.log(`✗ Failed: ${failCount}`)
}

migrate().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
