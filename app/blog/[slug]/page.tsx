import { getBlogBySlug } from "@/lib/blog";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogSlugPage({ params }: BlogPageProps) {
  const { slug } = await params; // ✅ UNWRAP params

  const { content, data } = getBlogBySlug(slug);

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-muted-foreground mb-8">
        {data.description}
      </p>

      <div className="prose prose-neutral">
        {/* MDX render will go here */}
        {content}
      </div>
    </article>
  );
}
