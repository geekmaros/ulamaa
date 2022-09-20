/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        10: "#F2F3F5",
        50: "#DCDEE1",
        100: "#DCDEE1",
        200: "#B4B8BD",
        300: "#9EA3A9",
        400: "#81878E",
        500: "#696F76",
        600: "#50555B",
        700: "#373B40",
        800: "#24282C",
        900: "#121416",
      },
      teal: {
        10: "#EEFBFC",
        50: "#C8F3F6",
        100: "#A3EAEE",
        200: "#7FDDE2",
        300: "#5ECED4",
        400: "#3EBCC3",
        500: "#22A5AD",
        600: "#0E8990",
        700: "#076D72",
        800: "#024D51",
        900: "#013235",
      },
    },
    fontFamily: {
      sans: ["Libre Franklin", "sans-serif"],
    },
    fontSize:{
      xs: ['12px', { lineHeight: '18px'}],
      sm: ['14px', { lineHeight: '20px'}],
      'base': ['16px', { lineHeight: '24px',  fontWeight: 'bold'}],
      'lg': ['20px', { lineHeight: '22px', fontWeight: 'bold'}],
      '2xl': ['32px', { lineHeight: '36px', fontWeight: 'bold'}],
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
