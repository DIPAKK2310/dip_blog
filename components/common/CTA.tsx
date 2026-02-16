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
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-950 to-black p-10 text-center shadow-xl"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-white/5 opacity-20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Let’s Build Something Together 🚀
          </h2>

          <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Interested in collaborating, discussing ideas, or just saying hi?
            I’m always open to meaningful conversations.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <a
              href={linkdeInUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:bg-gray-200"
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
