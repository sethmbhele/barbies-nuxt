<template>
  <div class="single single-accomodation has-additional-menu-content">
    <PageHero 
      :images="room.gallery.slice(0, 2).map(item => item.image)"
      :expand-duration="800"
    />

    <div class="content-wrap clearfix">
      <div class="entry entry-page">
        <div class="entry-content">
          <div class="grid-container">
            <div class="grid-column no-animation">
              <article class="entry-accomodation">
                <header class="entry-header">
                  <h2 class="entry-title">{{ room.title }}</h2>
                  <ul>
                    <li v-for="feature in room.features" :key="feature">{{ feature }}</li>
                  </ul>
                  <div class="accomodation-price">
                    <span class="currency">$</span>
                    <span class="price">{{ room.price }}</span>
                    <span class="price-per"> / night</span>
                  </div>
                  <form class="form-booking-button" @submit.prevent="handleBooking">
                    <button type="submit" class="button-color">Book Now</button>
                    <div class="share-widget-container">
                      <button type="button" class="button" @click="isShareOpen = !isShareOpen">
                        <span class="mdi mdi-share-variant"></span>
                      </button>
                      <div v-if="isShareOpen" class="share-widget">
                        <a :href="shareLinks.facebook" target="_blank" title="Share via Facebook">
                          <span class="mdi mdi-facebook"></span>
                          <span class="screen-reader-text">Facebook</span>
                        </a>
                        <a :href="shareLinks.twitter" target="_blank" title="Share via Twitter">
                          <span class="mdi mdi-twitter"></span>
                          <span class="screen-reader-text">Twitter</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </header>
              </article>
            </div>
            <div class="grid-column">
              <div v-html="room.description"></div>
            </div>
          </div>

          <Gallery :items="room.gallery" />
        </div>
      </div>

      <div class="entry-copyright">
        <p>&copy; {{ new Date().getFullYear() }} <NuxtLink to="/">LeLuxe Hotel</NuxtLink>. All Rights Reserved. <NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
      </div>
    </div>

    <div class="additional-menu-content">
      <h5>More goodness:</h5>
      <ul>
        <li><NuxtLink to="/blog">Blog Entries</NuxtLink></li>
        <li><NuxtLink to="/dining">Visit Our Restaurant</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const route = useRoute()
const router = useRouter()
const isShareOpen = ref(false)

interface GalleryItem {
  image: string
  caption?: string
}

interface Room {
  title: string
  slug: string
  features: string[]
  price: number
  description: string
  gallery: GalleryItem[]
}

// In a real application, this would come from an API or database
const rooms: Record<string, Room> = {
  'single': {
    title: 'Single Room',
    slug: 'single',
    features: [
      'Max. 1 person',
      'Free cancellation',
      'Breakfast included',
      'Free WiFi'
    ],
    price: 89,
    description: `
      <p>Our cozy single rooms are perfect for solo travelers, designed by renowned creatives such as <a href="#">Anna Krikov</a> and <a href="#">Kun Grigorshon</a>.</p>
      <p>With approximately 25m<sup>2</sup> of space, guests at <em>LeLuxe Hotel</em> are welcomed by a harmonious blend of colors and carefully selected furniture. Experience a truly rejuvenating stay in the heart of the famous artistic district.</p>
      <p>Planning your stay at LeLuxe? Browse through our packages and specials to find the perfect option for you.</p>
    `,
    gallery: [
      { image: '/tmp/sample-accomodation5.jpg', caption: 'Comfortable beds with unique color palette' },
      { image: '/tmp/sample-accomodation6.jpg', caption: 'Where retro meets modern' },
      { image: '/tmp/sample-about.jpg', caption: 'Accents here and there, for reinforcing the brand' },
      { image: '/tmp/sample-sidebar.jpg', caption: 'Open spaces with lots of natural light' }
    ]
  },
  'double': {
    title: 'Double Room',
    slug: 'double',
    features: [
      'Max. 2 persons',
      'Free cancellation',
      'Breakfast included',
      'City view'
    ],
    price: 129,
    description: `
      <p>Our elegant double rooms offer the perfect blend of comfort and style, designed for couples or business travelers seeking extra space.</p>
      <p>With approximately 35m<sup>2</sup> of thoughtfully designed space, these rooms feature stunning city views and premium amenities.</p>
      <p>Make your stay even more special by exploring our curated packages and seasonal offers.</p>
    `,
    gallery: [
      { image: '/tmp/sample-accomodation5.jpg', caption: 'Luxurious king-size bed' },
      { image: '/tmp/sample-accomodation6.jpg', caption: 'Modern amenities throughout' },
      { image: '/tmp/sample-about.jpg', caption: 'Elegant bathroom fixtures' },
      { image: '/tmp/sample-sidebar.jpg', caption: 'Breathtaking city views' }
    ]
  }
}

const room = computed(() => {
  const roomData = rooms[route.params.slug as string]
  if (!roomData) {
    throw createError({ statusCode: 404, message: 'Room not found' })
  }
  return roomData
})

const shareLinks = computed(() => {
  const url = window?.location.href ?? ''
  const title = `Check out the ${room.value.title} at LeLuxe Hotel`
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
  }
})

const handleBooking = () => {
  router.push({
    path: '/',
    hash: '#booking',
    query: { room: room.value.slug }
  })
}

useHead({
  title: `${room.value.title} — LeLuxe`,
  meta: [
    {
      name: 'description',
      content: `Experience luxury in our ${room.value.title.toLowerCase()}. Features include ${room.value.features.join(', ')}. Book your stay today.`
    }
  ]
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.entry-title {
  margin: 0 0 1rem;
  font-size: 2rem;
}

.entry-header ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.entry-header li {
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}

.accomodation-price {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.form-booking-button {
  display: flex;
  gap: 1rem;
}

.button-color {
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.button {
  padding: 0.75rem;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  color: var(--text-color);
}

.share-widget-container {
  position: relative;
}

.share-widget {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.share-widget a {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem;
}

.share-widget a:hover {
  color: var(--primary-color);
}

.grid-column :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
}

.grid-column :deep(a:hover) {
  text-decoration: underline;
}
</style>
