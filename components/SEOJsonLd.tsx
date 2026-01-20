export default function SEOJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dipak Khare',
    url: 'https://dipnext.vercel.app',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/DIPAKK2310',
      'https://www.linkedin.com/in/dipak-khare-159107212/',
      'https://x.com/dipakkhare_23',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
