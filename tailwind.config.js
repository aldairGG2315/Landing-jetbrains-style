/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jb-dark': '#000000',
        'jb-purple': '#aa79ff',
      },
    },
  },
  plugins: [],
}