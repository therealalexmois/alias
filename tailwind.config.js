const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "tablet": "48rem",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "tablet": "4rem",
      },
    },
    fontFamily: {
      sans: "'Inter', sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
      },
      pink: {
        500: "#EC36A4"
      }
    },
    extend: {
      fontSize: {
        "2xl": ["1.5rem", "29px"],
        "3xl": ["2rem", "39px"],
      },
      spacing: {
        15: "3.25rem",
        25: "6.25rem",
        26: "6.5rem",
        74: "18.5rem",
        160: "40rem",
      }
    }
  },
  plugins: [],
}
