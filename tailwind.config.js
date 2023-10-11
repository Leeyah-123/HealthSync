/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sg: "500px",
        sl: "700px",
        md: "860px",
      },
      colors: {
        bgray: "#f6f6f4",
        btblack: "#0f1412",
        tlgreen: "#cdfb47",
        darkgray: "#eaeaea",
        lightblack: "#4b4948",
        lightGray: "#efefef",
      },
    },
  },
  plugins: [],
};
