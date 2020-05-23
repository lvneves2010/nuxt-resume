
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Professional Web Development',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'application developer resume sites profissionais aplicativos desenvolvedor JavaScript Angular VueJS SEO NodeJS programação cloud programador web' }
    ],
    script: [
      { src: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/cv_102350.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/touch-icon-iphone.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/touch-icon-ipad.png' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/node_modules/carbon-components/css/carbon-components.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/carbon"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
