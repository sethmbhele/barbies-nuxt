<template>
  <section class="page-hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="text">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
    <span class="overlay"></span>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  image: string
}>()
</script>
