/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'rose': '#D9CDF7',
      'purple': '#271A45',
    },
    fontFamily: {
      'heading': ['Crimson Pro'],
      'lato': ['Lato']
    },
    extend: {},
  },
  plugins: [],
}
