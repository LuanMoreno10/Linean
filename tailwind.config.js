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
          dark: '#5c5c5c',
          darker: '#454545',
        },
        accent: '#F6E9CB',
        dark: '#404040',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        display: ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
