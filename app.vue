<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Add necessary body classes
  document.body.classList.add('has-booking', 'has-additional-menu-content')
})
</script>

<style>
/* Global styles */
body {
  background-color: #f2f2f2;
}

/* Ensure the app takes full height */
html, body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}
</style>
