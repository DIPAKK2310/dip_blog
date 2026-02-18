import React from 'react'

const Projects = () => {
  const projects = [
    { name: 'Nike 2.0', url: 'https://nike-landing-vert-nine.vercel.app/' },
    { name: 'Dipk.me', url: 'https://github.com/DIPAKK2310/dipk.me' },
    { name: 'ShoppYnow', url: 'https://github.com/DIPAKK2310/ShoppYnow' },
    { name: 'Lumina', url: 'https://github.com/DIPAKK2310/lumina' },
  ]

  const itemClass =
    'text-zinc-200 transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent hover:underline underline-offset-4 decoration-orange-400/40'

  return (
    <>
      <h3 className="text-zinc-200 text-3xl font-bold mb-3">Projects</h3>

      <div className="max-w-3xl mx-auto py-2">
        <ul className="text-xl space-y-4  list-none list-inside">
          {projects.map((project) => (
            <li key={project.name} className={itemClass}>
              <a
                className={itemClass}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Projects
