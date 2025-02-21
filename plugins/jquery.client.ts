import jQuery from 'jquery'
import 'owl.carousel'

// Extend window with jQuery types
declare global {
  interface Window {
    $: typeof jQuery;
    jQuery: typeof jQuery;
  }
}

export default defineNuxtPlugin({
  name: 'jquery',
  enforce: 'pre', // This ensures our plugin runs before others
  async setup (nuxtApp) {
    // Initialize jQuery
    window.$ = window.jQuery = jQuery

    // Ensure jQuery is loaded before continuing
    await new Promise<void>((resolve) => {
      if (window.jQuery) {
        resolve()
      } else {
        const checkJquery = setInterval(() => {
          if (window.jQuery) {
            clearInterval(checkJquery)
            resolve()
          }
        }, 50)
      }
    })

    // Return jQuery instance for use in other plugins/components
    return {
      provide: {
        jquery: window.jQuery
      }
    }
  }
})
