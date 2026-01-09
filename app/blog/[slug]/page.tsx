import { getAllPosts, getPostBySlug } from "@/lib/blog";
import MDXContent from "@/components/MDXContent";
import BlogPagination from "@/components/BlogPagination";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* ✅ MUST be async */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; // ✅ unwrap once

  const posts = getAllPosts();

  const postIndex = posts.findIndex(
    (post) => post.slug === slug // ✅ use slug
  );

  if (postIndex === -1) {
    notFound();
  }

  const post = posts[postIndex];
  const prevPost = posts[postIndex - 1];
  const nextPost = posts[postIndex + 1];

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div className="prose prose-lg dark:prose-invert">

      <MDXContent source={post.content} />
      </div>


      <BlogPagination
        prevSlug={prevPost?.slug}
        nextSlug={nextPost?.slug}
      />
    </main>
  );
}
