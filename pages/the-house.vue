<template>
  <div class="house-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="/images/shared/hero2.jpg" alt="Beach House Exterior" class="hero-image">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>A Family-Friendly Retreat Awaits You</h1>
            <p class="subtitle">Your sanctuary where laughter echoes through the garden and adventures await just beyond your doorstep.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="content-container">
      <!-- Quick Info Section -->
      <div class="quick-info">
        <div class="info-item">
          <span class="mdi mdi-account-group"></span>
          <span>Sleeps up to 10 adults, 6 children</span>
        </div>
        <div class="info-item">
          <span class="mdi mdi-bed"></span>
          <span>5 Bedrooms + Bunk House</span>
        </div>
        <div class="info-item">
          <span class="mdi mdi-shower"></span>
          <span>3 Bathrooms</span>
        </div>
      </div>

      <div class="features-sections">
        <section class="feature-section">
          <div class="feature-content">
            <span class="mdi mdi-bed feature-icon"></span>
            <h3>The Courtyard Bedrooms</h3>
            <p>Unwind on the wraparound balcony, in a lush courtyard directly off your bedrooms with vibrant blooms.</p>
            <ul>
              <li>Double Bed opens up onto courtyard</li>
              <li>Queen Bed opens onto court yard and living area</li>
              <li>Shared bathroom</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Courtyard Bedroom">
          </div>
        </section>

        <section class="feature-section reverse">
          <div class="feature-content">
            <span class="mdi mdi-water feature-icon"></span>
            <h3>The River View Bedroom</h3>
            <p>Cozy ensuite bedroom with direct access to the bunk house - perfect for families.</p>
            <ul>
              <li>Queen size Bed</li>
              <li>Ensuite Bathroom</li>
              <li>Private access to bunk house</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="River View Bedroom">
          </div>
        </section>

        <section class="feature-section">
          <div class="feature-content">
            <span class="mdi mdi-stairs feature-icon"></span>
            <h3>Upstairs Haven</h3>
            <p>Two spacious bedrooms with a charming children's nook, perfect for the whole family.</p>
            <ul>
              <li>Two Queen Bedrooms</li>
              <li>Children's Nook with Double Bunk bed</li>
              <li>Cot available for infants</li>
              <li>Shared full bathroom</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Upstairs Bedrooms">
          </div>
        </section>

        <section class="feature-section reverse">
          <div class="feature-content">
            <span class="mdi mdi-home feature-icon"></span>
            <h3>The Bunk House</h3>
            <p>A kids' paradise with games and entertainment.</p>
            <ul>
              <li>Two Bunk Beds (Sleeps 4)</li>
              <li>Sleeper Couch</li>
              <li>Smart TV</li>
              <li>Multi-game Table Set</li>
              <li>Beach Toy Collection</li>
              <li>Outdoor bathroom with shower</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Bunk House">
          </div>
        </section>

        <section class="feature-section">
          <div class="feature-content">
            <span class="mdi mdi-silverware-fork-knife feature-icon"></span>
            <h3>Chef's Kitchen</h3>
            <p>A fully equipped kitchen ready for your culinary adventures.</p>
            <ul>
              <li>Gas stove and electric oven</li>
              <li>Large fridge/freezer</li>
              <li>Dishwasher</li>
              <li>Coffee machine</li>
              <li>Complete cookware and utensils</li>
              <li>Outdoor braai facilities</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Kitchen">
          </div>
        </section>

        <section class="feature-section reverse">
          <div class="feature-content">
            <span class="mdi mdi-sofa feature-icon"></span>
            <h3>Living Spaces</h3>
            <p>Multiple areas for relaxation and entertainment.</p>
            <ul>
              <li>Spacious living room with Smart TV</li>
              <li>Indoor fireplace</li>
              <li>Dining area seating 12</li>
              <li>Outdoor dining area</li>
              <li>Multiple lounging spaces</li>
              <li>Garden with play area</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Living Room">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import ImageGallery from '~/components/ImageGallery.vue'

// Gallery images
const galleryImages = [
  { src: '/images/shared/hero2.jpg', alt: 'Beach House Exterior' },
  { src: '/images/house/kitchen.jpg', alt: 'Modern Kitchen' },
  { src: '/images/house/living.jpg', alt: 'Living Area' },
  { src: '/images/house/bedroom.jpg', alt: 'Master Bedroom' },
  { src: '/images/house/bunkhouse.jpg', alt: 'Bunk House' }
]

const openGallery = (index: number) => {
  // TODO: Implement full-screen gallery view
  console.log('Opening gallery at index:', index)
}

// Set page metadata
useHead({
  title: "The House - Barbie's Beach House Pringle Bay",
  meta: [
    {
      name: 'description',
      content: "Discover our spacious 5-bedroom beach house with bunk house, perfect for families and groups. Modern amenities, chef's kitchen, and entertainment areas."
    }
  ]
})
</script>

<style scoped>
.house-page {
  width: 100%;
}

/* Hero Section */
.hero-section {
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
}

.hero-background {
  width: 100%;
  height: 100%;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-content .subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
}

/* Content Container */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
}

/* Quick Info Section */
.quick-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #666;
}

.info-item .mdi {
  font-size: 1.5rem;
  color: #A97C50;
}

/* Features Section */
.features-sections {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.feature-section {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.feature-section.reverse {
  flex-direction: row-reverse;
}

.feature-content {
  flex: 1;
}

.feature-image {
  flex: 1;
  height: 600px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.feature-image:hover img {
  transform: scale(1.05);
}

.feature-icon {
  font-size: 2.5rem;
  color: #A97C50;
  margin-bottom: 1rem;
}

.feature-content h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
}

.feature-content ul {
  list-style: none;
  padding: 0;
}

.feature-content li {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.feature-content li::before {
  content: "•";
  color: #A97C50;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content .subtitle {
    font-size: 1.2rem;
  }

  .feature-section {
    flex-direction: column;
    gap: 2rem;
  }

  .feature-section.reverse {
    flex-direction: column;
  }

  .feature-image {
    height: 400px;
  }

  .content-container {
    padding: 2rem 20px;
  }

  .features-sections {
    gap: 4rem;
  }

  .quick-info {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>
