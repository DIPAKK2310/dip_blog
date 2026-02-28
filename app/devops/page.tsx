import Ci_Cd from '@/components/devops/Ci_Cd'
import Deployments from '@/components/devops/Deployments'
import HeroDev from '@/components/devops/HeroDev'
import Infra from '@/components/devops/Infra'
import Tools from '@/components/devops/TechBadges'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
     <HeroDev/>
      <Deployments/>
      <Ci_Cd/>
      <Infra/>
    </div>
  )
}

export default page
