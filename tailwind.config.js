module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pageDarkGrey: '#292928',
        pageWhite: '#EFEFF0',
        pageYellow: '#F0CE29',
        pageBlack: '#050006'
      },
      gridTemplateColumns: {
        mobile: '10px 1fr 10px',
        tablet: '20px 1fr 20px',
        desktop: '10% 1fr 10%'
      },
      gridTemplateRows: {
        default: 'auto 1fr auto'
      }
    }
  },
  plugins: []
};
