/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#878787',
          dark: '#6e6e6e',
        },
        accent: '#F6E9CB',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'], // Professional look
      }
    },
  },
  plugins: [],
}
