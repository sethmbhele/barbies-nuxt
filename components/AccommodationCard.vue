<template>
  <article class="entry entry-accommodation">
    <div class="entry-media">
      <NuxtLink :to="`/accommodations/${accommodation.slug}`">
        <img :src="accommodation.image" :alt="accommodation.title">
        <span class="mdi mdi-eye"></span>
      </NuxtLink>
    </div>
    <div class="entry-content">
      <h2 class="entry-title">
        <NuxtLink :to="`/accommodations/${accommodation.slug}`">{{ accommodation.title }}</NuxtLink>
      </h2>
      <div class="entry-summary">
        <p>{{ accommodation.description }}</p>
      </div>
      <div class="entry-meta">
        <ul class="accommodation-features">
          <li v-for="(feature, index) in accommodation.features" :key="index">
            <span :class="'mdi ' + feature.icon"></span>
            {{ feature.text }}
          </li>
        </ul>
      </div>
      <div class="entry-more">
        <NuxtLink :to="`/accommodations/${accommodation.slug}`" class="button">View Details</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Feature {
  icon: string
  text: string
}

interface Accommodation {
  title: string
  slug: string
  description: string
  image: string
  features: Feature[]
}

defineProps<{
  accommodation: Accommodation
}>()
</script>
