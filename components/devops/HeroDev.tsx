// "use client"
// import React from 'react'
// import {motion} from 'framer-motion'

// import Typewriter from '../common/Typewriter'
// import TechBadges from './TechBadges'

// const HeroDev = () => {
//   return (
// <section className="py-28 md:py-36 px-6">
  
//   <div className="max-w-4xl mx-auto text-center">
//     <motion.h1 
//        initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//     className="text-5xl md:text-7xl font-bold tracking-tight">
//       <Typewriter text="DevOps & Cloud Engineering" speed={60} />
//     </motion.h1>

//     <motion.p 
//      initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//     className="mt-6 text-lg text-zinc-400">
//       Automating deployments. Building scalable systems.
//       Shipping production-ready applications.
//     </motion.p>
//   </div>
//          <TechBadges/>


// </section>  )
// }

// export default HeroDev


"use client"
import React from "react"
import { motion } from "framer-motion"
import Typewriter from "../common/Typewriter"
import TechBadges from "./TechBadges"

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
          Containerized applications. Automated CI/CD pipelines.
          Reliable, production-grade deployments.
        </motion.p>

        {/* Minimal Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 h-px w-24 bg-zinc-800 mx-auto"
        />

      </div>
      <div className="mt-20 max-w-5xl mx-auto border border-zinc-800 rounded-xl p-8 bg-zinc-900/40">
  <img src="/infrastructure-diagram.svg" alt="Production Infrastructure" />
</div>

      <div className="mt-24">
        <TechBadges />
      </div>

    </section>
  )
}

export default HeroDev




