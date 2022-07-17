/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  
  theme: {
    extend: {
      fontFamily:{
        inter: ['inter var',...defaultTheme.fontFamily.sans ]
      },
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        purple: {
          300: '#8284FA',
          500: '#5E60CE'
        },
        blue: {
          300: '#4EA8DE',
          500: '#1E6F9F'
        },
        red: {
          500: '#E25858'
        }

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
