<template>
  <div class="gallery">
    <PageHero 
      title="Our Gallery" 
      subtitle="Explore our beautiful spaces"
      image="/images/shared/hero2.jpg"
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
    image: '/images/about/gallery/sample-gallery1.jpg',
    caption: 'Luxurious Hotel Lobby',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/about/gallery/sample-gallery2.jpg',
    caption: 'Deluxe Suite Bedroom',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/accommodations/sample-accomodation.jpg',
    caption: 'Fine Dining Restaurant',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/accommodations/sample-accomodation5.jpg',
    caption: 'Wellness & Spa',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/accommodations/sample-accomodation6.jpg',
    caption: 'Infinity Pool',
    gallery: 'hotel-gallery'
  },
  {
    image: '/images/dining/dining.jpg',
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
