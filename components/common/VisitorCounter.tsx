'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Eye } from 'lucide-react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  const motionCount = useMotionValue(0)
  const rounded = useTransform(motionCount, (v) =>
    Math.floor(v).toLocaleString()
  )

  useEffect(() => {
    fetch('/api/visit')
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count)
        animate(motionCount, data.count, {
          duration: 1.2,
          ease: 'easeOut',
        })
      })
  }, [])

  if (!count) return null

  return (
    <motion.div
      title="Unique visitors since launch"
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: {
          scale: 1,
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          borderColor: 'rgba(255,255,255,0.1)',
        },
        hover: {
          scale: 1.02,
          boxShadow: '0 0 18px rgba(251, 191, 36, 0.25)',
          borderColor: 'rgba(251, 191, 36, 0.4)',
        },
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      className="
    inline-flex items-center gap-2
    rounded-full border
    bg-black/60 backdrop-blur
    px-4 py-2
    text-sm text-slate-300
    shadow-lg
    cursor-help
  "
    >
      <motion.div
        variants={{
          rest: { scaleY: 1 },
          hover: { scaleY: [1, 0.1, 1] },
        }}
        transition={{ duration: 0.18 }}
      >
        <Eye className="h-4 w-4 text-amber-300" />
      </motion.div>

      <span>
        You are the{' '}
        <motion.span className="font-semibold text-white">
          {rounded}
        </motion.span>
        th visitor
      </span>
    </motion.div>
  )
}
