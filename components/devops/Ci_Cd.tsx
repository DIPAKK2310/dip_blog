import React from 'react'

const Ci_Cd = () => {
  return (
<section className="py-20 px-6 border-t border-zinc-800">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl font-semibold mb-12">
      Continuous Integration & Deployment
    </h2>

    <div className="flex flex-wrap justify-center gap-6 text-sm">
      <div className="px-4 py-2 border rounded-lg border-zinc-700">
        Push to Main
      </div>
      →
      <div className="px-4 py-2 border rounded-lg border-zinc-700">
        GitHub Actions
      </div>
      →
      <div className="px-4 py-2 border rounded-lg border-zinc-700">
        Docker Build
      </div>
      →
      <div className="px-4 py-2 border rounded-lg border-zinc-700">
        Deploy to EC2
      </div>
      →
      <div className="px-4 py-2 border rounded-lg border-zinc-700">
        Live Production
      </div>
    </div>

  </div>
</section>  )
}

export default Ci_Cd