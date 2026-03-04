
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from '../common/Typewriter'
import TechBadges from './TechBadges'
import Image from 'next/image'

const HeroDev = () => {
  return (
    <section className="py-36 md:py-44 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          <Typewriter text="DevOps & Cloud Engineering" speed={60} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
        >
          Containerized applications. Automated CI/CD pipelines. Reliable,
          production-grade deployments.
        </motion.p>

        {/* Minimal Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 h-px w-24 bg-zinc-800 mx-auto"
        />
      </div>
      <div className="mt-24 max-w-[1600px] mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Production Infrastructure Architecture
        </h3>

      <Image
  src="/infrastructure-diagram.svg"
  alt="Production Infrastructure Diagram"
  width={2000}
  height={1400}
  className="w-full max-h-[900px] object-contain rounded-xl"
  priority
/>
        
      </div>

      <div className="mt-24">
        <TechBadges />
      </div>
    </section>
  )
}

export default HeroDev
