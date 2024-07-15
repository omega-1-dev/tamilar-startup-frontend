const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1300px",
        llg: "1200px",
      },
      colors: {
        "purple-theme": "#3945EF",
        "gray-theme": colors.gray[900],
        platinum:
          "var(--Gradient, linear-gradient(135deg, #6400FF 0%, #6304FE 13%, #5A08FF 27%, #5218FF 39.5%, #5218FF 50%, #3945EF 63.5%, #2960EE 77.5%, #187AD4 88.5%, #0192B4 100%))",
      },
      fontFamily: {
        switzer: ["switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
