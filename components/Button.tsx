import Link from "next/link";

export default function GoToBlogButton() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Link href="/blog">
        <button
          className="
            relative inline-flex items-center justify-center
            w-full sm:w-auto
            px-6 sm:px-10 py-3 sm:py-4
            text-sm sm:text-base md:text-lg
            font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            rounded-xl
            shadow-lg shadow-purple-500/30
            transition-all duration-300 ease-out
            hover:scale-105
            hover:shadow-xl hover:shadow-pink-500/40
            focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
            active:scale-95
            cursor-pointer
          "
        >
          🚀 Read Blogs
        </button>
      </Link>
    </div>
  );
}
