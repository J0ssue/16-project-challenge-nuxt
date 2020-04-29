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
        'shortly-primary-cyan-hover': 'hsl(180, 66%, 73%)',
        'shortly-primary-violet': 'hsl(257, 27%, 26%)',
        'shortly-secondary-red': 'hsl(0, 87%, 67%)',
        'shortly-neutral-gray': 'hsl(0, 0%, 75%)',
        'shortly-neutral-gray-violet': 'hsl(257, 7%, 63%)',
        'shortly-neutral-blue': 'hsl(255, 11%, 22%)',
        'shortly-neutral-dark-violet': 'hsl(260, 8%, 14%)',
        'jobs-cyan': 'hsl(180, 29%, 50%)',
        'jobs-gray-cyan-one': 'hsl(180, 52%, 96%)',
        'jobs-gray-cyan-two': 'hsl(180, 31%, 95%)',
        'jobs-dark-cyan-one': 'hsl(180, 8%, 52%)',
        'jobs-dark-cyan-two': 'hsl(180, 14%, 20%)',
        'countries-Blue-dark-mode-elements': 'hsl(209, 23%, 22%)',
        'countries-dark-mode-blue-bg': 'hsl(207, 26%, 17%)',
        'countries-dark-blue-light-mode-text': 'hsl(200, 15%, 8%)',
        'dark-gray-light-mode-input': 'hsl(0, 0%, 52%)',
        'very-light-gray-light-mode-background': 'hsl(0, 0%, 98%)',
        'white-dark-mode-text-light-mode-elements': 'hsl(0, 0%, 100%)',
        'bank-dark-blue': 'hsl(233, 26%, 24%)',
        'bank-lime-green': 'hsl(136, 65%, 51%)',
        'bank-bright-cyan': 'hsl(192, 70%, 51%)',
        'bank-grayish-blue': 'hsl(233, 8%, 62%)',
        'bank-light-grayish-blue': 'hsl(220, 16%, 96%)',
        'bank-very-light-gray': 'hsl(0, 0%, 98%)',
        'bank-white': 'hsl(0, 0%, 100%)',
        'myteam-midnight-green': '#014e56',
        'myteam-light-coral': '#f67e7e',
        'myteam-rapture-blue': '#79c8c7',
        'myteam-police-blue': '#2c6269',
        'myteam-deep-jungle-green': '#004047',
        'myteam-sacramento-state-green': '#012f34',
        'myteam-dark-green': '#002529',
        'manage-bright-red': 'hsl(12, 88%, 59%)',
        'manage-dark-blue': 'hsl(228, 39%, 23%)',
        'manage-dark-grayish-blue': 'hsl(227, 12%, 61%)',
        'manage-darker-blue': 'hsl(233, 12%, 13%)',
        'manage-pale-red': 'hsl(13, 100%, 96%)',
        'manage-gray': 'hsl(0, 0%, 98%)',
        'bookmark-soft-blue': 'hsl(231, 69%, 60%)',
        'bookmark-soft-Red': 'hsl(0, 94%, 66%)',
        'bookmark-grayish-blue': 'hsl(229, 8%, 60%)',
        'bookmark-dark-blue': 'hsl(229, 31%, 21%)'
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
        'spg-card-width': '545px',
        'dropdown-width': '200px'
      },
      padding: {
        'aspect-ratio': '56.25%'
      },
      height: {
        'bar': '4px'
      },
      boxShadow: {
        'spg-card': '0px 0px 20px rgba(0, 0, 0, 0.2)',
        'price-card': '0px 0px 10px hsl(234, 14%, 74%)',
        'dropdown': '0px 0px 10px rgba(0, 0, 0, 0.2)',
        'manage-button-secondary': '0px 0px 10px rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        'livvic': ['livvic', 'livvic-semibold', 'livvic-semibold-italic', 'livvic-thin', 'livvic-thin-italic', 'livvic-medium', 'livvic-medium-italic', 'livvic-light', 'livvic-light-italic', 'livvic-italic', 'livvic-extra-light', 'livvic-extra-light-italic', 'livvic-bold', 'livvic-bold-italic', 'livvic-black', 'livvic-black-italic']
      },
      spacing: {
        'plus-icon': '56px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '98': '26rem',
        '100': '28rem',
      }
    },
  },
  variants: {},
  plugins: []
}
