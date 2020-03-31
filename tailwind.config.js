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
        'grayish-red': 'hsl(0, 6%, 24%)',
        'form-red': 'hsl(0, 100%, 74%)',
        'form-green': 'hsl(154, 59%, 51%)',
        'form-blue': 'hsl(248, 32%, 49%)',
        'form-dark-blue': 'hsl(249, 10%, 26%)',
        'form-grayish-blue': 'hsl(246, 25%, 77%)',
        'monthly-blue': 'hsl(240, 78%, 98%)',
        'monthly-light-blue': 'hsl(234, 14%, 74%)',
        'monthly-grayish-blue': 'hsl(233, 13%, 49%)',
        'monthly-dark-grayish-blue': 'hsl(232, 13%, 33%)',
        'monthly-purple': 'hsl(237, 63%, 64%)',
        'shortly-primary-cyan': 'hsl(180, 66%, 49%)',
        'shortly-primary-violet': 'hsl(257, 27%, 26%)',
        'shortly-secondary-red': 'hsl(0, 87%, 67%)',
        'shortly-neutral-gray': 'hsl(0, 0%, 75%)',
        'shortly-neutral-gray-violet': 'hsl(257, 7%, 63%)',
        'shortly-neutral-blue': 'hsl(255, 11%, 22%)',
        'shortly-neutral-dark-violet': 'hsl(260, 8%, 14%)'
      },
      transitionTimingFunction: {
        'ease-form-input': 'cubic-bezier(0, 1.25, 0, 1.17)'
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
        'spg-card': '0px 0px 20px rgba(0, 0, 0, 0.2)',
        'price-card': '0px 0px 10px hsl(234, 14%, 74%)'
      }
    },
  },
  variants: {},
  plugins: []
}
