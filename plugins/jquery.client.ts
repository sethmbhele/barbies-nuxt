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
  enforce: 'pre',
  async setup (nuxtApp) {
    // Load jQuery from local file
    const jqueryScript = document.createElement('script')
    jqueryScript.src = '/assets/js/jquery-3.3.1.min.js'
    document.head.appendChild(jqueryScript)

    // Wait for jQuery to load
    await new Promise<void>((resolve) => {
      jqueryScript.onload = () => resolve()
    })

    // Load Owl Carousel from local file
    const owlScript = document.createElement('script')
    owlScript.src = '/assets/js/owl-carousel.min.js'
    document.head.appendChild(owlScript)

    // Wait for Owl Carousel to load
    await new Promise<void>((resolve) => {
      owlScript.onload = () => resolve()
    })

    // Provide jQuery globally
    return {
      provide: {
        jquery: window.jQuery
      }
    }
  }
})
