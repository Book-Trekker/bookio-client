const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#064532',
      secondary: '#F1592B',
      gray: '#767a79',
      grayDark: '#EFEFEF',
      white: '#FFFFFF',
      black: '#000000',
      sky: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
    },
    // font-family
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      libre: ['Libre Baskerville', 'serif'],
    },
    // custom breakpoint
    screens: {
      xsm: '320px',
      sm: '640px',
      md: '825px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [],
})
