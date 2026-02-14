'use client'
import { motion } from 'framer-motion'
import * as Avatar from '@radix-ui/react-avatar'
import * as Separator from '@radix-ui/react-separator'
import * as Tabs from '@radix-ui/react-tabs'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-black text-zinc-200">
      <div className="text-zinc-200 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <Avatar.Root className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
            <Avatar.Image
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-200 text-zinc-200">
              DK
            </Avatar.Fallback>
          </Avatar.Root>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h1>
            <p className="mt-3 text-gray-200 leading-relaxed">
              Hi, I'm Dipak — a Full Stack Engineer & DevOps Enthusiast
              passionate about building performant, scalable, and user-friendly
              digital products.
            </p>
          </div>
        </motion.div>

        <Separator.Root className="my-10 h-px bg-gray-200" />

        {/* Tabs Section */}
        <Tabs.Root defaultValue="story" className="w-full">
          <Tabs.List className="flex gap-6 border-b border-gray-200 mb-6">
            <Tabs.Trigger
              value="story"
              className="pb-2 text-sm font-medium text-gray-200 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              My Story
            </Tabs.Trigger>

            <Tabs.Trigger
              value="skills"
              className="pb-2 text-sm font-medium text-gray-200 data-[state=active]:text-gray-200 data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              Skills
            </Tabs.Trigger>

            <Tabs.Trigger
              value="vision"
              className="pb-2 text-sm font-medium text-gray-200 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              Vision
            </Tabs.Trigger>
          </Tabs.List>

          {/* Story */}
          <Tabs.Content value="story" className="text-gray-200 leading-relaxed">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              My journey into tech started with curiosity — exploring how things
              work behind the scenes. What began as simple experiments evolved
              into a deep passion for crafting full-stack applications and
              understanding infrastructure, performance, and scalability.
            </motion.p>

            <p className="mt-4">
              Today, I focus on building modern web experiences using React,
              JavaScript, and contemporary tooling while continuously expanding
              my knowledge in DevOps, cloud systems, and software architecture.
            </p>
          </Tabs.Content>

          {/* Skills */}
          <Tabs.Content value="skills" className="text-gray-700">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                'JavaScript',
                'React',
                'Tailwind CSS',
                'Node.js',
                'MongoDB',
                'Docker',
                'Kubernetes',
                'System Design',
                'Performance Optimization',
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-3 rounded-2xl border border-gray-200 text-sm bg-gray-50"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </Tabs.Content>

          {/* Vision */}
          <Tabs.Content
            value="vision"
            className="text-gray-200 leading-relaxed"
          >
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              I aim to grow as an engineer who not only writes clean, efficient
              code but also understands systems holistically — from user
              experience to deployment pipelines and reliability engineering.
            </motion.p>

            <p className="mt-4">
              Long term, I aspire to contribute to impactful products, solve
              meaningful problems, and share knowledge that helps others grow in
              their tech journey.
            </p>
          </Tabs.Content>
        </Tabs.Root>

        <Separator.Root className="my-10 h-px bg-gray-200" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl font-semibold">Let’s Build Something</h2>
          <p className="text-gray-200 mt-2">
            Interested in collaborating, discussing ideas, or just saying hi?
          </p>

          <div className="mt-4">
            <a
              href="/contact"
              className="inline-block px-5 mt-4 py-2 rounded-2x text-sm shadow hover:scale-105 transition hover:bg-gray-200 hover:text-black rounded-sm"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
