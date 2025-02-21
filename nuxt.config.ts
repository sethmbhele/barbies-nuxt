// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/assets/css/bootstrap-reboot.css',
    '@/assets/css/materialdesignicons.css',
    '@/assets/css/fancybox.css',
    'owl.carousel/dist/assets/owl.carousel.css',
    '@/assets/css/style.css',
    '@/assets/css/style-animations.css',
    '@/assets/css/style-custom.css'
  ],

  plugins: [
    { src: '~/plugins/jquery.client.ts', mode: 'client' }
  ],

  app: {
    head: {
      title: 'LeLuxe',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'description', content: 'LeLuxe is fully responsive creative HTML site template that looks great on any device.' },
        { name: 'keywords', content: 'Castilo, HTML, Template, Design, Development' }
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,600%7CEczar:600' }
      ]
    }
  },

  modules: ['@nuxt/image']
})