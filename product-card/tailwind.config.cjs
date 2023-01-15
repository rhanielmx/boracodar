/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {   
    fontFamily: {
      'heading': ['Crimson Pro'],
      'lato': ['Lato']
    },
    extend: {
      colors: {
        'rose': '#D9CDF7',
        'purple': '#271A45',
      },
    },
  },
  plugins: [],
}
