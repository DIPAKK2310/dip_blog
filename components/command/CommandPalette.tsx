'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import {
  Search,
  Command as CommandIcon,
  Home,
  FileText,
  FolderGit2,
  User,
  Copy,
  Github,
  Linkedin,
  ServerCog,
} from 'lucide-react'

type CmdItem = {
  label: string
  keywords?: string
  icon?: React.ReactNode
  onSelect: () => void
}

export default function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  // ✅ Ctrl + K / Cmd + K
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes('mac')
      const modifierPressed = isMac ? e.metaKey : e.ctrlKey

      if (modifierPressed && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }

      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const run = React.useCallback((cb: () => void) => {
    setOpen(false)
    cb()
  }, [])

  // ✅ Update these routes based on your site
  const pages: CmdItem[] = [
    {
      label: 'Home',
      keywords: 'landing portfolio',
      icon: <Home className="h-4 w-4" />,
      onSelect: () => router.push('/'),
    },
    {
      label: 'Blogs',
      keywords: 'blog posts writing mdx',
      icon: <FileText className="h-4 w-4" />,
      onSelect: () => router.push('/blog'),
    },
    {
      label: 'Projects',
      keywords: 'work github portfolio',
      icon: <FolderGit2 className="h-4 w-4" />,
      onSelect: () => router.push('/#projects'),
    },
    {
      label: 'About',
      keywords: 'bio introduction',
      icon: <User className="h-4 w-4" />,
      onSelect: () => router.push('/about'),
    },
    {
      label: 'Devops',
      keywords: 'Devops Introduction',
      icon: <ServerCog className="h-4 w-4" />,
      onSelect: () => router.push('/devops'),
    },
  ]

  const actions: CmdItem[] = [
    {
      label: 'Copy email',
      keywords: 'mail contact',
      icon: <Copy className="h-4 w-4" />,
      onSelect: async () => {
        await navigator.clipboard.writeText('dipakkhare.dev@gmail.com')
        // You can replace this with toast later
      },
    },
    {
      label: 'Open GitHub',
      keywords: 'repo code',
      icon: <Github className="h-4 w-4" />,
      onSelect: () => window.open('https://github.com/DIPAKK2310', '_blank'),
    },
    {
      label: 'Open LinkedIn',
      keywords: 'profile',
      icon: <Linkedin className="h-4 w-4" />,
      onSelect: () =>
        window.open(
          'https://www.linkedin.com/in/dipak-khare-159107212/',
          '_blank'
        ),
    },
  ]

  return (
    <>
      {/* ✅ Floating button (Option B) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Command Palette"
        title="Search (Ctrl + K)"
        className="
          fixed bottom-6 right-6 z-[70]
          flex h-12 w-12 items-center justify-center
          rounded-full border border-white/10
          bg-black/60 backdrop-blur-md
          shadow-lg transition
          hover:scale-105 hover:border-yellow-400/40 hover:shadow-yellow-400/10
        "
      >
        <CommandIcon className="h-5 w-5 text-yellow-400" />
      </button>

      {/* ✅ Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ CMDK Dialog */}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="
          fixed left-1/2 top-1/2 z-[65]
          w-[92vw] max-w-xl
          -translate-x-1/2 -translate-y-1/2
          overflow-hidden
          rounded-2xl border border-white/10
          bg-zinc-950 shadow-2xl
        "
      >
        {/* Search input */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <Search className="h-4 w-4 text-white/40" />
          <Command.Input
            placeholder="Search pages, blogs, actions..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
          />
          <kbd className="hidden rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/50 sm:block">
            Ctrl K
          </kbd>
        </div>

        {/* Results */}
        <Command.List className="max-h-[360px] overflow-y-auto p-2">
          <Command.Empty className="p-4 text-sm text-white/50">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Pages"
            className="px-2 py-2 text-xs text-white/40"
          >
            {pages.map((item) => (
              <Command.Item
                key={item.label}
                value={`${item.label} ${item.keywords ?? ''}`}
                onSelect={() => run(item.onSelect)}
                className="
                  flex cursor-pointer select-none items-center gap-3
                  rounded-xl px-3 py-2 text-sm text-white/80 outline-none
                  transition hover:bg-white/5
                  data-[selected=true]:bg-white/10 data-[selected=true]:text-white
                "
              >
                <span className="text-white/60">{item.icon}</span>
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Separator className="my-2 h-px bg-white/10" />

          <Command.Group
            heading="Actions"
            className="px-2 py-2 text-xs text-white/40"
          >
            {actions.map((item) => (
              <Command.Item
                key={item.label}
                value={`${item.label} ${item.keywords ?? ''}`}
                onSelect={() => run(item.onSelect)}
                className="
                  flex cursor-pointer select-none items-center gap-3
                  rounded-xl px-3 py-2 text-sm text-white/80 outline-none
                  transition hover:bg-white/5
                  data-[selected=true]:bg-white/10 data-[selected=true]:text-white
                "
              >
                <span className="text-white/60">{item.icon}</span>
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>

        {/* Footer */}
        <div className="border-t border-white/10 px-4 py-2 text-xs text-white/40">
          Tip: Press <span className="text-yellow-400">Esc</span> to close •{' '}
          <span className="text-yellow-400">Ctrl + K</span> anytime
        </div>
      </Command.Dialog>
    </>
  )
}
