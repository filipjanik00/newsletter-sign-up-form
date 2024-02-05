/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      main: "Roboto",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(231, 7%, 60%)",
        darkSlateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        tomato: "hsl(4, 100%, 67%)",
      },
    },
  },
  plugins: [],
};
