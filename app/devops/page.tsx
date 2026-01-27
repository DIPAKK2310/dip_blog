import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="https://www.docker.com/">Docker</Link>
        </li>
        <li>
          <Link href="https://kubernetes.io/">Kubernetes</Link>
        </li>
        <li>
          <Link href="https://github.com/features/actions">Github-Actions</Link>
        </li>
        <li>
          <Link href="/">More..</Link>
        </li>
      </ul>
    </div>
  )
}

export default page
