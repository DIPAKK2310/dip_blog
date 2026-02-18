'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useEffect, useState } from 'react'

type Heading = {
  id: string
  text: string
  level: number
}

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')

  // Get headings from page
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('h2, h3')
    ) as HTMLHeadingElement[]

    const mapped = elements.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: Number(el.tagName.replace('H', '')),
    }))

    setHeadings(mapped)
  }, [])

  // Active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  return (
    <div
      className="sticky top-24 hidden xl:block w-64
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-xl p-4"
    >
      <p className="text-sm font-semibold text-gray-400 mb-4">On this page</p>

      <ScrollArea.Root className="max-h-[70vh]">
        <ScrollArea.Viewport className="pr-4">
          <ul className="space-y-2 text-sm">
            {headings.map((h) => (
              <li
                key={h.id}
                className={`transition ${h.level === 3 ? 'ml-4' : ''}`}
              >
                <a
                  href={`#${h.id}`}
                  className={`block hover:text-blue-400 ${
                    activeId === h.id
                      ? 'text-blue-500 font-medium'
                      : 'text-gray-500'
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" />
      </ScrollArea.Root>
    </div>
  )
}
