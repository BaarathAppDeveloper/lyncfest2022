/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    screens: {
      xsm: { max: "600px" },
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
