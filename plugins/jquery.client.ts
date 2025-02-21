import jQuery from 'jquery'
import 'owl.carousel'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.$ = window.jQuery = jQuery
    console.log('jQuery initialized:', !!window.jQuery)
    console.log('Owl Carousel initialized:', !!(jQuery as any).fn.owlCarousel)
  }
})
