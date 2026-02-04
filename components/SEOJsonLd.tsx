export default function SEOJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dipak Khare',
    url: 'https://dipnext.vercel.app',
    mainEntityOfPage: 'https://dipnext.vercel.app',
    image: 'https://dipnext.vercel.app/dipak-khare.jpg',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer and DevOps learner specializing in Next.js, MERN stack, Docker, and Kubernetes. Portfolio and technical blogs by Dipak Khare.',
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
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Engineering Graduate in Chemical Engineering',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
