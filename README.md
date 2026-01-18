# Dip_blog

This is the bloging website where Dipak put his thoughts , innovationns, work & experince

## 📦 Dependencies

- **next** – React framework for server-side rendering and routing
- **react** – UI library for building user interfaces
- **react-dom** – DOM renderer for React
- **next-mdx-remote** – Render MDX content in Next.js (App Router friendly)
- **gray-matter** – Parse frontmatter metadata from MDX files

## ⚙️ Technologies

- **Next.js 16** – App Router–based React framework
- **React 19** – Component-based UI development
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS 4** – Utility-first CSS framework
- **PostCSS** – CSS processing tool
- **ESLint** – Code quality and linting
- **MDX** – Markdown with JSX support for blogs
- **Vercel** – Deployment and hosting platform

## Folder Structure

```ts
app/
├─ blog/
│  ├─ page.tsx                # Blog listing
│  ├─ BlogPageClient.tsx      # Client MDX renderer
│  └─ [slug]/
│     └─ page.tsx             # Single blog page
│
lib/
├─ blog.ts                    # FS + gray-matter helpers
│
types/
├─ blog.ts                    # Blog + Frontmatter types
│
data/
└─ blog/
   ├─ routing-in-nextjs.mdx
   ├─ react-hooks.mdx
   └─ docker-basics.mdx


```
