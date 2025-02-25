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
import HeroSection from '~/components/HeroSection.vue'
import BookingForm from '~/components/BookingForm.vue'

interface HeroSlide {
  image: string
  title: string
  lightColors: boolean
  video?: {
    mp4?: string
    webm?: string
    poster?: string
  }
}

const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/hero-1.jpg',
    title: 'Welcome to Your Coastal Escape at Barbie\'s Beach House',
    lightColors: false
  },
  {
    image: '/images/hero/hero-2.jpg',
    title: 'A Family-Friendly Retreat Awaits You',
    lightColors: true
  },
  {
    image: '/images/hero/hero-3.jpg',
    title: 'Gather Around the open plan living area for Lasting Memories',
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
      content: 'Welcome to Barbies Beach House - Your perfect getaway destination in Pringle Bay.'
    }
  ]
})
</script>
