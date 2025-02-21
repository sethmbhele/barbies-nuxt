<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from '#imports'

onMounted(() => {
  // Add necessary body classes
  document.body.classList.add('has-booking', 'has-additional-menu-content')
})
</script>

<style>
/* Global styles */
html, body {
  margin: 0;
  padding: 0;
}
</style>
