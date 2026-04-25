/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#E53935',
        'pizza-red-dark': '#C62828',
        'pizza-orange': '#FB8C00',
        'pizza-yellow': '#FDD835',
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
