import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Quote } from '@/components/common/Quote'
import CommandPalette from '@/components/command/CommandPalette'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dipnext.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Dipak Khare',
    template: '%s | Dipak Khare',
  },
  description: 'My portfolio, blog, and personal website.',
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
