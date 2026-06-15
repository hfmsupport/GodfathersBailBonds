export function cleanContent(html: string): string {
  if (!html) return ''
  let content = html
  content = content.replace(/https?:\/\/godfathersbailbonds\.us\//g, '/')
  content = content.replace(/<div[^>]*class="[^"]*elementor[^"]*"[^>]*>/gi, '<div>')
  content = content.replace(/<section[^>]*class="[^"]*elementor[^"]*"[^>]*>/gi, '<section>')
  content = content.replace(/\[contact-form[^\]]*\][\s\S]*?\[\/contact-form\]/g, '')
  content = content.replace(/\[[^\]]+\]/g, '')
  return content
}
