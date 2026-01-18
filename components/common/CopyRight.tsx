export default function CopyRight() {
  return (
    <p className="text-zinc-200 text-sm leading-relaxed">
      Design & Developed by{' '}
      <span className="font-semibold text-orange-400">Dip</span> 💖
      <br />© {new Date().getFullYear()}. All rights reserved.
    </p>
  )
}
