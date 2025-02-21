<template>
  <section class="hero-media fullpage">
    <div ref="carousel" class="owl-carousel">
      <template v-for="(slide, index) in slides" :key="index">
        <div 
          class="item" 
          :class="{ 'item-video': slide.video, 'light-hero-colors': slide.lightColors }"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
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
    <span class="mdi mdi-spin mdi-loading"></span>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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
let owlInstance: any = null

onMounted(() => {
  if (!carousel.value) return

  const $ = window.jQuery
  if (!$) return

  owlInstance = $(carousel.value).owlCarousel({
    items: 1,
    loop: props.slides.length > 1,
    mouseDrag: props.slides.length > 1,
    touchDrag: props.slides.length > 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    nav: true,
    dots: true,
    navText: [
      '<span class="mdi mdi-chevron-left"></span>',
      '<span class="mdi mdi-chevron-right"></span>'
    ],
    onInitialized: (event: any) => {
      const $stage = $(event.target).find('.owl-stage')
      const stageHeight = $stage.height()
      
      $stage.find('.owl-item').each(function() {
        const $item = $(this)
        const $video = $item.find('video')
        
        if ($video.length) {
          $video.css({
            height: stageHeight,
            width: 'auto'
          })
          
          const videoWidth = $video.width() || 0
          const videoHeight = $video.height() || 0
          const containerWidth = $item.width() || 0
          const scale = containerWidth / videoWidth
          
          if (videoWidth * scale < containerWidth) {
            $video.css({
              width: '100%',
              height: 'auto'
            })
          }
          
          const videoElement = $video.get(0) as HTMLVideoElement
          if (videoElement) {
            videoElement.play()
          }
        }
      })
    },
    onTranslate: (event: any) => {
      const $stage = $(event.target).find('.owl-stage')
      $stage.find('.owl-item video').each(function() {
        const videoElement = this as HTMLVideoElement
        videoElement.pause()
      })
    },
    onTranslated: (event: any) => {
      const $stage = $(event.target).find('.owl-stage')
      $stage.find('.owl-item.active video').each(function() {
        const videoElement = this as HTMLVideoElement
        videoElement.play()
      })
    }
  })
})

onUnmounted(() => {
  if (owlInstance && carousel.value) {
    const $ = window.jQuery
    if (!$) return
    
    $(carousel.value).owlCarousel('destroy')
  }
})
</script>
