const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['proxima-nova', ...defaultTheme.fontFamily.sans], 
        
      },
      backgroundImage : {
        

      }
    },
  },
  plugins: [],
}