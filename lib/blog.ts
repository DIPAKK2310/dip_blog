import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'data/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR)

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const filePath = path.join(BLOG_DIR, file)
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(raw)
      const safeDate = data.date ?? new Date().toISOString()

      return {
        slug,
        title: data.title,
        date: safeDate,
        description: data.description,
        content,
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      const timeA = isNaN(dateA.getTime()) ? 0 : dateA.getTime()
      const timeB = isNaN(dateB.getTime()) ? 0 : dateB.getTime()

      return timeB - timeA
    })
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}
