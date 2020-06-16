var webpack = require('webpack')
var path = require('path')
export default {
  mode: 'universal',
  env: {
    baseURL: 'https://'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.jpg'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/node_modules/froala-editor/css/froala_editor.pkgd.min.css',
    '~/node_modules/froala-editor/css/froala_style.min.css',
    {
      src: '~/plugins/axios.js'
    },
    {
      src: '~/assets/sass/main.scss',
      lang: 'sass'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
    src: '~/plugins/froala.js',
    mode: 'client'
    },
    {
      src: '~/plugins/v-mask.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-slick.js'
    },
    {
      src: '~/plugins/axios.js'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: 'http://'
  },
  /*
   ** tailwindcss setup
   **
   */

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false
  },
  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
