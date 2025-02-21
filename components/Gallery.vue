<template>
  <div class="gallery-grid-container">
    <div v-for="(item, index) in items" :key="index" class="gallery-item">
      <a 
        :href="item.image" 
        :data-fancybox="item.gallery || 'gallery'" 
        :data-caption="item.caption"
      >
        <img :src="item.image" :alt="item.caption">
        <span class="mdi mdi-eye"></span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface GalleryItem {
  image: string
  caption?: string
  gallery?: string
}

defineProps<{
  items: GalleryItem[]
}>()
</script>

<style>
.gallery-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-item {
  margin: 0;
  position: relative;
}

.gallery-item a {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.gallery-item a::after {
  content: '\F2D0';
  font-family: 'Material Design Icons';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item a:hover::after {
  opacity: 1;
}

.gallery-item a:hover img {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s;
}

.gallery-item figcaption {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  text-align: center;
}
</style>
