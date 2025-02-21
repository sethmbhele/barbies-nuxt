<template>
  <div class="has-additional-menu-content full-content">
    <PageHero 
      title="Our Accommodations"
      subtitle="Experience luxury and comfort"
      image="/images/shared/hero2.jpg"
    />

    <div class="content-wrap">
      <div class="entry entry-page">
        <div class="entry-content">
          <div class="accomodation-listing">
            <AccommodationCard
              v-for="room in rooms"
              :key="room.slug"
              v-bind="room"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="additional-menu-content">
      <h5>More goodness:</h5>
      <ul>
        <li><NuxtLink to="/dining">View Our Restaurant</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Room {
  title: string
  slug: string
  description: string
  features: string[]
  price: string
  image: string
}

const rooms: Room[] = [
  {
    title: 'Single Room',
    slug: 'single',
    description: 'Perfect for solo travelers, our single rooms offer comfort and convenience with all essential amenities for a pleasant stay.',
    features: [
      'Max. 1 person',
      'Free cancellation',
      'Breakfast included',
      'Free WiFi'
    ],
    price: '$89/night',
    image: '/images/accommodations/sample-accomodation.jpg'
  },
  {
    title: 'Double Room',
    slug: 'double',
    description: 'Spacious and elegant, our double rooms are ideal for couples or business travelers seeking extra comfort and space.',
    features: [
      'Max. 2 persons',
      'Free cancellation',
      'Breakfast included',
      'City view'
    ],
    price: '$129/night',
    image: '/images/accommodations/sample-accomodation5.jpg'
  },
  {
    title: 'Deluxe Suite',
    slug: 'deluxe-suite',
    description: 'Experience luxury in our deluxe suites, featuring separate living areas and premium amenities for an unforgettable stay.',
    features: [
      'Max. 4 persons',
      'Free cancellation',
      'Breakfast included',
      'Ocean view'
    ],
    price: '$249/night',
    image: '/images/accommodations/sample-accomodation6.jpg'
  }
]

useHead({
  title: 'Accommodations — LeLuxe',
  meta: [
    {
      name: 'description',
      content: 'Discover our range of luxurious rooms and suites at LeLuxe. From cozy single rooms to spacious deluxe suites, find your perfect stay.'
    }
  ]
})
</script>

<style scoped>
.accomodation-listing {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}
</style>
