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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
