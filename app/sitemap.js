import { getAllPosts } from '@/lib/posts'
export default async function sitemap() {
  const posts = await getAllPosts()

  const postUrls = posts.map((post) => ({
    url: `https://dipnext.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }))

  return [
    {
      url: 'https://dipnext.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://dipnext.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 2,
    },
    {
      url: 'https://dipnext.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 3,
    },
    {
      url: 'https://dipnext.vercel.app/devops',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 4,
    },

    ...postUrls,
  ]
}
