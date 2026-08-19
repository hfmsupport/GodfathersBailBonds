export function cleanContent(html: string): string {
  if (!html) return ''
  let c = html

  // Absolute URLs → relative
  c = c.replace(/https?:\/\/godfathersbailbonds\.us\//g, '/')

  // Remove scripts, styles, noscript
  c = c.replace(/<script[\s\S]*?<\/script>/gi, '')
  c = c.replace(/<style[\s\S]*?<\/style>/gi, '')
  c = c.replace(/<noscript[\s\S]*?<\/noscript>/gi, '')

  // Remove SVG elements
  c = c.replace(/<svg[\s\S]*?<\/svg>/gi, '')

  // Remove RevSlider / rs- tags
  c = c.replace(/<rs-module-wrap[\s\S]*?<\/rs-module-wrap>/gi, '')
  c = c.replace(/<rs-[\s\S]*?<\/rs-[a-z-]+>/gi, '')

  // ── TheGem TTA accordion panels → h3[data-tta] + content ─────
  // gem-tta-panel-heading has no child divs, so the first </div> closes it safely
  c = c.replace(
    /<div[^>]*class="[^"]*gem-tta-panel-heading[^"]*"[^>]*>[\s\S]*?<span[^>]*class="[^"]*gem-tta-title-text[^"]*"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/div>/gi,
    (_: string, title: string) => `<h3 data-tta="1">${title.trim()}</h3>`
  )
  // Strip body/panel/container wrappers — keep inner content
  c = c.replace(/<div[^>]*class="[^"]*gem-tta-panel-body[^"]*"[^>]*>/gi, '<div>')
  c = c.replace(/<div[^>]*class="[^"]*gem-text-output[^"]*"[^>]*>/gi, '<div>')
  c = c.replace(/<div[^>]*class="[^"]*gem-tta-[^"]*"[^>]*>/gi, '<div>')
  // ─────────────────────────────────────────────────────────────

  // ── Elementor accordion → readable headings ──────────────────
  // Convert tab-title divs to <h3> (extract the question text from the anchor)
  c = c.replace(
    /<div[^>]*class="[^"]*elementor-tab-title[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,
    (_: string, inner: string) => {
      // Prefer the explicit accordion-title anchor text
      const aMatch = inner.match(/<a[^>]*class="[^"]*elementor-accordion-title[^"]*"[^>]*>([\s\S]*?)<\/a>/i)
      const text = aMatch
        ? aMatch[1].replace(/<[^>]+>/g, '').trim()
        : inner.replace(/<[^>]+>/g, '').trim()
      return text ? `<h3>${text}</h3>` : ''
    }
  )
  // Strip the elementor-tab-content wrapper attrs, keep the content
  c = c.replace(/<div[^>]*class="[^"]*elementor-tab-content[^"]*"[^>]*>/gi, '<div>')
  // ─────────────────────────────────────────────────────────────

  // Remove details/summary accordion (shows as +/- symbols)
  c = c.replace(/<details[\s\S]*?<\/details>/gi, '')

  // Remove accordion icon and toggle-icon spans only (not content-bearing containers)
  c = c.replace(
    /<span[^>]*class="[^"]*(?:elementor-accordion-icon|elementor-toggle-icon)[^"]*"[^>]*>[\s\S]*?<\/span>/gi,
    ''
  )

  // Strip Elementor wrapper divs/sections (keep inner content)
  c = c.replace(/<div([^>]*)class="([^"]*elementor[^"]*)"([^>]*)>/gi, '<div>')
  c = c.replace(/<section([^>]*)class="([^"]*elementor[^"]*)"([^>]*)>/gi, '<section>')

  // Remove WP contact form shortcodes
  c = c.replace(/\[contact-form[^\]]*\][\s\S]*?\[\/contact-form\]/g, '')
  c = c.replace(/\[[^\]]+\]/g, '')

  // Clean up empty tags left behind
  c = c.replace(/<div[^>]*>\s*<\/div>/gi, '')
  c = c.replace(/<p[^>]*>(\s|&nbsp;)*<\/p>/gi, '')
  c = c.replace(/<span[^>]*>\s*<\/span>/gi, '')

  // Strip inline background/color styles — WP light-theme values are invisible on dark bg.
  // Lookbehind (?<![a-zA-Z-]) prevents matching "border-color", "background-color" sub-strings.
  c = c.replace(/\bstyle="([^"]*)"/gi, (_, styles: string) => {
    const fixed = styles
      .replace(/\bbackground(?:-color)?\s*:[^;]+;?\s*/gi, '')
      .replace(/(?<![a-zA-Z-])color\s*:[^;]+;?\s*/gi, '')
      .trim().replace(/;+$/, '')
    return fixed ? `style="${fixed}"` : ''
  })

  // Wrong phone number present in some blog posts
  c = c.replace(/\(513\)\s*921-?2273/g, '713-224-3600')

  // Remove Federal and Immigration bond references
  c = c.replace(/\b(federal|immigration)\s+bonds?\b/gi, '')
  c = c.replace(/,\s*immigration\s+and\s+federal\s+bonds/gi, '')
  c = c.replace(/,?\s*(federal|immigration)\s+bonds?/gi, '')

  // Replace bond process text
  c = c.replace(/Pay a 10% non-refundable fee/gi, 'Co-sign documents and set up payment')
  c = c.replace(/Usually within 1 to 3 hours after paperwork is complete/gi, 'Usually 6 to 12 hours after bonds are posted')

  // Rename immigration bonds FAQ question
  c = c.replace(/Are immigration bonds refundable\?/gi, 'Are bail bonds refundable?')

  return c
}

