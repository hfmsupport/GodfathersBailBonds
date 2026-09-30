'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [fields, setFields] = useState({
    name: '', email: '', phone: '', address: '', message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#1a1a1a] border border-[#C9A84C]/30 rounded-xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-[#C9A84C]" />
        </div>
        <h3 className="text-white font-black text-xl mb-2">Message Sent!</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Thank you, <span className="text-white">{fields.name}</span>. We&apos;ve received your message and will be in touch shortly.
          For immediate assistance call us at{' '}
          <a href="tel:7132243600" className="text-[#C9A84C] hover:underline">713-224-3600</a>.
        </p>
      </div>
    )
  }

  const inputClass = 'w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#C9A84C] transition disabled:opacity-50'
  const labelClass = 'block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5'
  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-white/5 rounded-xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text" name="name" required placeholder="Your full name"
            value={fields.name} onChange={update} className={inputClass}
            disabled={isLoading}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email" name="email" required placeholder="your@email.com"
            value={fields.email} onChange={update} className={inputClass}
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel" name="phone" placeholder="(713) 555-0000"
            value={fields.phone} onChange={update} className={inputClass}
            disabled={isLoading}
          />
        </div>
        <div>
          <label className={labelClass}>Address</label>
          <input
            type="text" name="address" placeholder="City, TX"
            value={fields.address} onChange={update} className={inputClass}
            disabled={isLoading}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Additional Message</label>
        <textarea
          name="message" rows={5} placeholder="Tell us how we can help you…"
          value={fields.message} onChange={update}
          className={inputClass + ' resize-none'}
          disabled={isLoading}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2.5 bg-red-950/40 border border-red-800/50 rounded-lg px-4 py-3">
          <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
          <p className="text-red-300 text-sm">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#C9A84C] hover:bg-[#D4AF5F] disabled:opacity-60 disabled:cursor-not-allowed text-black font-black text-sm uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 transition"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
      <p className="text-gray-600 text-xs text-center">
        Or call us directly: <a href="tel:7132243600" className="text-[#C9A84C]">713-224-3600</a> — available 24/7
      </p>
    </form>
  )
}
