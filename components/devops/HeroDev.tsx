"use client"
import React from 'react'
import {motion} from 'framer-motion'

import Typewriter from '../common/Typewriter'
import TechBadges from './TechBadges'

const HeroDev = () => {
  return (
<section className="py-28 md:py-36 px-6">
  
  <div className="max-w-4xl mx-auto text-center">
    <motion.h1 
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
    className="text-5xl md:text-7xl font-bold tracking-tight">
      <Typewriter text="DevOps & Cloud Engineering" speed={60} />
    </motion.h1>

    <motion.p 
     initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-6 text-lg text-zinc-400">
      Automating deployments. Building scalable systems.
      Shipping production-ready applications.
    </motion.p>
  </div>
         <TechBadges/>


</section>  )
}

export default HeroDev