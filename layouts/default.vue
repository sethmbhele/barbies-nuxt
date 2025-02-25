<template>
  <div :class="wrapperClasses">
    <TopHeader />

    <slot />

    <BookingForm v-if="showBooking" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopHeader from '~/components/TopHeader.vue'

const route = useRoute()

// Pages that should show booking component
const pagesWithBooking = ['/', '/about', '/accommodations']

const showBooking = computed(() => {
  return pagesWithBooking.includes(route.path)
})

const wrapperClasses = computed(() => {
  const isHome = route.path === '/'
  return {
    'app-wrapper': true,
    'home': isHome,
    'fullpage': isHome,
    'has-booking': showBooking.value,
    'has-additional-menu-content': true
  }
})
</script>
