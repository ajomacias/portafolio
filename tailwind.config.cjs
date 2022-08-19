const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['proxima-nova', ...defaultTheme.fontFamily.sans], 
        
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage : {
        

      }
    },
  },
  plugins: [],
}