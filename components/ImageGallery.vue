<template>
  <div class="image-gallery">
    <div class="gallery-grid">
      <div class="main-image" @click="openGallery(0)">
        <img :src="images[0].src" :alt="images[0].alt">
      </div>
      <div class="secondary-images">
        <div v-for="(image, index) in images.slice(1, 5)" :key="index" class="secondary-image" @click="openGallery(index + 1)">
          <img :src="image.src" :alt="image.alt">
          <div v-if="index === 3 && images.length > 5" class="more-photos">
            <span class="mdi mdi-image-multiple"></span>
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
  height: 550px;
  position: relative;
  margin-bottom: 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  height: 100%;
}

.main-image {
  grid-column: span 2;
  grid-row: span 2;
  position: relative;
  cursor: pointer;
}

.secondary-images {
  grid-column: span 2;
  grid-row: span 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
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
  cursor: pointer;
}

.more-photos {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: white;
  color: #222;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.more-photos:hover {
  transform: translateY(-2px);
}

.more-photos .mdi {
  font-size: 18px;
}

@media (max-width: 768px) {
  .image-gallery {
    height: 300px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .main-image {
    grid-column: span 1;
    grid-row: span 1;
  }

  .secondary-images {
    display: none;
  }
}
</style>
