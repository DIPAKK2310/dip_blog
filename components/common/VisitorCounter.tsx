'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-sm text-slate-300"
    >
      👀 {count.toLocaleString()} developers visited this site
    </motion.div>
  )
}
