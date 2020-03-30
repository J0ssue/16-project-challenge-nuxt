/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'spg-primary': '#2bb3b1',
        'spg-secondary': '#4abebd',
        'spg-green': '#bfdf32',
        'huddle-primary': 'hsl(257, 40%, 49%)',
        'sat-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 24%)',
        'grayish-red': 'hsl(0, 6%, 24%)'
      },
      letterSpacing: {
        'xl-wide': '10px'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      width: {
        'spg-card-width': '545px'
      },
      boxShadow: {
        'spg-card': '0px 0px 20px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  variants: {},
  plugins: []
}
