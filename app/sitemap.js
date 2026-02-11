export default async function sitemap() {
  const posts = await getPosts()

  const postUrls = posts.map((post) => ({
    url: `https://dipnext.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }))

  return [
    {
      url: 'https://dipnext.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://dipnext.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://dipnext.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://dipnext.vercel.app/devops',
      lastModified: new Date(),
    },

    ...postUrls,
  ]
}
