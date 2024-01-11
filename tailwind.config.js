/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fbbf24',
        'primary-hover': '#f59e0b',
        'body-bg-light': "#f1f5f9",
      },
      fontFamily: {
        inter: ["Inter", 'sans-serif']
      },
      boxShadow: {
        'retro': '0 3px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
}

