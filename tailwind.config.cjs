/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'manrope': ['Manrope', 'sans-serif']

      },
      colors: {
        whithey:"#F5F5FA",
        dark:"#000000",
        primary: {
          100:"#9389EB" ,
          200:"#5A3AF2",
          300:"#6740DB",
          400:"#4B10C7",
        }
      }
    },
  },
  plugins: [],
};
