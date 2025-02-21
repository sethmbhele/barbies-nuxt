<template>
  <div class="home fullpage has-booking has-additional-menu-content">
    <HeroSection :slides="heroSlides" />
    
    <div class="additional-menu-content">
      <div class="content">
        <h2>Welcome to Barbie's</h2>
        <p>Experience luxury and comfort in the heart of the city. Our boutique hotel offers exceptional service, elegant accommodations, and world-class dining.</p>
        <NuxtLink to="/about" class="button">Learn More</NuxtLink>
      </div>
    </div>

    <BookingForm @submit="handleBooking" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'

const heroSlides = [
  {
    image: '/images/hero/hero-1.jpg',
    title: "Barbie's Beach House - Your Perfect Getaway",
    lightColors: false
  },
  {
    image: '/images/hero/hero-2.jpg',
    title: 'Experience Comfort and Luxury',
    lightColors: true
  },
  {
    image: '/images/hero/hero-3.jpg',
    title: 'Stunning Ocean Views',
    lightColors: false
  }
]

const handleBooking = (formData: any) => {
  console.log('Booking form submitted:', formData)
  // Handle booking logic here
}

useHead({
  title: "Barbie's Beach House - Pringle Bay",
  meta: [
    {
      name: 'description',
      content: 'Experience luxury at its finest at LeLuxe Hotel. Our panoramic views and world-class amenities ensure an unforgettable stay.'
    }
  ]
})
</script>
