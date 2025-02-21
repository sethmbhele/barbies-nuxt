<template>
  <div class="contact">
    <PageHero 
      title="Contact Us" 
      subtitle="Get in touch with our team"
      image="/images/contact-hero.jpg"
    />

    <div class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-info">
              <h2>Get in Touch</h2>
              <p>We'd love to hear from you. Please feel free to contact us using any of the methods below.</p>
              
              <div class="contact-details">
                <div class="detail">
                  <span class="mdi mdi-map-marker"></span>
                  <div class="text">
                    <h3>Address</h3>
                    <p>123 Luxury Avenue<br>Paris, France 75001</p>
                  </div>
                </div>

                <div class="detail">
                  <span class="mdi mdi-phone"></span>
                  <div class="text">
                    <h3>Phone</h3>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div class="detail">
                  <span class="mdi mdi-email"></span>
                  <div class="text">
                    <h3>Email</h3>
                    <p>info@barbies.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

    <div class="map-section">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156740993!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component imports are handled by Nuxt auto-imports
</script>
