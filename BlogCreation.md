# How to create blog

In this we see how can we create blogs in nextjs using mdx

## Folder Structure

```ts
app/
├─ blog/
│  ├─ page.tsx                # Blog listing
│  ├─ BlogPageClient.tsx      # Client MDX renderer
│  └─ [slug]/
│     └─ page.tsx             # Single blog page
│
lib/
├─ blog.ts                    # FS + gray-matter helpers
│
types/
├─ blog.ts                    # Blog + Frontmatter types
│
data/
└─ blog/
   ├─ routing-in-nextjs.mdx
   ├─ react-hooks.mdx
   └─ docker-basics.mdx


```

## first Install the dependencies

### next-mdx-remote gray-matter

```ts
npm install next-mdx-remote gray-matter

```

Why?

- gray-matter → reads frontmatter

- mdx-remote → renders MDX in App Router

### Step 2: MDX Blog Format (VERY IMPORTANT)

```ts
---
title: "Routing in Next.js App Router"
description: "Understand routing deeply in Next.js 13+"
date: "2026-01-07"
---

# Routing in Next.js

This is written in **MDX**.

- Works with React
- Supports components
- Markdown + JSX 🚀

```

### Step 3: Utility to read blogs (CORE LOGIC)

```ts
lib / blog.ts
```

```ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Blog } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'data/blog')

type BlogFrontmatter = {
  title: string
  description: string
}

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(BLOG_DIR)

  return files.map((file) => {
    const slug = file.replace('.mdx', '')
    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')

    const { data } = matter<BlogFrontmatter, any>(content)

    return {
      slug,
      title: data.title,
      description: data.description,
    }
  })
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const content = fs.readFileSync(filePath, 'utf-8')

  return matter<BlogFrontmatter, any>(content)
}
```

### Step 4: /blog Page (Blog Listing)

```ts
app / blog / page.tsx
```

```ts
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

```

### Step 5: [slug]/page.tsx (Single Blog Page)

```ts
app / blog / [slug] / page.tsx
```

```ts
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


```

### Step 6: Client-side MDX Renderer

```ts
app / blog / BlogPageClient.tsx
```

```ts
"use client";

import { MDXRemote } from "next-mdx-remote/rsc";

export default function BlogPageClient({ source }: { source: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}

```

### ✔ Tailwind typography plugin recommended:

```ts
npm install -D @tailwindcss/typography

```

### Step 7: Create Blog Type

```ts
types / blog.ts
```

```ts
export type Blog = {
  slug: string
  title: string
  description: string
}
```

### Step 7: Create Blog Type

```ts
lib / blog.ts
```

```ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Blog } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'data/blog')

type BlogFrontmatter = {
  title: string
  description: string
}

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(BLOG_DIR)

  return files.map((file) => {
    const slug = file.replace('.mdx', '')
    const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')

    const { data } = matter<BlogFrontmatter, any>(content)

    return {
      slug,
      title: data.title,
      description: data.description,
    }
  })
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const content = fs.readFileSync(filePath, 'utf-8')

  return matter<BlogFrontmatter, any>(content)
}
```

### If your facing : Module '"@/types/blog"' not found

```ts
tsconfig.json
```

```ts
{
  "compilerOptions": {
    "baseUrl": ".",    #Add this
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

```

#### After this close vs code and open again now try
