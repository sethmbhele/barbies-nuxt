<template>
  <div :class="wrapperClasses">
    <header id="identity">
      <div class="logo">
        <h1>
          <NuxtLink to="/" class="custom-logo-link" rel="home">
            <img src="/images/shared/logo.png" class="custom-logo" width="200" alt="Barbie's Beach House">
          </NuxtLink>
        </h1>
      </div>
    </header>

    <div id="site-menu">
      <nav class="nav-menu">
        <ul>
          <li class="menu-item"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/accommodations">Living</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/dining">Dining</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <div id="social-profiles">
      <nav class="social-menu">
        <ul>
          <li><a href="http://facebook.com" target="_blank"><span class="mdi mdi-facebook-box"></span></a></li>
          <li><a href="http://twitter.com" target="_blank"><span class="mdi mdi-twitter-box"></span></a></li>
          <li><a href="http://instagram.com" target="_blank"><span class="mdi mdi-instagram"></span></a></li>
        </ul>
      </nav>
    </div>

    <slot />

    <BookingForm v-if="showBooking" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

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
