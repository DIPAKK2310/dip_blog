import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "data/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}
