export default function CopyRight() {
  return (
    <p className="text-zinc-500 text-sm leading-relaxed">
      Design & Developed by{' '}
      <span className="font-semibold text-zinc-300">Dip</span> 💖
      <br />© {new Date().getFullYear()}. All rights reserved.
    </p>
  )
}
