<template>
  <div class="page-content">
    <!-- Hero section (left side) -->
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div class="item">
          <img src="/images/shared/hero2.jpg" alt="Beach House Exterior" class="hero-image">
        </div>
      </div>
      <span class="overlay"></span>
    </section>

    <!-- Content section (right side) -->
    <div class="content-wrap">
      <div class="entry entry-page">
        <h2 class="entry-title">A Family-Friendly Retreat Awaits You</h2>
        <div class="entry-content">
          <p class="intro-text">This charming abode, lovingly crafted with family memories in mind, is more than just a rental; it's your sanctuary where laughter echoes through the garden and adventures await just beyond your doorstep.</p>
          
          <div class="section-title">
            <h3>Layout and Facilities</h3>
            <p>Barbie's Beach House can sleep up to 10 adults and 6 Children comfortably.</p>
          </div>

          <div class="features">
            <div class="feature">
              <span class="mdi mdi-bed feature-icon"></span>
              <h4>The Courtyard Bedrooms and Bathrooms</h4>
              <p>Picture yourself unwinding on the wraparound balcony, in a lush courtyard directly off your bedrooms with vibrant blooms and the soothing murmur of water.</p>
              <ul class="feature-list">
                <li>Bedroom 1: Double Bed opens up onto the courtyard</li>
                <li>Bedroom 2: Queen Bed opens onto court yard and living area</li>
                <li>Shared bathroom</li>
              </ul>
            </div>

            <div class="feature">
              <span class="mdi mdi-water feature-icon"></span>
              <h4>The River View Bedroom</h4>
              <p>Step into this cozy ensuite bedroom, where you enjoy direct access the bunch house. This setup is ideal for parents who want to stay close to your kids while still enjoying your own space. Plus, if you prefer a little privacy, you can easily close off the access whenever you want.</p>
              <ul class="feature-list">
                <li>Bedroom 3: Queen size Bed</li>
                <li>Ensuite Bathroom</li>
              </ul>
            </div>

            <div class="feature">
              <span class="mdi mdi-stairs feature-icon"></span>
              <h4>Upstairs</h4>
              <p>Venture upstairs to discover two spacious bedrooms that offer serene retreats after a day of adventure. A charming children's nook awaits with bunk beds and a crib, ensuring everyone has their own cozy corner.</p>
              <ul class="feature-list">
                <li>Bedroom 4: Queen Bed (cot for infant)</li>
                <li>Bedroom 5: Queen Bed</li>
                <li>Children's Nook: Double Bunk bed</li>
                <li>Shared full bathroom</li>
              </ul>
            </div>

            <div class="feature">
              <span class="mdi mdi-home feature-icon"></span>
              <h4>The Bunk House</h4>
              <p>Imagine your children giggling in their own special haven—a delightful room designed just for them.</p>
              <ul class="feature-list">
                <li>Two Bunk Beds (Sleeps 4)</li>
                <li>Sleeper Couch</li>
                <li>Smart TV</li>
                <li>Combination Table Set for Kids - Table Tennis Table, Pool Table, Table Football, Slide Hockey</li>
                <li>Toy Box filled with beach toys</li>
                <li>Outdoor bathroom with shower that brings the joy of nature indoors</li>
              </ul>
            </div>

            <div class="feature">
              <span class="mdi mdi-silverware-fork-knife feature-icon"></span>
              <h4>Fully Functional Kitchen and Laundry</h4>
              <p>A large expansive fully equipped chefs kitchen where culinary dreams come true - ready for family feasts and late-night snacks.</p>
              <ul class="feature-list">
                <li>Fully functional kitchen with gas SMEF stove with electric oven, fridge, dishwasher</li>
                <li>Additional amenities include toaster, microwave, kettle, air fryer, food mixers, coffee machine, filtered water machine and sandwich maker</li>
                <li>Washer, dryer and iron and ironing board</li>
              </ul>
            </div>

            <div class="feature feature-highlight">
              <span class="mdi mdi-sofa feature-icon"></span>
              <h4>Gather Around the Open Plan Living Area</h4>
              <div class="feature-content">
                <p>The heart of Barbie's Beach House is its dining room, where you can share stories over delicious meals. With a table that comfortably seats 10-14 guests, it's the perfect setting for laughter-filled dinners that stretch late into the evening.</p>
                <p>As twilight descends, retreat to the cozy lounge, warmed by a Mexican freestanding fireplace that crackles softly as you gather around with loved ones. Glass doors open up to a small patio overlooking the tranquil stream—an idyllic spot for your morning coffee as you soak in the beauty of nature.</p>
                <p>With strong Wi-Fi throughout and an Uninterruptible Power Supply (UPS) for those unpredictable load-shedding moments, you can stay connected while enjoying your escape from everyday life.</p>
              </div>
            </div>

            <div class="feature">
              <span class="mdi mdi-grill feature-icon"></span>
              <h4>The Braai Patio</h4>
              <p>Step outside onto the Braai (BBQ) patio, where the scent of grilled delights mingles with the salty sea breeze, and enjoy al fresco dining under a canopy of stars.</p>
              <ul class="feature-list">
                <li>Outdoor dining table that seats 16 people</li>
                <li>Jet master BBQ</li>
                <li>Stocked with braai wood for your use</li>
              </ul>
            </div>

            <div class="feature feature-highlight">
              <span class="mdi mdi-nature feature-icon"></span>
              <h4>The Riverside Patio & Garden</h4>
              <div class="feature-content">
                <p>As you step onto the patio, you'll be greeted by stunning views of the surrounding landscape, where the gentle sounds of the river enhance your connection to nature. Comfortable outdoor couches are perfect for relaxing with sundowners a book and the outdoor table is perfect for alfresco lunches.</p>
                <p>Children can explore the playhouse, sparking their imagination and providing hours of entertainment. As you stroll through the garden, you'll find cozy seating areas perfect for relaxation or gathering with loved ones.</p>
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

.section-title {
  margin: 3rem 0 2rem;
}

.section-title h3 {
  color: #A97C50;
  margin-bottom: 1rem;
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

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(169, 124, 80, 0.1);
  color: #666;
}

.feature-list li:last-child {
  border-bottom: none;
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
