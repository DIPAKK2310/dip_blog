import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const components = {
  Image,
}

export default function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug, // ✅ Adds IDs to all headings
              [rehypeAutolinkHeadings, { behavior: 'wrap' }], // optional but nice
            ],
          },
        }}
      />
    </article>
  )
}
