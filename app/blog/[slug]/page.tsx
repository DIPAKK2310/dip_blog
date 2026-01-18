import { getAllPosts, getPostBySlug } from '@/lib/blog'
import MDXContent from '@/components/MDXContent'
import BlogPagination from '@/components/BlogPagination'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    slug: string
  }>
}

/* ✅ MUST be async */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params

  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params // ✅ unwrap once

  const posts = getAllPosts()

  const postIndex = posts.findIndex(
    (post) => post.slug === slug // ✅ use slug
  )

  if (postIndex === -1) {
    notFound()
  }

  const post = posts[postIndex]
  const prevPost = posts[postIndex - 1]
  const nextPost = posts[postIndex + 1]

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div
        className="     prose prose-lg dark:prose-invert max-w-none
    prose-p:text-zinc-200
    prose-li:text-zinc-200
    prose-strong:text-zinc-200
    prose-em:text-zinc-200
    prose-blockquote:text-zinc-200
    prose-headings:text-zinc-200

    [&_li]:transition-all
    [&_li]:duration-200
    [&_li:hover]:text-orange-400
    [&_li:hover]:underline
    [&_li:hover]:underline-offset-4
    
    [&_strong]:transition-all
    [&_strong]:duration-200
    [&_strong:hover]:text-orange-400
    [&_strong:hover]:underline
    [&_strong:hover]:underline-offset-4
    "
      >
        <MDXContent source={post.content} />
      </div>

      <BlogPagination prevSlug={prevPost?.slug} nextSlug={nextPost?.slug} />
    </main>
  )
}
