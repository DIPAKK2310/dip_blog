'use client'

import { motion } from 'framer-motion'

const ScaleLines = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-screen w-10 md:block"
      >
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(255,255,255,0.03)),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_40px)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none fixed right-0 top-0 z-0 hidden h-screen w-10 md:block"
      >
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(255,255,255,0.03)),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_40px)]" />
      </motion.div>
    </>
  )
}

export default ScaleLines
