import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  cacheComponents: true,
  partialPrefetching: true,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
