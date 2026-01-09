import Link from "next/link";

type Props = {
  prevSlug?: string;
  nextSlug?: string;
};

export default function BlogPagination({ prevSlug, nextSlug }: Props) {
  return (
    <nav className="flex justify-between mt-12">
      {prevSlug ? (
        <Link href={`/blog/${prevSlug}`} className="text-blue-600">
          ← Previous
        </Link>
      ) : (
        <span />
      )}

      {nextSlug && (
        <Link href={`/blog/${nextSlug}`} className="text-blue-600">
          Next →
        </Link>
      )}
    </nav>
  );
}
