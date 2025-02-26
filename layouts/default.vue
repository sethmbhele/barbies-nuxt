<template>
  <div :class="wrapperClasses">
    <TopHeader />
    <SocialIcons />
    <slot />

    <BookingForm v-if="showBooking" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TopHeader from '~/components/TopHeader.vue'
import SocialIcons from '~/components/SocialIcons.vue'

const route = useRoute()

// Pages that should show booking component
const pagesWithBooking = ['/', '/about', '/accommodations', '/the-house', '/pringle-bay', '/faqs']

const showBooking = computed(() => {
  console.log('Current route path:', route.path)
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

<style>
.app-wrapper {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.app-wrapper.home {
  padding-top: 0;
}

.app-wrapper.has-booking {
  padding-bottom: 80px;
}

@media (max-width: 768px) {
  .app-wrapper {
    padding-top: 80px;
  }
}
</style>
