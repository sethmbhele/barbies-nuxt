import jQuery from 'jquery'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    window.$ = window.jQuery = jQuery
  }
})
