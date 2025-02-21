import jQuery from 'jquery'
import 'owl.carousel'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    // Initialize jQuery
    window.$ = window.jQuery = jQuery

    // Wait for jQuery to be fully initialized
    await new Promise(resolve => setTimeout(resolve, 0))

    // Initialize Owl Carousel
    const owlCarousel = require('owl.carousel')
    jQuery.fn.owlCarousel = owlCarousel

    console.log('jQuery initialized:', !!window.jQuery)
    console.log('Owl Carousel initialized:', !!(jQuery as any).fn.owlCarousel)
  }
})
