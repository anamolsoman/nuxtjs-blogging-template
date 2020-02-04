const path = require('path')
import guides from './contents/guides/guides.js'

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

  modules: [],
  /*
   ** Build configuration
   */
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify'
  ],
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
  }
}
