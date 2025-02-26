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

      <!-- Image Gallery -->
      <section class="gallery-section">
        <ImageGallery :images="galleryImages" @openGallery="openGallery" />
      </section>

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
      content: "Discover our spacious 5-bedroom beach house with bunk house, perfect for families and groups. Modern amenities, chef's kitchen, and entertainment areas."
    }
  ]
})
</script>

<style scoped>
.house-page {
  width: 100%;
  background: #fff;
}

.hero-section {
  width: 100%;
  height: 70vh;
  min-height: 600px;
  position: relative;
  margin-bottom: 48px;
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  padding: 0 24px;
  color: #fff;
}

.hero-content h1 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.hero-content .subtitle {
  font-size: 20px;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.content-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

.quick-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 24px;
  background: rgba(169, 124, 80, 0.05);
  border-radius: 12px;
  margin-bottom: 48px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-item .mdi {
  color: #A97C50;
  font-size: 24px;
}

.info-item span {
  color: #666;
  font-size: 16px;
  font-weight: 400;
}

.gallery-section {
  margin-bottom: 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 48px;
}

.feature-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(169, 124, 80, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(169, 124, 80, 0.08);
}

.feature-card.highlight {
  background: rgba(169, 124, 80, 0.05);
  border: none;
}

.feature-icon {
  font-size: 24px;
  color: #A97C50;
  margin-bottom: 16px;
}

.feature-card h3 {
  color: #A97C50;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
}

.feature-card p {
  color: #666;
  margin-bottom: 16px;
  line-height: 20px;
  font-size: 14px;
}

.feature-card ul {
  list-style: none;
  padding: 0;
}

.feature-card ul li {
  color: #666;
  margin-bottom: 8px;
  padding-left: 24px;
  position: relative;
  line-height: 20px;
  font-size: 14px;
}

.feature-card ul li::before {
  content: "•";
  color: #A97C50;
  position: absolute;
  left: 8px;
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
    min-height: 400px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .hero-content .subtitle {
    font-size: 18px;
  }

  .content-container {
    padding: 24px 16px;
  }

  .quick-info {
    padding: 16px;
    gap: 16px;
  }

  .features-grid {
    gap: 24px;
  }

  .feature-card {
    padding: 16px;
  }
}
</style>
