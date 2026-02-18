'use client'
import { motion } from 'framer-motion'
import React from 'react'

const CTA = () => {
  const linkdeInUrl = 'https://www.linkedin.com/in/dipak-khare-159107212/'
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent
 p-10 text-center shadow-xl"
      >
        {/* Subtle glow effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2
h-48 w-48 rounded-full
bg-white/10 blur-3xl opacity-30" />

        <div className="relative z-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Have an idea, project, or opportunity? 🚀
          </h2>

          <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
           I’m always open to meaningful collaborations, interesting projects,
           and thoughtful conversations.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <a
              href={linkdeInUrl}
              className='px-6 py-2.5 rounded-full
bg-white text-black font-medium
transition-all duration-300

ring-1 ring-white/20
shadow-lg shadow-white/10
hover:shadow-xl hover:shadow-white/20

hover:scale-[1.03]
active:scale-[0.98]
'
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA
