import React from 'react'
import BlogIndex from '@/app/blog/page'

const Home = () => {
  const hoverClass =
    'text-zinc-200 transition-colors duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent hover:underline underline-offset-4 decoration-orange-400/40 decoration-2 cursor-pointer'

  return (
    <div className="space-y-5 leading-relaxed text-zinc-200 text-xl">
      <p>Hi There!</p>

      <p>
        I&apos;m Dipak Khare, a{' '}
        <a className={hoverClass} href="https://github.com/DIPAKK2310">
          Full-Stack Developer
        </a>{' '}
        and <a className={hoverClass}>DevOps </a> Enthusiast who enjoys building
        clean, scalable, and production-ready web applications.
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
