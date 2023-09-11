/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#994917",
        accentDark: "#4D2C18"
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
}