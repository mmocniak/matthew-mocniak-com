const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
      dropShadow: {
        'btn': '0px 1px 0px rgba(0, 0, 0, 0.05)',
        inner: 'inset 0px 2px 0px rgba(0, 0, 0, 0.1), inset 0px 3px 0px rgba(0, 0, 0, 0.055)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      textDecoration: ['first'],
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
