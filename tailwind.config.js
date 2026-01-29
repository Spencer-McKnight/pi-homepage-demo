/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pi: {
          blue: '#1a4b7c',
          'blue-dark': '#0f3254',
          coral: '#d9534f',
          'coral-hover': '#c9302c',
          gold: '#c5a54a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
