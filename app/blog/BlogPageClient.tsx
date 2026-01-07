"use client";

import { MDXRemote } from "next-mdx-remote/rsc";

export default function BlogPageClient({ source }: { source: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}
