import React from 'react'

const Deployments = () => {
  return (
    <section className="py-24 px-6 border-t border-zinc-800">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Production Deployment – MERN E-Commerce
      </h2>

      <ul className="space-y-4 text-zinc-400">
        <li>• Containerized frontend & backend using Docker</li>
        <li>• Reverse proxy configuration with Nginx</li>
        <li>• CI/CD using GitHub Actions</li>
        <li>• Deployed on AWS EC2</li>
        <li>• Secured environment variables</li>
      </ul>
    </div>

    {/* Right Side */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 font-mono text-sm text-zinc-400">
      User → Nginx → Node Backend → MongoDB Atlas
           ↑
      Docker Container
           ↑
      GitHub Actions CI/CD
    </div>

  </div>
</section>
)
}

export default Deployments