<template>
  <div class="gallery">
    <PageHero 
      title="Our Gallery" 
      subtitle="Explore our beautiful spaces"
      image="/images/gallery-hero.jpg"
    />

    <div class="content-section">
      <div class="container">
        <div class="entry">
          <div class="entry-content">
            <Gallery :items="galleryItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const galleryItems = [
  {
    image: '/images/gallery/hotel-1.jpg',
    caption: 'Luxurious Hotel Lobby',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/gallery/room-1.jpg',
    caption: 'Deluxe Suite Bedroom',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/gallery/dining-1.jpg',
    caption: 'Fine Dining Restaurant',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/gallery/spa-1.jpg',
    caption: 'Wellness & Spa',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/gallery/pool-1.jpg',
    caption: 'Infinity Pool',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/gallery/bar-1.jpg',
    caption: 'Cocktail Bar',
    gallery: 'hotel-gallery'
  }
]

useHead({
  title: 'Gallery — LeLuxe',
  meta: [
    {
      name: 'description',
      content: 'Explore our hotel through a stunning collection of images and videos. Take a visual journey through our rooms, facilities, and unique architectural details.'
    }
  ]
})
</script>
