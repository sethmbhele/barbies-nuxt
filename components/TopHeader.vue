<template>
  <header class="top-header">
    <div class="header-container">
      <div id="identity">
        <div class="logo">
          <h1>
            <NuxtLink to="/" class="custom-logo-link" rel="home">
              <img src="/images/shared/logo.png" class="custom-logo" width="200" alt="Barbie's Beach House">
            </NuxtLink>
          </h1>
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
.top-header {
  background-color: #fff;
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 1199px) {
  .top-header {
    padding: 1rem;
  }
}
</style>
