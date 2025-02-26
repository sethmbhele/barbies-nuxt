<template>
  <div class="pringle-bay-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="/images/hero/hero-1.jpg" alt="Pringle Bay" class="hero-image">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Discover Pringle Bay</h1>
            <p class="subtitle">Nestled between mountains and sea, Barbie's Beach House is not just about comfort; it's about embracing the stunning surroundings.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="content-container">
      <!-- Features Sections -->
      <div class="features-sections">
        <section class="feature-section">
          <div class="feature-content">
            <span class="mdi mdi-beach feature-icon"></span>
            <h3>Beach Life & Activities</h3>
            <p>Start your adventure at the pristine Pringle Bay Beach, where you can bask in the sun, swim in the calm lagoon formed by the Buffel's River, or build sandcastles with your family.</p>
            <ul>
              <li>Swimming in calm lagoon waters</li>
              <li>Whale watching during migration season</li>
              <li>Fishing and water sports</li>
              <li>Rock pools exploration</li>
              <li>Equipment rentals available in village</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Pringle Bay Beach">
          </div>
        </section>

        <section class="feature-section reverse">
          <div class="feature-content">
            <span class="mdi mdi-hiking feature-icon"></span>
            <h3>Nature & Exploration</h3>
            <p>Immerse yourself in the natural wonders of the Kogelberg Biosphere Reserve, where every trail tells a story and every vista takes your breath away.</p>
            <ul>
              <li>Scenic hiking trails</li>
              <li>Harold Porter Botanical Gardens</li>
              <li>UNESCO-protected reserve</li>
              <li>Mountain biking routes</li>
              <li>Bird watching opportunities</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Hiking Trails">
          </div>
        </section>

        <section class="feature-section">
          <div class="feature-content">
            <span class="mdi mdi-food-fork-drink feature-icon"></span>
            <h3>Culinary Delights</h3>
            <p>Pringle Bay has blossomed into a culinary destination, delighting both locals and visitors with its diverse and vibrant dining scene.</p>
            <ul>
              <li><strong>The Book Club</strong> - Unique fusion flavors from local produce</li>
              <li><strong>Cork</strong> - Extensive local wine selection</li>
              <li><strong>Hangklip Hotel</strong> - Live music and great food</li>
              <li><strong>Hook, Line and Sinker</strong> - Fresh seafood</li>
              <li><strong>The Burger Bar</strong> - Artisanal pizzas and burgers</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Local Restaurants">
          </div>
        </section>

        <section class="feature-section reverse">
          <div class="feature-content">
            <span class="mdi mdi-binoculars feature-icon"></span>
            <h3>Wildlife and Nature</h3>
            <p>Experience the rich biodiversity of the Kogelberg Biosphere Reserve, home to diverse flora and fauna that make every visit unique.</p>
            <ul>
              <li>Whale watching spots</li>
              <li>Penguin colony at Stony Point</li>
              <li>Rich marine life</li>
              <li>Endemic fynbos vegetation</li>
              <li>Bird watching paradise</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/400x600" alt="Local Wildlife">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pringle-bay-page {
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
}
</style>
