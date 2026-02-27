import React from 'react'

const Infra = () => {
  return (

<section className="py-20 px-6 border-t border-zinc-800">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-2xl font-semibold mb-10 text-center">
      Infrastructure Overview
    </h2>

    <div className="grid md:grid-cols-2 gap-6 text-zinc-400">
      <p><strong>Frontend:</strong> Next.js / Vercel</p>
      <p><strong>Backend:</strong> Node.js / Express</p>
      <p><strong>Database:</strong> MongoDB Atlas</p>
      <p><strong>Reverse Proxy:</strong> Nginx</p>
      <p><strong>CI/CD:</strong> GitHub Actions</p>
      <p><strong>Containerization:</strong> Docker</p>
    </div>

  </div>
</section>)
}

export default Infra