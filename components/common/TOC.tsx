'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type TOCItem = { id: string; text: string }

export default function TOC() {
  const [items, setItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState('')

  // ✅ Collect all H2 headings
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('article h2'))

    const toc = headings.map((h) => {
      const text = h.textContent ?? ''
      const slug = text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')

      if (!h.id) h.id = slug

      return { id: h.id, text }
    })

    setItems(toc)
  }, [])

  // ✅ Highlight active heading on scroll
  useEffect(() => {
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      {
        rootMargin: '-20% 0% -70% 0%',
        threshold: 0.1,
      }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  // ✅ Scroll to heading on click
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!items.length) return null

  return (
    <aside className="hidden xl:block w-64 sticky top-24 h-[calc(100vh-6rem)]">
      <p className="text-sm font-semibold text-muted-foreground mb-3">
        On this page
      </p>

      <ul className="space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <li key={item.id} className="relative">
              {isActive && (
                <motion.div
                  layoutId="active-toc"
                  className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <button
                onClick={() => handleClick(item.id)}
                className={cn(
                  'w-full text-left text-sm leading-6 pl-5 pr-3 py-2 rounded-lg transition',
                  'hover:bg-muted',
                  isActive
                    ? 'text-foreground font-semibold bg-muted'
                    : 'text-muted-foreground'
                )}
              >
                {item.text}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
