export default {
  ssr: false,
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NFT |',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NFT' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // router: {
  //   base: '/personal-portfolio/'
  // },
  env: {
    API_URL: process.env.NUXT_ENV_API_URL || 'http://localhost:8081',
    PINATA_KEY: process.env.NUXT_ENV_PINATA_KEY || '',
    PINATA_SECRET: process.env.NUXT_ENV_PINATA_SECRET || '',
    CT_ADDRESS: process.env.NUXT_ENV_CT_ADDRESS || '',
    ALCHEMY_KEY: process.env.NUXT_ENV_ALCHEMY_KEY || ''
  },
  // loading: '~/components/BaseLoading.vue',
  loading: {
    color: '#ffa31a'
  },
  server: {
    port: process.env.PORT || 3000
  },
  vuetify: {
    treeShake: true
  }
}
