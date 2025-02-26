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
  margin-bottom: 0;
  position: relative;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
  height: 80vh;
  min-height: 500px;
  max-height: 700px;
}

.main-image {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.secondary-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
}

.main-image img,
.secondary-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.main-image:hover img,
.secondary-image:hover img {
  transform: scale(1.05);
}

.secondary-image {
  position: relative;
  overflow: hidden;
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
  transition: transform 0.2s ease;
}

.more-photos:hover {
  transform: translateY(-2px);
}

.more-photos .mdi {
  font-size: 1.2em;
}

@media (max-width: 1024px) {
  .gallery-grid {
    height: 60vh;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 300px;
  }

  .main-image {
    height: 300px;
  }

  .secondary-images {
    display: none;
  }
}
</style>
