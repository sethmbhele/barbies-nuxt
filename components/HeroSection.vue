<template>
  <section class="hero-media fullpage">
    <div ref="carousel" class="owl-carousel owl-theme">
      <template v-for="(slide, index) in slides" :key="index">
        <div 
          class="item" 
          :class="{ 'item-video': slide.video, 'light-hero-colors': slide.lightColors }"
        >
          <img :data-src="slide.image" class="owl-lazy" :alt="slide.title || ''" />
          <template v-if="slide.video">
            <video ref="video" loop muted preload="none">
              <source v-if="slide.video.mp4" type="video/mp4" :src="slide.video.mp4" />
              <source v-if="slide.video.webm" type="video/webm" :src="slide.video.webm" />
            </video>
          </template>
          <div class="text" v-if="slide.title">
            <h2>{{ slide.title }}</h2>
          </div>
        </div>
      </template>
    </div>
    <span class="overlay"></span>
    <span v-show="isLoading" class="mdi mdi-spin mdi-loading"></span>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import type { Ref } from 'vue'

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}

interface VideoSources {
  mp4?: string;
  webm?: string;
}

interface Slide {
  image?: string;
  video?: VideoSources;
  title?: string;
  lightColors?: boolean;
}

const props = defineProps<{
  slides: Slide[]
}>()

const carousel: Ref<HTMLElement | null> = ref(null)
const isLoading = ref(true)
let owlInstance: any = null

onMounted(async () => {
  // Wait for next tick to ensure DOM is ready
  await nextTick()
  
  if (!carousel.value) {
    console.error('Carousel element not found')
    return
  }

  // Ensure jQuery is available
  const $ = window.jQuery
  if (!$) {
    console.error('jQuery not loaded')
    return
  }

  const multiple_items = props.slides.length > 1
  if (!multiple_items) {
    $('.booking-form').addClass('full-width')
  }

  const onTranslate = (event: any) => {
    $(event.target).find('video').each(function() {
      this.pause()
    })
  }

  const onTranslated = (event: any) => {
    $(event.target).find('.owl-item.active video').each(function() {
      this.play()
    })
    if ($(event.target).find('.owl-item.active .light-hero-colors').length > 0) {
      document.body.classList.add('light-hero-colors')
    } else {
      document.body.classList.remove('light-hero-colors')
    }
  }

  try {
    // Initialize owl carousel with exact same options as original
    owlInstance = $(carousel.value).owlCarousel({
      items: 1,
      loop: multiple_items,
      mouseDrag: multiple_items,
      touchDrag: multiple_items,
      nav: true,
      navElement: 'a href="#"',
      navText: ['<span class="mdi mdi-arrow-left"></span>', '<span class="mdi mdi-arrow-right"></span>'],
      dots: false,
      lazyLoad: true,
      lazyLoadEager: 1,
      video: true,
      responsiveRefreshRate: 0,
      onTranslate,
      onTranslated,
      onLoadedLazy: (event: any) => {
        onTranslated(event)
        // Hide loading spinner when first image is loaded
        isLoading.value = false
      },
      onInitialized: (event: any) => {
        if (multiple_items) {
          document.body.classList.add('hero-has-nav')
        }
        
        // Add expand button
        const $expandButton = $('<div class="owl-expand"><a href="#"><span class="mdi"></span></a></div>')
        $expandButton.insertAfter($(event.target).find('.owl-nav')).on('click.leluxe', function(e) {
          e.preventDefault()
          if (document.body.classList.contains('expanded-hero-start')) {
            return
          }
          document.body.classList.add('expanded-hero')
        })
      }
    })
  } catch (error) {
    console.error('Error initializing Owl Carousel:', error)
    isLoading.value = false
  }
})

onUnmounted(() => {
  if (owlInstance && carousel.value) {
    const $ = window.jQuery
    if ($) {
      $(carousel.value).trigger('destroy.owl.carousel')
      owlInstance = null
    }
  }
})
</script>
