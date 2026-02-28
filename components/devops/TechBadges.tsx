"use client"

import { motion } from "framer-motion"
import { FaDocker, FaAws } from "react-icons/fa"
import {
  SiKubernetes,
  SiGithubactions,
  SiNginx,
  SiMongodb,
} from "react-icons/si"

const tech = [
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "AWS EC2", icon: FaAws },
  { name: "Nginx", icon: SiNginx },
  { name: "MongoDB Atlas", icon: SiMongodb },
]

export default function TechBadges() {
  return (
<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {tech.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -8 }}
           className="group relative rounded-2xl overflow-hidden
           bg-zinc-900/70 backdrop-blur-xl
           border border-zinc-800
           shadow-xl shadow-black/30
           cursor-pointer
           h-56 md:h-64
           w-full
           flex flex-col items-center justify-center
           px-8
           transition-all duration-300
           hover:border-cyan-400/40
           hover:shadow-cyan-500/10"
          >
            {/* === Animated Border Lines === */}
            <span className="absolute top-0 left-[-100%] w-full h-[2px]
                             bg-gradient-to-r from-transparent via-cyan-400 to-transparent
                             animate-border-top opacity-80" />

            <span className="absolute right-0 top-[-100%] w-[2px] h-full
                             bg-gradient-to-b from-transparent via-cyan-400 to-transparent
                             animate-border-right opacity-80" />

            <span className="absolute bottom-0 right-[-100%] w-full h-[2px]
                             bg-gradient-to-l from-transparent via-cyan-400 to-transparent
                             animate-border-bottom opacity-80" />

            <span className="absolute left-0 bottom-[-100%] w-[2px] h-full
                             bg-gradient-to-t from-transparent via-cyan-400 to-transparent
                             animate-border-left opacity-80" />

            {/* Subtle Light Overlay */}
            <div className="absolute inset-0 rounded-2xl
                            bg-gradient-to-br from-white/5 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-6xl md:text-7xl 
             text-zinc-400 group-hover:text-white 
             transition-colors duration-300"
              >
                <Icon />
              </motion.div>

              <p className="mt-5 text-sm font-medium 
                            text-zinc-400 group-hover:text-white
                            transition-colors duration-300">
                {item.name}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}