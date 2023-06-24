/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#10362C",
        light: "#A5ED13",
        secondary: "#14891F",
        overlay: "#0E7B39",
        span: "#AAF010",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        chauPhilomeneOne: ["Chau Philomene One", "sans-serif"],
        luckiestGuy: ["Luckiest Guy", "sans-serif"],
        memeFont: ["memeFont"],
        anakeimDisplaySsiRegular: ["anakeim", "sans-serif"],
      },
    },
  },
  plugins: [],
};
