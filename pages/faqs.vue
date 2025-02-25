<template>
  <div class="page-content">
    <!-- Hero section (left side) -->
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div class="item">
          <img src="/images/hero/hero-2.jpg" alt="FAQs" class="hero-image">
        </div>
      </div>
      <span class="overlay"></span>
    </section>

    <!-- Content section (right side) -->
    <div class="content-wrap">
      <div class="entry entry-page">
        <h2 class="entry-title">Frequently Asked Questions</h2>
        <div class="entry-content">
          <div class="faq-section">
            <div class="faq-item">
              <h4>What time is check-in and check-out?</h4>
              <p>Check-in is from 3:00 PM, and check-out is by 10:00 AM. Early check-in or late check-out may be available upon request.</p>
            </div>

            <div class="faq-item">
              <h4>Is the house suitable for children?</h4>
              <p>Absolutely! We have dedicated spaces for children including the Bunk House with games and toys, a playhouse in the garden, and child-friendly amenities throughout.</p>
            </div>

            <div class="faq-item">
              <h4>What happens during load shedding?</h4>
              <p>We have an Uninterruptible Power Supply (UPS) system to ensure essential services continue during load shedding.</p>
            </div>

            <div class="faq-item">
              <h4>Is there parking available?</h4>
              <p>Yes, we have secure parking available on the property for multiple vehicles.</p>
            </div>

            <div class="faq-item">
              <h4>Is Wi-Fi available?</h4>
              <p>Yes, we provide complimentary high-speed Wi-Fi throughout the property.</p>
            </div>

            <div class="faq-item">
              <h4>Are linens and towels provided?</h4>
              <p>Yes, we provide all bed linens, bath towels, and beach towels for your stay.</p>
            </div>

            <div class="faq-item">
              <h4>Is the kitchen fully equipped?</h4>
              <p>Yes, our kitchen is fully equipped with modern appliances, cookware, and utensils for all your cooking needs.</p>
            </div>

            <div class="faq-item">
              <h4>How far is the beach?</h4>
              <p>The beach is just a short walk away from the property, making it perfect for daily beach visits.</p>
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

.faq-section {
  margin-top: 2rem;
}

.faq-item {
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(169, 124, 80, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(169, 124, 80, 0.1);
}

.faq-item h4 {
  color: #A97C50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.faq-item p {
  color: #666;
  line-height: 1.6;
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
