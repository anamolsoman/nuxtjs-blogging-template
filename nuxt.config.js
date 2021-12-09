const path = require('path')
import guides from './contents/guides/guides.js'
import colors from 'vuetify/es5/util/colors'
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      // Snipcart styling
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/disqus', '~/plugins/prism'],
  /*
   ** Nuxt.js dev-modules
   */

  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'EcRKuVgJHEd9E4H3n2efLAtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
   ** Build configuration
   */
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#41B883',
          secondary: '#34495E',
          accent: colors.undefined,
          error: '#D32F2F',
          warning: colors.undefined,
          info: colors.undefined,
          success: colors.undefined
        },
        dark: {
          primary: colors.green.base,
          accent: colors.grey.darken3,
          secondary: colors.lightGreen.base,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents')
      })
    }
  },
  /*
   ** Overwrite's generated manifest values
   */

  manifest: {
    name: 'Nuxt.js PWA survival store',
    short_name: 'Nuxt.js PWA',
    lang: 'en',
    display: 'standalone'
  },
  /*
   ** Generate dynamic routes
   */
  generate: {
    fallback: true,
    routes: [].concat(guides.map((guide) => `guides/${guide}`))
  },
  /*
   ** Handle external assets
   */
  workbox: {
    runtimeCaching: []
  },
  /*
   ** Allow dev tools in production
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  server: {
    port: 1551, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
