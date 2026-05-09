import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.join(process.cwd(), 'public')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111827"/>
      <stop offset="1" stop-color="#000000"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <circle cx="256" cy="256" r="188" fill="none" stroke="#FFFFFF" stroke-opacity="0.22" stroke-width="16"/>
  <text x="256" y="300"
        text-anchor="middle"
        font-size="190"
        font-weight="800"
        font-family="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
        fill="#FFFFFF">D</text>
</svg>`

const outputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'android-chrome-128x128.png', size: 128 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
]

await fs.mkdir(publicDir, { recursive: true })

await Promise.all(
  outputs.map(async ({ name, size }) => {
    const outPath = path.join(publicDir, name)
    await sharp(Buffer.from(svg))
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outPath)
  }),
)

// A commonly-expected alias.
await fs.copyFile(
  path.join(publicDir, 'favicon-32x32.png'),
  path.join(publicDir, 'favicon.png'),
)

console.log(`Generated favicons in ${publicDir}`)

