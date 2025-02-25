<template>
  <header class="top-header">
    <div class="header-container">
      <div class="logo-container">
        <div class="logo">
          <NuxtLink to="/" class="custom-logo-link" rel="home">
            <img src="/images/shared/logo.png" class="custom-logo" width="200" alt="Barbie's Beach House">
          </NuxtLink>
        </div>
      </div>

      <MainNav />
    </div>
  </header>
</template>

<script setup lang="ts">
import MainNav from './MainNav.vue'
</script>

<style>
/* Using non-scoped styles to override any global styles */
.top-header {
  background-color: #fff;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

.logo-container {
  position: static;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

.logo {
  position: static;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}

.custom-logo-link {
  position: static;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  height: 100%;
}

.custom-logo {
  max-height: 60px;
  width: auto;
  display: block;
  margin: 0;
  padding: 0;
}

/* Override global styles that cause the grey line */
#site-menu {
  position: static !important;
  width: auto !important;
  background: none !important;
  box-shadow: none !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
}

@media (max-width: 1199px) {
  .header-container {
    padding: 0 1rem;
  }
  
  .top-header {
    top: 10px;
  }
}
</style>
