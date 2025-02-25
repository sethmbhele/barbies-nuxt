<template>
  <div class="page-content">
    <!-- Hero section (left side) -->
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div class="item">
          <img src="/images/hero/hero-3.jpg" alt="Contact Us" class="hero-image">
        </div>
      </div>
      <span class="overlay"></span>
    </section>

    <!-- Content section (right side) -->
    <div class="content-wrap">
      <div class="entry entry-page">
        <h2 class="entry-title">Get in Touch</h2>
        <div class="entry-content">
          <p class="intro-text">We'd love to hear from you. Whether you have questions about availability, special requirements, or local recommendations, we're here to help.</p>

          <div class="contact-section">
            <div class="contact-item">
              <span class="mdi mdi-phone feature-icon"></span>
              <h4>Phone</h4>
              <p>Call or WhatsApp: +27 123 456 789</p>
            </div>

            <div class="contact-item">
              <span class="mdi mdi-email feature-icon"></span>
              <h4>Email</h4>
              <p>bookings@barbiesbeachhouse.co.za</p>
            </div>

            <div class="contact-item">
              <span class="mdi mdi-map-marker feature-icon"></span>
              <h4>Location</h4>
              <p>123 Beach Road<br>Pringle Bay<br>Western Cape<br>South Africa</p>
            </div>

            <div class="contact-form">
              <h4>Send us a Message</h4>
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" v-model="form.name" required>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="form.email" required>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" v-model="form.message" rows="4" required></textarea>
                </div>

                <button type="submit" class="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Add actual form submission logic here
}

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

.contact-section {
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(169, 124, 80, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(169, 124, 80, 0.1);
}

.feature-icon {
  font-size: 2rem;
  color: #A97C50;
  margin-bottom: 1rem;
}

.contact-item h4 {
  color: #A97C50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.contact-item p {
  color: #666;
  line-height: 1.6;
}

.contact-form {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(169, 124, 80, 0.05);
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(169, 124, 80, 0.2);
  border-radius: 4px;
  background: #fff;
  color: #333;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #A97C50;
}

.submit-button {
  background: #A97C50;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: #8b6541;
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
