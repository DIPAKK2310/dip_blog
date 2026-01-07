import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import { Blog } from "@/types/blog";

export default function BlogPage() {
  const blogs:Blog[] = getAllBlogs();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block p-6 border rounded-lg hover:bg-muted"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-sm text-muted-foreground">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
