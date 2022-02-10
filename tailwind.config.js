const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const pageWhite = '#EFEFF0';
const pageGreen = '#37C900';

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif']
    },
    extend: {
      backgroundPosition: {
        bannerSmall: '25% 50%'
      },
      colors: {
        pageDarkGrey: '#292928',
        pageWhite: pageWhite,
        pageYellow: '#F0CE29',
        pageBlack: '#050006',
        pageGreen: pageGreen,
        error: {
          red: colors.red['600'],
          green: pageGreen,
          text: pageWhite
        },
        footer: {
          textWhite: pageWhite,
          textGrey: '#AEADB3'
        }
      },
      gridTemplateColumns: {
        mobile: '10px 1fr 10px',
        tablet: '20px 1fr 20px',
        desktop: 'minmax(10%,auto) 1fr minmax(10%,auto)'
      },
      gridTemplateRows: {
        default: 'auto 1fr auto'
      }
    }
  }
};
