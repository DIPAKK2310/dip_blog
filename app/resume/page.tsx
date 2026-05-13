import React from 'react'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Briefcase,
  Code2,
  Database,
  Server,
  Wrench,
} from 'lucide-react'

const Resume = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 border-b border-zinc-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold tracking-tight">
                Dipak <span className="text-zinc-400">Khare</span>
              </h1>

              <p className="mt-3 text-lg text-zinc-300">
                Full Stack Developer • Frontend Developer • DevOps Enthusiast
              </p>

              <div className="flex flex-wrap gap-4 mt-5 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  Navi Mumbai, India
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  dipakkhare.dev@gmail.com
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/DIPAKK2310"
                target="_blank"
                className="border border-zinc-700 hover:border-zinc-500 transition rounded-xl p-3"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="border border-zinc-700 hover:border-zinc-500 transition rounded-xl p-3"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-3">
          {/* Sidebar */}
          <div className="bg-zinc-950 border-r border-zinc-800 p-6 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase size={18} />
                About
              </h2>

              <p className="text-sm leading-7 text-zinc-400">
                Frontend-focused Full Stack Developer with hands-on experience
                building scalable web applications using React, Next.js,
                Node.js, and modern DevOps workflows. Passionate about
                infrastructure, CI/CD, Docker, cloud-native tooling, and
                production-grade systems.
              </p>
            </div>

            {/* Frontend Skills */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 size={18} />
                Frontend
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'JavaScript',
                  'Tailwind CSS',
                  'Framer Motion',
                  'HTML',
                  'CSS',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-zinc-800 border border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Database size={18} />
                Backend
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'Mongoose',
                  'JWT',
                  'REST APIs',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-zinc-800 border border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Server size={18} />
                DevOps
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  'Docker',
                  'GitHub Actions',
                  'CI/CD',
                  'Git',
                  'Linux',
                  'Kubernetes',
                  'Azure DevOps',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-zinc-800 border border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 p-8 space-y-10 bg-zinc-900">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b border-zinc-700 pb-3">
                Experience
              </h2>

              <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Frontend Developer
                    </h3>

                    <p className="text-zinc-400 mt-1">
                      Green Point Global • Belapur
                    </p>
                  </div>

                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
                    Dec 2025 - Present
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-zinc-300 list-disc list-inside leading-7">
                  <li>
                    Working on Next.js and Node.js implementations to improve
                    SEO and overall performance of client applications.
                  </li>

                  <li>
                    Collaborating on scalable frontend architectures using React
                    and modern UI practices.
                  </li>

                  <li>
                    Contributing to backend integrations and application
                    optimization workflows.
                  </li>

                  <li>
                    Working with Git-based collaborative development and
                    deployment pipelines.
                  </li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b border-zinc-700 pb-3">
                Featured Projects
              </h2>

              <div className="space-y-6">
                {/* Project 1 */}
                <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950 hover:border-zinc-600 transition">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">ShoppyNow</h3>

                      <p className="text-zinc-400 text-sm mt-1">
                        Full Stack E-Commerce Platform
                      </p>
                    </div>

                    <a
                      href="https://github.com/yourusername/shoppynow"
                      target="_blank"
                      className="flex items-center gap-2 text-sm border border-zinc-700 px-3 py-2 rounded-xl hover:border-zinc-500"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'React',
                      'Node.js',
                      'MongoDB',
                      'Docker',
                      'GitHub Actions',
                      'JWT',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-zinc-800 border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 text-zinc-300 space-y-3 list-disc list-inside leading-7">
                    <li>
                      Built a production-ready e-commerce platform with secure
                      authentication and product management.
                    </li>

                    <li>
                      Configured Docker and GitHub Actions for automated CI/CD
                      workflows.
                    </li>

                    <li>
                      Implemented scalable REST APIs and protected routes using
                      JWT authentication.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950 hover:border-zinc-600 transition">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">Lumina</h3>

                      <p className="text-zinc-400 text-sm mt-1">
                        AI Powered File Converter
                      </p>
                    </div>

                    <a
                      href="https://github.com/yourusername/lumina"
                      target="_blank"
                      className="flex items-center gap-2 text-sm border border-zinc-700 px-3 py-2 rounded-xl hover:border-zinc-500"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'Next.js',
                      'TypeScript',
                      'Clerk',
                      'Magic UI',
                      'AI APIs',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-zinc-800 border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 text-zinc-300 space-y-3 list-disc list-inside leading-7">
                    <li>
                      Building an AI-powered file conversion platform inspired
                      by Cloudinary workflows.
                    </li>

                    <li>Implemented secure authentication using Clerk.</li>

                    <li>
                      Focused on modern UI/UX using Magic UI and TypeScript.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b border-zinc-700 pb-3">
                Education
              </h2>

              <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950">
                <h3 className="text-lg font-semibold">
                  Bachelor of Engineering in Chemical Engineering
                </h3>

                <p className="text-zinc-400 mt-2">Graduated in 2024</p>
              </div>
            </section>

            {/* Footer */}
            <section className="border border-zinc-800 rounded-2xl p-6 bg-gradient-to-r from-zinc-950 to-zinc-900">
              <div className="flex items-center gap-3 mb-3">
                <Wrench size={18} />
                <h3 className="font-semibold text-lg">Career Focus</h3>
              </div>

              <p className="text-zinc-300 leading-7">
                Passionate about Full Stack Engineering, DevOps workflows,
                scalable backend systems, cloud-native tooling, infrastructure,
                and modern frontend architectures.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
