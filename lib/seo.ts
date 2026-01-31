import { about } from '../config/About'
import { heroConfig } from '../config/Hero'
import type { Metadata } from 'next'

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
}

// 🌍 Base site configuration (PERSONAL BRANDING)
export const siteConfig = {
  name: 'Dipak Khare',
  title: 'Dipak Khare | Full Stack Developer Portfolio',
  description:
    'Dipak Khare is a Full Stack Developer specializing in React, Next.js, Node.js and modern web applications.',
  url: process.env.NEXT_PUBLIC_URL || 'https://dipnext.vercel.app',
  ogImage: '/meta/opengraph_image.png',
  author: {
    name: 'Dipak Khare',
    twitter: '@dipakkhare_23',
    github: 'https://github.com/DIPAKK2310',
    linkedin: '',
    email: 'dipakhare.dev@email.com',
  },
  keywords: [
    'Dipak Khare',
    'Dipak Khare developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack Developer',
  ],
}

// 📄 Page-specific metadata
export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: 'Dipak Khare | Full Stack Developer | React & Next.js | DevOps',
    description:
      'Portfolio of Dipak Khare, a Full Stack Developer building scalable web apps using React, Next.js, Node.js, and DevOps practices.',
    keywords: [
      'Dipak Khare',
      'developer portfolio',
      'full stack developer',
      'react projects',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  '/projects': {
    title: 'Projects | Dipak Khare',
    description:
      'Explore projects built by Dipak Khare using modern web technologies.',
    ogImage: '/meta/projects.png',
  },

  '/blog': {
    title: 'Blog | Dipak Khare',
    description: 'Technical articles and learning journey of Dipak Khare.',
    ogImage: '/meta/blogs.png',
  },

  '/resume': {
    title: 'Resume | Dipak Khare',
    description:
      'View the professional resume of Dipak Khare, Full Stack Developer.',
    ogImage: '/meta/resume.png',
  },

  '/contact': {
    title: 'Contact | Dipak Khare',
    description:
      'Get in touch with Dipak Khare for collaborations and opportunities.',
  },
}

// 🔍 Get metadata for page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/']
}

// ⚙️ Generate complete Next.js metadata
export function generateSEO(pathname: string): Metadata {
  const pageMeta = getPageMetadata(pathname)
  const cleanPath = pathname.split('?')[0].replace(/\/$/, '').toLowerCase()

  const url = `${siteConfig.url}${cleanPath}`

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title || siteConfig.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', ') || siteConfig.keywords.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,

    openGraph: {
      type: 'website',
      url,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },

    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}
