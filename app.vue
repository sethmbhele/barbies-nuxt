<script setup lang="ts">
import { onMounted } from '#imports'

onMounted(() => {
  // Add necessary body classes
  document.body.classList.add('has-booking', 'has-additional-menu-content')
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
</style>
