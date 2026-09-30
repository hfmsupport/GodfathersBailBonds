import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const RECIPIENTS = [
  'Godfatherbailbond1112@gmail.com',
  'support@shiveragents.com',
]

const FROM = "Godfather's Bail Bonds <support@godfathersbailbonds.us>"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, phone, address, message } = body as Record<string, string>

  // Server-side validation (runs before any I/O)
  if (!name || name.trim().length < 2) {
    return Response.json({ error: 'Name is required (min 2 characters).' }, { status: 422 })
  }
  if (!email || !isValidEmail(email.trim())) {
    return Response.json({ error: 'A valid email address is required.' }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const safeName = name.trim().slice(0, 200)
  const safeEmail = email.trim().slice(0, 254)
  const safePhone = (phone ?? '').trim().slice(0, 50)
  const safeAddress = (address ?? '').trim().slice(0, 200)
  const safeMessage = (message ?? '').trim().slice(0, 5000)

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;">
  <div style="border-top:4px solid #C9A84C;padding-top:20px;margin-bottom:24px;">
    <h1 style="font-size:22px;margin:0 0 4px;">New Contact Form Submission</h1>
    <p style="color:#777;font-size:13px;margin:0;">Godfather&rsquo;s Bail Bonds &mdash; godfathersbailbonds.us</p>
  </div>

  <table style="width:100%;border-collapse:collapse;">
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;width:120px;vertical-align:top;">Name</td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;">${safeName}</td>
    </tr>
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Email</td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
    </tr>
    ${safePhone ? `<tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Phone</td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;"><a href="tel:${safePhone}">${safePhone}</a></td>
    </tr>` : ''}
    ${safeAddress ? `<tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Address</td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;">${safeAddress}</td>
    </tr>` : ''}
    ${safeMessage ? `<tr>
      <td style="padding:10px 0;font-weight:bold;vertical-align:top;">Message</td>
      <td style="padding:10px 0;white-space:pre-wrap;">${safeMessage}</td>
    </tr>` : ''}
  </table>

  <div style="margin-top:32px;padding:16px;background:#f9f9f9;border-radius:4px;font-size:13px;color:#777;">
    Reply directly to this email to respond to ${safeName}.
  </div>
</body>
</html>`

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: FROM,
    to: RECIPIENTS,
    replyTo: safeEmail,
    subject: `Website Inquiry – ${safeName}`,
    html,
  })

  if (error) {
    return Response.json({ error: 'Failed to send message. Please call us at 713-224-3600.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
