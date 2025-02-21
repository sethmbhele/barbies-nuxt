<template>
  <div class="menu-category">
    <h2 class="menu-category-title">{{ title }}</h2>
    <div class="menu-items">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
