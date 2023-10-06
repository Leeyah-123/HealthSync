/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#CDFB47",
        "lightGreen": "rgba(205,251,71, .2)",
        "lightGray": "#F9FAFC",
        "lightGray2": "rgba(254,254,255, .4)",
        "lightGray3": "#AAA8A8"
      },
      backgroundImage: {
        "greenGradient": "linear-gradient(135deg, hsla(75, 96%, 63%, 1) 51%, rgba(205,251,71, .5) 100%)"
      }
    },
  },
  plugins: [],
}

