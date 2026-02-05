import Home from '@/components/home/home'
import Projects from '@/components/projects/Projects'
import OnekoCat from '@/components/common/OnekoCat'
import VisitorCounter from '@/components/common/VisitorCounter'

const page = () => {
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-12 ">
      <Home />
      <Projects />
      <OnekoCat />
      <VisitorCounter />
    </main>
  )
}

export default page
