<template>
  <div class="page-content">
    <!-- Hero section (left side) -->
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div class="item">
          <img src="/images/shared/hero2.jpg" alt="About Hero Image" class="hero-image">
        </div>
      </div>
      <span class="overlay"></span>
    </section>

    <!-- Content section (right side) -->
    <div class="content-wrap">
      <div class="entry entry-page">
        <h2 class="entry-title">Welcome dear guest</h2>
        <div class="entry-content">
          <p>Founded in 1925, Barbie's has been a symbol of luxury and excellence in hospitality for nearly a century. Our commitment to providing exceptional service and creating unforgettable experiences has made us one of the most prestigious hotels in Paris.</p>
          
          <div class="features">
            <div class="feature">
              <span class="mdi mdi-star feature-icon"></span>
              <h4>Luxury Accommodations</h4>
              <p>150 meticulously designed rooms and suites offering the perfect blend of comfort and elegance.</p>
            </div>
            <div class="feature">
              <span class="mdi mdi-silverware feature-icon"></span>
              <h4>Fine Dining</h4>
              <p>Three world-class restaurants offering exceptional culinary experiences.</p>
            </div>
            <div class="feature">
              <span class="mdi mdi-spa feature-icon"></span>
              <h4>Wellness & Spa</h4>
              <p>A sanctuary of relaxation with premium treatments and facilities.</p>
            </div>
          </div>

          <div class="stats-container">
            <div class="stat">
              <span class="stat-number">98</span>
              <span class="stat-label">Years of Excellence</span>
            </div>
            <div class="stat">
              <span class="stat-number">150</span>
              <span class="stat-label">Luxury Rooms</span>
            </div>
            <div class="stat">
              <span class="stat-number">3</span>
              <span class="stat-label">Restaurants</span>
            </div>
          </div>
          
          <div class="gallery-container">
            <div class="image-grid">
              <img src="/images/about/gallery/sample-gallery1.jpg" alt="Hotel Exterior" class="gallery-image">
              <img src="/images/about/gallery/sample-gallery2.jpg" alt="Luxury Suite" class="gallery-image">
              <img src="/images/accommodations/sample-accomodation.jpg" alt="Fine Dining" class="gallery-image">
            </div>
          </div>
        </div>
      </div>

      <div class="testimonials-section">
        <div class="container">
          <div class="testimonial">
            <blockquote>
              <p>"An unforgettable experience. The attention to detail and level of service is unmatched. We'll definitely be returning."</p>
              <cite>- James & Sarah Wilson</cite>
            </blockquote>
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

.feature {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.feature-icon {
  font-size: 2rem;
  color: #c49a6c;
  margin-bottom: 1rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  text-align: center;
}

.stat {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 600;
  color: #c49a6c;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.testimonials-section {
  background: #f8f8f8;
  padding: 4rem 0;
  margin-top: 4rem;
  text-align: center;
}

.testimonial blockquote {
  font-size: 1.25rem;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial cite {
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.gallery-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.image-grid img:first-child {
  grid-column: 1 / -1;
}

@media (max-width: 991px) {
  .page-content {
    display: block;
  }

  .hero-media {
    position: relative;
    width: 100%;
    height: 40vh;
  }

  .content-wrap {
    margin-left: 0;
    width: 100%;
    padding: 50px 15px;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>
