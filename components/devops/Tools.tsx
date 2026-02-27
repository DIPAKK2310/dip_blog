import React from 'react'
import TechCard from './TechStackGrid'

const tools = [
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "AWS EC2",
  "Nginx",
  "MongoDB Atlas"
]

const Tools = () => {
  return (
    <section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-semibold mb-10 text-center">
      Tools & Technologies
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
     {tools.map((tool) => (
      <TechCard key={tool} name={tool}/>
     ))}
    </div>
  </div>
</section>
  )
}

export default Tools