const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')


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
      },
      backgroundImage: theme => ({
      'signature': "url('/signature.png')",
      'footer-texture': "url('/img/footer-texture.png')",
      }),
      backgroundSize: {
        '12': '3rem',
        '20': '5rem',
        '3/5': '60%',
      }
    },
    // fontFamily: {
    //   'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    //  }
  },
  
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
      backgroundColor: ['active'],
      textColor: ['active'],
      textDecoration: ['first'],
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
