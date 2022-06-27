/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#DEDEDE",
          200: "#CFCFCF",
          300: "#B8B8B8",
          400: "#A3A3A3",
          500: "#8A8A8A",
          600: "#7A7A7A",
          700: "#636363",
          800: "#595959",
          900: "#4D4D4D",
          1000: "#424242",
          1100: "#363636",
          1200: "#2B2B2B",
          1300: "#1C1C1C",
          1400: "#141414",
          1500: "#0F0F0F",
          1600: "#0A0A0A",
          1700: "#080808",
          1800: "#000000",
        },
      },
    },
  },
  plugins: [],
};
