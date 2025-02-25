<template>
  <div class="page-content">
    <!-- Hero section (left side) -->
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div class="item">
          <img src="/images/shared/pringle-bay.jpg" alt="Pringle Bay" class="hero-image">
        </div>
      </div>
      <span class="overlay"></span>
    </section>

    <!-- Content section (right side) -->
    <div class="content-wrap">
      <div class="entry entry-page">
        <h2 class="entry-title">Discover Pringle Bay</h2>
        <div class="entry-content">
          <p class="intro-text">Nestled between mountains and sea, Pringle Bay offers a perfect escape from city life while being just over an hour from Cape Town.</p>
          
          <div class="features">
            <div class="feature feature-highlight">
              <span class="mdi mdi-beach feature-icon"></span>
              <h4>Beach Life</h4>
              <div class="feature-content">
                <p>Pringle Bay's pristine beach stretches for kilometers, offering excellent swimming, surfing, and long walks. The beach is perfect for families, with rock pools to explore and safe swimming areas.</p>
              </div>
            </div>

            <div class="feature">
              <span class="mdi mdi-hiking feature-icon"></span>
              <h4>Outdoor Activities</h4>
              <p>The area offers numerous hiking trails, mountain biking routes, and nature walks. The nearby Harold Porter Botanical Gardens showcase the region's unique fynbos vegetation.</p>
            </div>

            <div class="feature">
              <span class="mdi mdi-food-fork-drink feature-icon"></span>
              <h4>Local Dining</h4>
              <p>Despite its small size, Pringle Bay boasts several excellent restaurants, cafes, and a local deli. Fresh seafood features prominently on many menus.</p>
            </div>

            <div class="feature feature-highlight">
              <span class="mdi mdi-binoculars feature-icon"></span>
              <h4>Wildlife and Nature</h4>
              <div class="feature-content">
                <p>The area is part of the UNESCO-protected Kogelberg Biosphere Reserve. Watch for whales from June to December, and enjoy the antics of the local penguin colony at Stony Point.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Initialize owl carousel
  if (typeof window !== 'undefined' && window.$) {
    window.$('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 800
    })
  }
})
</script>

<style scoped>
.page-content {
  display: flex;
  min-height: 100vh;
}

.hero-media {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrap {
  margin-left: 50%;
  width: 50%;
  padding: 170px 50px;
  background: #fff;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
}

.feature {
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(169, 124, 80, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature:hover {
  background: rgba(169, 124, 80, 0.1);
}

.feature-icon {
  font-size: 2rem;
  color: #A97C50;
  margin-bottom: 1rem;
}

.feature h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.feature p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-highlight {
  background: rgba(169, 124, 80, 0.1);
}

.feature-content {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .content-wrap {
    margin-left: 0;
    width: 100%;
    padding: 120px 20px;
  }
  
  .hero-media {
    display: none;
  }
}
</style>
