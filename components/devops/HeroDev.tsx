import React from 'react'
import Tools from './Tools'
import Deployments from './Deployments'
import Ci_Cd from './Ci_Cd'
import Infra from './Infra'
import Typewriter from '../common/Typewriter'

const HeroDev = () => {
  return (
<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      <Typewriter text="DevOps & Cloud Engineering" speed={60} />
    </h1>

    <p className="mt-6 text-lg text-zinc-400">
      Automating deployments. Building scalable systems.
      Shipping production-ready applications.
    </p>
  </div>
  <Tools/>
  <Deployments/>
  <Ci_Cd/>
  <Infra/>
</section>  )
}

export default HeroDev