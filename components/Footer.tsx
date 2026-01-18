import CopyRight from './common/CopyRight'

export default function Footer() {
  const links = [
    { name: 'X(twitter)', url: 'https://x.com/dipakkhare_23' },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dipak-khare-159107212/',
    },
    {
      name: 'Github',
      url: 'https://github.com/DIPAKK2310',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@dipakkhare.dev',
    },
  ]

  return (
    <footer className="mt-16 pb-8">
      <div className="max-w-[60ch] mx-auto px-6 text-center space-y-6">
        {/* Divider line */}
        <div className="h-px w-full bg-zinc-800/60" />

        {/* Links */}
        <div className="flex justify-center gap-8 tracking-tight text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-amber-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <CopyRight />
      </div>
    </footer>
  )
}
