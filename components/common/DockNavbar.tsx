'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'

import {
  type LucideIcon,
  User,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  Github,
  FileText,
  Terminal,
  Cpu,
  Linkedin,
  Home,
} from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type DockLinkItem = {
  icon: LucideIcon
  link: string
  label: string
  divider?: false
}

type DockDividerItem = {
  divider: true
}

type DockItem = DockLinkItem | DockDividerItem

type DockIconProps = {
  mouseX: MotionValue<number>
  item: DockLinkItem
  onHoverStart: () => void
  onHoverEnd: () => void
  onClickReset: () => void
}

const items: DockItem[] = [
  { icon: Home, link: '/', label: 'Home' },
  { icon: User, link: '/about', label: 'About' },
  { icon: Briefcase, link: '/experiance', label: 'Experiance' },
  { icon: Code, link: '/projects', label: 'Projects' },
  { icon: BookOpen, link: '/blog', label: 'Blog' },
  { icon: Mail, link: '/contact', label: 'Contact' },

  { icon: FileText, link: '/resume', label: 'Resume' },
  { icon: Terminal, link: 'cli', label: 'CLI' },

  { icon: Cpu, link: '/devops', label: 'DevOps' },
  { divider: true },

  { icon: Github, link: 'https://github.com/DIPAKK2310', label: 'GitHub' },
  {
    icon: Linkedin,
    link: 'www.linkedin.com/in/dipak-khare-159107212',
    label: 'LinkedIn',
  },
]

function DockIcon({
  mouseX,
  item,
  onHoverEnd,
  onHoverStart,
  onClickReset,
}: DockIconProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const MAGNET_RANGE = 160
  const MAX_SCALE = 1.45
  const MAX_LIFT = -12

  // const distance = useTransform(mouseX, (val) => {
  //   const rect = ref.current?.getBoundingClientRect()
  //   if (!rect) return 0
  //   return val - rect.left - rect.width / 2
  // })

  // const scale = useTransform(
  //   distance,
  //   [-MAGNET_RANGE, 0, MAGNET_RANGE],
  //   [1, MAX_SCALE, 1]
  // )
  // const y = useTransform(
  //   distance,
  //   [-MAGNET_RANGE, 0, MAGNET_RANGE],
  //   [0, MAX_LIFT, 0]
  // )

  // const smoothScale = useSpring(scale, {
  //   stiffness: 320,
  //   damping: 22
  // })

  // const smoothY = useSpring(y, {
  //   stiffness: 280,
  //   damping: 20
  // })

  const Icon = item.icon
  const isExternal = item.link.startsWith('http')

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.a
          ref={ref}
          href={item.link}
          target={isExternal ? '_blank' : '_self'}
          rel="noopener noreferrer"
          aria-label={item.label}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onClick={(e) => {
            onClickReset()

            if (item.link.startsWith('#')) {
              e.preventDefault()
              const el = document.querySelector(item.link)
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          // style={{
          //   scale: smoothScale,
          //   y: smoothY
          // }}
          whileHover={{
            scale: 1.25,
            y: -8,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="
            flex items-center justify-center
            h-10 w-10 sm:h-11 sm:w-11
            rounded-lg
            bg-white/5
            transition-colors duration-200
            hover:z-20
          "
        >
          <Icon className="h-5 w-5  text-zinc-200" />
        </motion.a>
      </TooltipTrigger>

      <TooltipContent side="top" className="hidden sm:block">
        {item.label}
      </TooltipContent>
    </Tooltip>
  )
}

export default function DockNavbar() {
  const mouseX = useMotionValue(Infinity)
  const [isHoveringIcon, setIsHoveringIcon] = useState(false)
  const resetDock = () => {
    mouseX.set(Infinity)
    setIsHoveringIcon(false)
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="
          fixed
          bottom-5
          left-1/2
          -translate-x-1/2
          z-50
          w-full
          flex
          justify-center
          px-3
        "
      >
        <div
          className={`
             group
  flex items-end
  gap-3 sm:gap-4
  ${isHoveringIcon ? 'px-4 sm:px-5' : 'px-2 sm:px-3'}
  px-2 sm:px-3
  py-3 sm:py-2.5
  rounded-xl
  bg-zinc-900/45
  backdrop-blur-lg
  border border-white/10
  shadow-[0_8px_24px_rgba(0,0,0,0.3)]
  transition-all
  duration-300

${isHoveringIcon ? 'animate-dockJiggle scale-105 ' : ''}
  
          `}
        >
          {items.map((item, index) =>
            'divider' in item ? (
              <div
                key={index}
                className="mx-1 hidden h-8 w-px bg-white/15 sm:block"
              />
            ) : (
              <DockIcon
                key={index}
                mouseX={mouseX}
                item={item}
                onHoverStart={() => setIsHoveringIcon(true)}
                onHoverEnd={() => setIsHoveringIcon(false)}
                onClickReset={resetDock}
              />
            )
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
