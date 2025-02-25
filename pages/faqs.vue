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
            <FaqItem question="How do you get to Barbies Beach House?">
              <p>From the R/44 Clarence Drive turn into Pringle Bay Continue onto Hangklip Road. Turn right into William Avenue - 160m and left into Joseph Road - 76m. Turn right at the first cross street into Hilton Circle - 87m. Turn left into Hilda Crescent.</p>
              <p>1798 is on your right. Brick wall with double entrance door with two potted trees on either side of the door.</p>
              <p>Barbies Beach House Pringle Bay is also on Google Maps.</p>
            </FaqItem>

            <FaqItem question="What time is check-in and check-out?">
              <p>Check-in is from 3:00 PM, and check-out is by 10:00 AM. Early check-in or late check-out may be available upon request.</p>
            </FaqItem>

            <FaqItem question="Are pets allowed?">
              <p>Yes - small pets are more than welcome. Please do clean up after your pets and ensure there is no noise / nuisance for our neighbours.</p>
            </FaqItem>

            <FaqItem question="When is the best time to visit?">
              <p>Barbies Beach House has something to offer year round:</p>
              <ul>
                <li><strong>Summer:</strong> Best weather for making the most of the beach.</li>
                <li><strong>Winter:</strong> The open fireplace warms the whole house, making it a cosy oasis to watch winter storms roll in. Perfect time to enjoy quieter tourist periods in Pringle Bay.</li>
              </ul>
              <p><strong>Seasons:</strong></p>
              <ul>
                <li>Peak Season: November - April</li>
                <li>Off Peak Season: May - October</li>
              </ul>
            </FaqItem>

            <FaqItem question="Other things to note">
              <p>Pringle Bay is known for its baboon troops that forage for food in the village. Keep your ears alert for the sound of the Baboon Monitors vuvuzelas that warn you when they are near so that you close the doors and windows. It is also advisable to keep food out of sight.</p>
            </FaqItem>

            <FaqItem question="Is the house suitable for children?">
              <p>Absolutely! We have dedicated spaces for children including the Bunk House with games and toys, a playhouse in the garden, and child-friendly amenities throughout.</p>
            </FaqItem>

            <FaqItem question="What happens during load shedding?">
              <p>We have an Uninterruptible Power Supply (UPS) system to ensure essential services continue during load shedding.</p>
            </FaqItem>

            <FaqItem question="Is there parking available?">
              <p>Yes, we have secure parking available on the property for multiple vehicles.</p>
            </FaqItem>

            <FaqItem question="Is Wi-Fi available?">
              <p>Yes, we provide complimentary high-speed Wi-Fi throughout the property.</p>
            </FaqItem>

            <FaqItem question="Are linens and towels provided?">
              <p>Yes, we provide all bed linens, bath towels, and beach towels for your stay.</p>
            </FaqItem>

            <FaqItem question="Is the kitchen fully equipped?">
              <p>Yes, our kitchen is fully equipped with modern appliances, cookware, and utensils for all your cooking needs.</p>
            </FaqItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FaqItem from '~/components/FaqItem.vue'

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
