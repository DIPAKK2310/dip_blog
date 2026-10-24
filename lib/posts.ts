export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
}

export async function getCache(): Promise<Post[]> {
  const response = await fetch(`${process.env.CMS_URL}/api/posts`, {
    cache: 'force-cache',
    next: {
      revalidate: 3600,
      tags: ['posts'],
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}
