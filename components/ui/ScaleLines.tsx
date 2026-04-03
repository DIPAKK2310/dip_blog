'use client'

import { motion } from 'framer-motion'

const ScaleLines = () => {
  return (
    <>
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-screen w-12 md:block"
      >
        <div className="relative h-full w-full">
          {/* Main vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/20 -translate-x-1/2" />

          {/* Small ticks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_1px,transparent_1px,transparent_20px)]" />

          {/* Big ticks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_2px,transparent_2px,transparent_80px)]" />
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none fixed right-0 top-0 z-0 hidden h-screen w-12 md:block"
      >
        <div className="relative h-full w-full">
          {/* Main vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/20 -translate-x-1/2" />

          {/* Small ticks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0px,rgba(255,255,255,0.2)_1px,transparent_1px,transparent_20px)]" />

          {/* Big ticks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_2px,transparent_2px,transparent_80px)]" />
        </div>
      </motion.div>
    </>
  )
}

export default ScaleLines
