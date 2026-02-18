import Link from 'next/link'

type Props = {
  prevSlug?: string
  nextSlug?: string
}

export default function BlogPagination({ prevSlug, nextSlug }: Props) {
  return (
    <nav className="flex justify-between items-center mt-12">
      {/* ✅ Previous */}
      <Link
        href={prevSlug ? `/blog/${prevSlug}` : '/'}
        className="px-4 py-2 rounded-md border text-blue-600 hover:bg-blue-50 transition"
      >
        ← Previous
      </Link>

      {/* ✅ Next */}
      {nextSlug ? (
        <Link
          href={`/blog/${nextSlug}`}
          className="px-4 py-2 rounded-md border text-blue-600 hover:bg-blue-50 transition"
        >
          Next →
        </Link>
      ) : (
        <span className="px-4 py-2 text-gray-400 border rounded-md opacity-50 cursor-not-allowed">
          Next →
        </span>
      )}
    </nav>
  )
}
