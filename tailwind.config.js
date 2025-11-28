/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Dark Slate
        secondary: "#1e293b", // Slate 800
        accent: "#38bdf8", // Cyan
      }
    },
  },
  plugins: [],
}