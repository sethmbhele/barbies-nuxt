// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/assets/css/bootstrap-reboot.css',
    '@/assets/css/materialdesignicons.css',
    '@/assets/css/fancybox.css',
    '@/assets/css/style.css',
    '@/assets/css/style-animations.css',
    '@/assets/css/style-custom.css'
  ],

  plugins: [
    { src: '@/plugins/jquery.client.ts', mode: 'client' }
  ],

  app: {
    head: {
      title: 'Barbie\'s Beach House - Pringle Bay',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'description', content: 'Barbie\'s Beach House - Your perfect coastal escape in Pringle Bay. Luxury accommodation with stunning ocean views.' },
        { name: 'keywords', content: 'Barbies Beach House, Pringle Bay, Accommodation, Beach House, Luxury Stay, Cape Town' }
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,600%7CEczar:600' }
      ]
    }
  },

  modules: ['@nuxt/image']
})