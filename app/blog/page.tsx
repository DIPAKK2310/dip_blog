import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl text-blue-600"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
