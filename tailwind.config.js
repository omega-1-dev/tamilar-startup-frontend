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
      },
      fontFamily: {
        switzer: ["switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
