/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // include MDX files
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        dockJiggle: {
          '0%,100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
          '75%': { transform: 'translateY(-1px)' },
        },
      },
      animation: {
        dockJiggle: 'dockJiggle 0.35s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
