export default defineNuxtPlugin(() => {
  // Add body classes on client-side only
  if (process.client) {
    document.body.classList.add('has-booking', 'has-additional-menu-content')
  }
})
