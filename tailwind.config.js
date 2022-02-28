const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      warmGrey: colors.gray,
      grey: colors.coolGray,
      red: colors.red,
    },
    extend: {
      backgroundImage: {
        'offset-315': 'url(/images/offset-315.jpg)',
        'grunge-overlay': 'url(/images/sm-md-grunge-black-66.png)',
        'blast-overlay': 'url(/images/blast-flame-black.png)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
