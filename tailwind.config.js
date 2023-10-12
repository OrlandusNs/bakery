/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gold": "#FDBA74"
      }
    },
    fontFamily: {
      imperialCursive: ['Imperial Script', 'cursive'],
      abrilFatface: ['Abril Fatface', 'serif']
    }
  },
  plugins: [],
}

