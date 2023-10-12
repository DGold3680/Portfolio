const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        main: "#949494",
        sec: "#E76F00",
        tert: "#F2B932",
        bg: "#333333",
      },
      opacity: {
        10: "0.1",
      },
      textOpacity: {
        10: "0.1",
      },
    },
  },
  plugins: [],
};
