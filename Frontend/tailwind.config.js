/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text" : "#313131",
        "blue" : "#2400FF",
        "background" : "#5F5FFF",
      }
    },
  },
  plugins: [],
}