import React from 'react'
import BlogIndex from '@/app/blog/page'
import VisitorCounter from '../common/VisitorCounter'

const Home = () => {
  const hoverClass =
    'text-zinc-200 transition-colors duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent hover:underline underline-offset-4 decoration-orange-400/40 decoration-2 cursor-pointer'

  return (
    <div className="space-y-5 max-w-3xl mx-auto leading-relaxed text-zinc-200 text-xl">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-medium">Hi There!</p>
        <VisitorCounter />
      </div>
      <p className="text-lg sm:text-xl text-white font-medium">
        Looking to design and build fast, scalable web applications?
      </p>

      <p>
        I&apos;m Dipak Khare , a{' '}
        <a className={hoverClass} href="https://github.com/DIPAKK2310">
          Full-Stack Developer
        </a>{' '}
        and <a className={hoverClass}>DevOps </a> Enthusiast who enjoys building
        clean, scalable, and production-ready web experiences.
      </p>

      <p>
        I focus on writing maintainable code, designing real-world systems, and
        continuously improving my skills across frontend, backend, and DevOps.
      </p>

      <p>
        My goal is to create software that is fast, reliable, and easy to scale.
      </p>
      <BlogIndex />
    </div>
  )
}

export default Home
