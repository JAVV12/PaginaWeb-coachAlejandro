/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0d1f2d',
        'gold': '#dcc97f',
        'cream': '#efe6da',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-dm-sans)', 'sans-serif'],
        playfair: ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
}
