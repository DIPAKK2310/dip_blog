import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

const components = {
  Image,
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components}/>
    </article>
  );
}
