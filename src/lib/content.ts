export function cleanContent(html: string): string {
  if (!html) return ''
  let c = html

  // Absolute URLs → relative
  c = c.replace(/https?:\/\/godfathersbailbonds\.us\//g, '/')

  // Remove scripts and styles
  c = c.replace(/<script[\s\S]*?<\/script>/gi, '')
  c = c.replace(/<style[\s\S]*?<\/style>/gi, '')
  c = c.replace(/<noscript[\s\S]*?<\/noscript>/gi, '')

  // Remove SVG elements (render as broken black shapes)
  c = c.replace(/<svg[\s\S]*?<\/svg>/gi, '')

  // Remove RevSlider / rs- tags
  c = c.replace(/<rs-module-wrap[\s\S]*?<\/rs-module-wrap>/gi, '')
  c = c.replace(/<rs-[\s\S]*?<\/rs-[a-z-]+>/gi, '')

  // Remove details/summary accordion (shows as + - symbols)
  c = c.replace(/<details[\s\S]*?<\/details>/gi, '')

  // Remove Elementor icon / accordion / toggle widgets
  c = c.replace(
    /<[a-z][a-z0-9]*[^>]*class="[^"]*(?:elementor-icon|elementor-toggle|elementor-accordion|e-n-accordion|fa-plus|fa-minus)[^"]*"[^>]*>[\s\S]*?<\/[a-z][a-z0-9]*>/gi,
    ''
  )

  // Strip Elementor wrapper divs (keep inner content)
  c = c.replace(/<div([^>]*)class="([^"]*elementor[^"]*)"([^>]*)>/gi, '<div>')
  c = c.replace(/<section([^>]*)class="([^"]*elementor[^"]*)"([^>]*)>/gi, '<section>')

  // Remove WP contact form shortcodes
  c = c.replace(/\[contact-form[^\]]*\][\s\S]*?\[\/contact-form\]/g, '')
  c = c.replace(/\[[^\]]+\]/g, '')

  // Clean up empty tags left behind
  c = c.replace(/<div[^>]*>\s*<\/div>/gi, '')
  c = c.replace(/<p[^>]*>(\s|&nbsp;)*<\/p>/gi, '')
  c = c.replace(/<span[^>]*>\s*<\/span>/gi, '')

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
  // Find the index of the first FAQ-like heading
  const faqPattern = /<h[23][^>]*>[\s\S]{0,10}(?:\?|faq|frequently|how |what |can |do |why |is |are |will |if |does |should )/i
  const match = faqPattern.exec(html)

  if (!match || match.index == null) {
    return { mainContent: html, faqItems: [] }
  }

  const mainContent = html.slice(0, match.index)
  const faqHtml = html.slice(match.index)
  const faqItems = parseFaqFromHtml(faqHtml)

  return { mainContent, faqItems }
}

function parseFaqFromHtml(html: string): Array<{ question: string; answer: string }> {
  const items: Array<{ question: string; answer: string }> = []
  const parts = html.split(/(?=<h[23][^>]*>)/i)

  for (const part of parts) {
    const hMatch = part.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i)
    if (!hMatch) continue
    const question = hMatch[1].replace(/<[^>]+>/g, '').trim()
    if (
      !question.includes('?') &&
      !/^\d+[.)]\s/.test(question) &&
      !/^(HOW|WHAT|CAN|DO|WHY|IS|ARE|WILL|WHEN|WHERE|WHO|IF|DOES|SHOULD)/i.test(question)
    ) continue
    const answer = part.replace(/<h[23][^>]*>[\s\S]*?<\/h[23]>/i, '').trim()
    if (answer && question) items.push({ question, answer })
  }
  return items
}
