import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: 'Nike 2.0',
      description:
        'Modern e-commerce landing page built with React, Tailwind CSS, and Framer Motion, featuring responsive design and smooth UI animations.',
      url: 'https://nike-landing-vert-nine.vercel.app/',
    },
    {
      name: 'Dipk.me',
      description:
        'Personal developer portfolio and blogging platform built with Next.js and MDX, featuring command palette navigation and performance-focused design.',
      url: 'https://github.com/DIPAKK2310/dipk.me',
    },
    {
      name: 'ShoppYnow',
      description:
        'Full-stack e-commerce application with product browsing, authentication, and admin management built using the MERN stack.',
      url: 'https://shopp-ynow.vercel.app',
    },
    {
      name: 'Lumina',
      description:
        'Modern responsive web interface built with React and Tailwind CSS focusing on clean UI, reusable components, and smooth user experience.',
      url: 'https://github.com/DIPAKK2310/lumina',
    },
  ]

  const itemClass =
    'text-zinc-200 transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent hover:underline underline-offset-4 decoration-orange-400/40'

  return (
    <>
      <h3 className="text-zinc-200 text-3xl font-bold mb-3">Projects</h3>

      <div className="max-w-3xl mx-auto py-2">
        <ul className="text-xl space-y-6 list-none">
          {projects.map((project) => (
            <li key={project.name} className="group">
              <a
                className="text-white transition hover:text-yellow-400 border-b border-transparent "
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>

              <p className="text-white text-sm mt-1">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Projects
