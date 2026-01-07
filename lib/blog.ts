import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "data/blog");

type BlogFrontmatter = {
  slug: string;
  title: string;
  description: string;
    date: string;
  tags: string[];
  draft: boolean;
};

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(
      path.join(BLOG_DIR, file),
      "utf-8"
    );

    const { data } = matter<string,BlogFrontmatter>(content);
    if (!data.title || !data.description || !data.date) {
  throw new Error(`Invalid frontmatter in ${slug}`);
}
    

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags,
      draft: data.draft,
    };
  });
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf-8");

  return matter<string,BlogFrontmatter>(content);
}
