/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        midnight: '#050816',
        'surface-dark': '#0b1020',
        'surface-darker': '#050713',
        accent: '#2563eb',
      },
    },
  },
  plugins: [],
}

