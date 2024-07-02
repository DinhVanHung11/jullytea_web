/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(84, 12, 16)",
        "dark": "rgb(27, 27, 27)",
        "primaryLight": "rgb(123, 22, 28)"
      },
      fontFamily: { 
        "opensans": ['Open Sans', 'arial', 'sans-serif'] 
    } 
    },
  },
  plugins: [],
}