export function extractFirstParagraph(html: string): string {
  const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i)
  if (!m) return ''
  return m[1].replace(/<[^>]+>/g, '').trim().slice(0, 240)
}

export function splitFaqContent(html: string): {
  mainContent: string
  faqItems: Array<{ question: string; answer: string }>
} {
  // Split at the first h3 that is either a question (contains "?") or a
  // TheGem TTA accordion item (data-tta="1"). h2 section headings never match.
  const questionPattern = /<h3[^>]*>[^<]*\?/i
  const ttaPattern = /<h3[^>]*data-tta="1"/i

  const qMatch = questionPattern.exec(html)
  const tMatch = ttaPattern.exec(html)

  let splitIndex: number | undefined
  if (qMatch != null && tMatch != null) {
    splitIndex = Math.min(qMatch.index, tMatch.index)
  } else if (qMatch != null) {
    splitIndex = qMatch.index
  } else if (tMatch != null) {
    splitIndex = tMatch.index
  }

  if (splitIndex === undefined) {
    return { mainContent: html, faqItems: [] }
  }

  const mainContent = html.slice(0, splitIndex)
  const faqHtml = html.slice(splitIndex)
  const faqItems = parseFaqFromHtml(faqHtml)

  return { mainContent, faqItems }
}

function parseFaqFromHtml(html: string): Array<{ question: string; answer: string }> {
  const items: Array<{ question: string; answer: string }> = []
  // Split at h3 with data-tta="1" (TheGem TTA) OR h3 whose text contains "?" (FAQ)
  const parts = html.split(/(?=<h3[^>]*data-tta="1"|<h3[^>]*>[^<]*\?)/i)

  for (const part of parts) {
    const hMatch = part.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)
    if (!hMatch) continue
    const question = hMatch[1].replace(/<[^>]+>/g, '').trim()
    if (!question) continue
    const isTta = /<h3[^>]*data-tta="1"/.test(part)
    if (!question.includes('?') && !isTta) continue
    let answer = part.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, '').trim()
    if (/Are bail bonds refundable\?/i.test(question)) {
      answer = '<p>Only if the person meets all court obligations. If not, the bond is forfeited.</p>'
    }
    if (answer && question) items.push({ question, answer })
  }
  return items
}
