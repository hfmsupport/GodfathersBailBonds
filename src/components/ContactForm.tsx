'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [fields, setFields] = useState({
    name: '', email: '', phone: '', address: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { name, email, phone, address, message } = fields
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Address: ${address}`,
      '',
      `Message:`,
      message,
    ].join('\n')
    const subject = `Website Contact Form – ${name}`
    window.location.href = `mailto:Godfatherbailbond1112@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#1a1a1a] border border-[#C9A84C]/30 rounded-xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-[#C9A84C]" />
        </div>
        <h3 className="text-white font-black text-xl mb-2">Message Ready to Send</h3>
        <p className="text-gray-400 text-sm">Your email client should open with the message pre-filled. If it didn&apos;t, call us directly at <a href="tel:7132243600" className="text-[#C9A84C]">713-224-3600</a>.</p>
      </div>
    )
  }

  const inputClass = 'w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C9A84C] transition'
  const labelClass = 'block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-white/5 rounded-xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text" name="name" required placeholder="Your full name"
            value={fields.name} onChange={update} className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email" name="email" required placeholder="your@email.com"
            value={fields.email} onChange={update} className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel" name="phone" placeholder="(713) 555-0000"
            value={fields.phone} onChange={update} className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Address</label>
          <input
            type="text" name="address" placeholder="City, TX"
            value={fields.address} onChange={update} className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Additional Message</label>
        <textarea
          name="message" rows={5} placeholder="Tell us how we can help you…"
          value={fields.message} onChange={update}
          className={inputClass + ' resize-none'}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#C9A84C] hover:bg-[#D4AF5F] text-black font-black text-sm uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <Send size={16} />
        Send Message
      </button>
      <p className="text-gray-600 text-xs text-center">
        Or call us directly: <a href="tel:7132243600" className="text-[#C9A84C]">713-224-3600</a> — available 24/7
      </p>
    </form>
  )
}
