/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(84, 12, 16)",
        "primaryLight": "rgb(123, 22, 28)",
        "red1": "rgb(84, 12, 16)",
        "dark": "rgb(27, 27, 27)",
        "dark2": "rgb(22, 22, 22)",
        "dark3": "rgb(21, 21, 21)",
        "gray": "rgb(198, 198, 198)",
        "gray1": "rgb(247, 247, 247)",
        "gray2": "rgb(164, 164, 164)",
        "gray3": "rgba(255, 255, 255, 0.15)",
        "gray4": "rgb(94, 94, 94)",
        "gray5": "rgb(226, 226, 226)",
        "gray6": "rgb(209, 190, 190)",
        "gray7": "rgb(218, 218, 218)",
        "pink1": "rgb(245, 172, 174)",
        "grayBorder": "rgba(76, 76, 76, 0.5)",
      },
      fontFamily: { 
        "opensans": ['Open Sans', 'arial', 'sans-serif'],
        "georgia": ['Georgia', 'serif']
      },
      boxShadow: {
        "shadow1": "0 3px 6px 3px rgba(0,0,0,0.24)"
      } 
    },
  },
  plugins: [],
}