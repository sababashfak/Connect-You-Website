/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green" : "#39DB4A",
        "red" : "#FF6868",
        "orange" : "#FF7F30",
        "light-orange" : "#f1d7c1",
        "secondary" : '#555',
        "primaryBG" : "#FCFCFC"
      },
      fontFamily: {
        "primary" : ['Inter', 'sans-serif']
      },
      screens: {
        'big-desktop': '2200px',
        // => @media (min-width: 1280px) { ... }
      },

    },
  },
  plugins: [require('daisyui')],
}

