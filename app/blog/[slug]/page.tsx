import { getAllPosts, getPostBySlug } from '@/lib/blog'
import MDXContent from '@/components/MDXContent'
import BlogPagination from '@/components/BlogPagination'
import { notFound } from 'next/navigation'
import TOC from '@/components/common/TOC'

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
    <main className="mx-auto  max-w-7xl px-6 py-12">
      <div className="flex items-start gap-34">
        {/* LEFT CONTENT */}
        <article className="w-full max-w-3xl xl:ml-12 mx-auto">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-8">{post.date}</p>

          <div
            className="
           prose prose-lg dark:prose-invert max-w-none

  /* TEXT */
  prose-p:text-zinc-300 prose-p:leading-relaxed
  prose-strong:text-white
  prose-em:text-zinc-200

  /* HEADINGS */
  prose-headings:text-white prose-headings:font-semibold
  prose-h1:text-4xl prose-h1:mb-6
  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-blue-400
  prose-h4:text-lg prose-h4:mt-6 prose-h4:text-zinc-200

  /* LINKS */
  prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline

  /* LISTS */
  prose-ul:list-disc prose-ul:pl-5
  prose-ol:list-decimal prose-ol:pl-5
  prose-li:text-zinc-300
  prose-li:marker:text-blue-400

  /* INLINE CODE */
  prose-code:text-orange-400 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm

  /* CODE BLOCKS */
  prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:p-4

  /* BLOCKQUOTE (tips / notes) */
  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-white/5 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:text-zinc-300

  /* TABLES */
  prose-table:border prose-table:border-white/10
  prose-th:bg-white/5 prose-th:text-white
  prose-td:border prose-td:border-white/10

  /* HR */
  prose-hr:border-white/10

  /* IMAGES */
  prose-img:rounded-xl prose-img:shadow-lg

  /* SPACING FIXES */
  prose-li:my-1
  prose-pre:my-6
  prose-blockquote:my-6

          "
          >
            <MDXContent source={post.content} />
          </div>
        </article>

        {/* RIGHT TOC */}
        <aside className="hidden xl:block w-72 shrink-0 ml-16">
          <div className="sticky top-24">
            <TOC />
          </div>
        </aside>
      </div>
      <BlogPagination prevSlug={prevPost?.slug} nextSlug={nextPost?.slug} />
    </main>
  )
}
