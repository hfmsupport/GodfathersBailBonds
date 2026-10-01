'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  if (!items.length) return null

  return (
    <div className="mt-10 space-y-2">
      <h2 className="text-[#C9A84C] font-black text-sm tracking-widest uppercase mb-5">
        Frequently Asked Questions
      </h2>
      {items.map(({ question, answer }, i) => {
        const triggerId = `faq-trigger-${i}`
        const panelId   = `faq-panel-${i}`
        const isOpen    = open === i

        return (
          <div
            key={i}
            className={`border-l-2 rounded-r-lg overflow-hidden transition-colors duration-200 ${
              isOpen
                ? 'border-[#C9A84C] bg-[rgba(201,168,76,0.07)]'
                : 'border-[#C9A84C]/25 bg-[#161616]'
            }`}
          >
            <button
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span
                className={`font-semibold text-sm leading-snug ${
                  isOpen ? 'text-[#C9A84C]' : 'text-white'
                }`}
              >
                {question}
              </span>
              <span className="shrink-0 text-[#C9A84C]" aria-hidden="true">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[900px]' : 'max-h-0'
              }`}
            >
              <div
                className="px-5 pb-5 text-sm text-gray-300 leading-relaxed godfather-content"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
