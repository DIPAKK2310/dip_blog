import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Quote } from '@/components/common/Quote'
import CommandPalette from '@/components/command/CommandPalette'
import SEOJsonLd from '@/components/SEOJsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dipnext.vercel.app'),
  title: {
    default:
      'Dipak Khare | Full Stack Developer (Next.js, MERN) + DevOps Engineer',
    template: '%s | Dipak Khare',
  },
  description:
    'Dipak Khare is a Full Stack Developer specializing in Next.js, MERN Stack, and DevOps tools like Docker, Kubernetes, and GitHub Actions. Read blogs and explore projects.',
  keywords: [
    'Dipak Khare',
    'Full Stack Developer',
    'Next.js Developer',
    'MERN Stack',
    'React Developer',
    'Node.js Developer',
    'DevOps Engineer',
    'Docker',
    'Kubernetes',
    'GitHub Actions',
  ],
  alternates: {
    canonical: 'https://dipnext.vercel.app',
  },
  openGraph: {
    title: 'Dipak Khare | Full Stack Developer (Next.js, MERN) + DevOps',
    description:
      'Portfolio of Dipak Khare, a Full Stack Developer building scalable web apps using React, Next.js, Node.js, and DevOps practices.',
    url: 'https://dipnext.vercel.app',
    siteName: 'Dipak Khare',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://dipnext.vercel.app/meta/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Khare Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dipak Khare | Full Stack Developer (Next.js, MERN) + DevOps',
    description:
      'Portfolio of Dipak Khare, a Full Stack Developer building scalable web apps using React, Next.js, Node.js, and DevOps practices.',
    images: ['https://dipnext.vercel.app/meta/opengraph-image.png'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased tracking-tight bg-black text-zinc-200 min-h-screen">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-black text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <SEOJsonLd />
            {children}
            <CommandPalette />
            <Quote />
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
