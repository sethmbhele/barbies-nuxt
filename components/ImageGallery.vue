<template>
  <div class="image-gallery">
    <div class="gallery-grid">
      <div class="main-image">
        <img :src="images[0].src" :alt="images[0].alt" @click="openGallery(0)">
      </div>
      <div class="secondary-images">
        <div v-for="(image, index) in images.slice(1, 5)" :key="index" class="secondary-image" @click="openGallery(index + 1)">
          <img :src="image.src" :alt="image.alt">
          <div v-if="index === 3 && images.length > 5" class="more-photos">
            <span class="mdi mdi-grid"></span>
            <span>Show all photos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Image {
  src: string
  alt: string
}

defineProps<{
  images: Image[]
}>()

const emit = defineEmits(['openGallery'])

const openGallery = (index: number) => {
  emit('openGallery', index)
}
</script>

<style scoped>
.image-gallery {
  width: 100%;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border-radius: 12px;
  overflow: hidden;
  height: 60vh;
  min-height: 400px;
}

.main-image {
  grid-row: 1 / span 2;
  height: 100%;
}

.secondary-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.main-image img,
.secondary-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.main-image img:hover,
.secondary-image img:hover {
  transform: scale(1.02);
}

.secondary-image {
  position: relative;
  height: 100%;
}

.more-photos {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.more-photos .mdi {
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    height: auto;
  }

  .main-image {
    height: 300px;
  }

  .secondary-images {
    display: none;
  }
}
</style>
