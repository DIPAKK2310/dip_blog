import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Blog } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "data/blog");

type BlogFrontmatter = {
  title: string;
  description: string;
};

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(
      path.join(BLOG_DIR, file),
      "utf-8"
    );

    const { data } = matter<BlogFrontmatter, any>(content);

    return {
      slug,
      title: data.title,
      description: data.description,
    };
  });
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf-8");

  return matter<BlogFrontmatter, any>(content);
}
