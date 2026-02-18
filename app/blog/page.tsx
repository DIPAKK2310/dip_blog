import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto py-2">
      <h3 className="text-3xl font-bold mb-4 text-zinc-200">
        Some of my writing
      </h3>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="
                text-xl font-medium text-zinc-200
                transition-all duration-200
                hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400
                hover:bg-clip-text hover:text-transparent
                hover:underline underline-offset-4 decoration-orange-400/40
              "
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
