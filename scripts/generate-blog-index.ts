import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

async function generateBlogIndex() {
  const blogDir = path.join(__dirname, '../data/blog')
  const outJson = path.join(__dirname, '../content/blog.json')
  const files = await fs.readdir(blogDir)

  const blogs = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(blogDir, file)
        const raw = await fs.readFile(filePath, 'utf8')
        const { data } = matter(raw)
        const slug = file.replace(/\.mdx$/, '')
        return {
          slug,
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          coverImage: data.coverImage || '',
          author: data.author || '',
          tags: data.tags || '',
          category: data.category || '',
          readingTime: data.readingTime || '',
          published: true || false,
        }
      })
  )

  await fs.writeFile(outJson, JSON.stringify(blogs, null, 2))
  console.log(`Blog index written to ${outJson}`)
}

generateBlogIndex().catch((err) => {
  console.error(err)
  process.exit(1)
})
