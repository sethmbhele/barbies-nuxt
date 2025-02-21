import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

export default defineNuxtPlugin(() => {
  // Configure Fancybox with the same options as the original
  Fancybox.bind('[data-fancybox]', {
    closeExisting: false,
    loop: false,
    gutter: 50,
    keyboard: true,
    arrows: true,
    infobar: true,
    smallBtn: 'auto',
    toolbar: 'auto',
    buttons: ['zoom', 'thumbs', 'close'],
    idleTime: 3,
    protect: false,
    modal: false,
    image: {
      preload: false
    },
    video: {
      autoStart: true
    }
  })
})
