'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const visited = sessionStorage.getItem('visited')

    if (!visited) {
      fetch('/api/visit')
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count)
          sessionStorage.setItem('visited', 'true')
        })
    } else {
      fetch('/api/visit')
        .then((res) => res.json())
        .then((data) => setCount(data.count))
    }
  }, [])

  if (!count) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="
        inline-flex items-center gap-2
        rounded-full border border-white/10
        bg-black/60 backdrop-blur
        px-4 py-2
        text-sm text-slate-300
        shadow-lg
        hover:border-white/20 hover:text-white transition
      "
    >
      <Eye className="h-8 w-10 text-slate-400" />

      <span>
        You are the{' '}
        <span className="font-semibold text-white">
          {count.toLocaleString()}
        </span>{' '}
        th visitor
      </span>
    </motion.div>
  )
}
