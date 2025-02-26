<template>
  <div class="house-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <ImageGallery :images="galleryImages" @openGallery="openGallery" />
    </section>

    <!-- Main Content -->
    <div class="content-container">
      <!-- Header Section -->
      <div class="header-section">
        <h1>A Family-Friendly Retreat Awaits You</h1>
        <p class="subtitle">Your sanctuary where laughter echoes through the garden and adventures await just beyond your doorstep.</p>
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
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div class="feature-card">
          <span class="mdi mdi-bed feature-icon"></span>
          <h3>The Courtyard Bedrooms</h3>
          <p>Unwind on the wraparound balcony, in a lush courtyard directly off your bedrooms with vibrant blooms.</p>
          <ul>
            <li>Double Bed opens up onto courtyard</li>
            <li>Queen Bed opens onto court yard and living area</li>
            <li>Shared bathroom</li>
          </ul>
        </div>

        <div class="feature-card">
          <span class="mdi mdi-water feature-icon"></span>
          <h3>The River View Bedroom</h3>
          <p>Cozy ensuite bedroom with direct access to the bunk house - perfect for families.</p>
          <ul>
            <li>Queen size Bed</li>
            <li>Ensuite Bathroom</li>
            <li>Private access to bunk house</li>
          </ul>
        </div>

        <div class="feature-card">
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

        <div class="feature-card highlight">
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

        <div class="feature-card">
          <span class="mdi mdi-silverware-fork-knife feature-icon"></span>
          <h3>Chef's Kitchen</h3>
          <p>Fully equipped kitchen ready for family feasts.</p>
          <ul>
            <li>Gas SMEF stove with electric oven</li>
            <li>Modern appliances including air fryer</li>
            <li>Coffee machine & filtered water</li>
            <li>Full laundry facilities</li>
          </ul>
        </div>

        <div class="feature-card highlight">
          <span class="mdi mdi-sofa feature-icon"></span>
          <h3>Living & Dining</h3>
          <p>The heart of the house where memories are made.</p>
          <ul>
            <li>Dining table for 10-14 guests</li>
            <li>Cozy lounge with fireplace</li>
            <li>Indoor-outdoor flow</li>
            <li>Entertainment system</li>
          </ul>
        </div>
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
      content: 'Discover our spacious 5-bedroom beach house with bunk house, perfect for families and groups. Modern amenities, chef's kitchen, and entertainment areas.'
    }
  ]
})
</script>

<style scoped>
.house-page {
  width: 100%;
  background: #fff;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header-section {
  margin: 2rem 0 3rem;
  text-align: center;
}

.header-section h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.quick-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
}

.info-item .mdi {
  color: #A97C50;
  font-size: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: rgba(169, 124, 80, 0.05);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(169, 124, 80, 0.1);
}

.feature-card.highlight {
  background: rgba(169, 124, 80, 0.1);
}

.feature-icon {
  font-size: 2rem;
  color: #A97C50;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.feature-card p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.feature-card ul {
  list-style: none;
  padding: 0;
}

.feature-card ul li {
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.feature-card ul li::before {
  content: "•";
  color: #A97C50;
  position: absolute;
  left: 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .content-container {
    padding: 1rem;
  }

  .header-section h1 {
    font-size: 2rem;
  }

  .quick-info {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
