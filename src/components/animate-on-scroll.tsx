'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: 1 | 2 | 3 | 4
}

export function AnimateOnScroll({ children, className = '', direction = 'up', delay }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : ''
  const delayClass = delay ? `reveal-d${delay}` : ''

  return (
    <div ref={ref} className={`reveal-hidden ${dirClass} ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
