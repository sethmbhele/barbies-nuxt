<template>
  <div>
    <div id="site-menu">
      <nav class="nav-menu">
        <ul>
          <li class="menu-item">
            <NuxtLink to="/" :class="{ 'router-link-active': $route.path === '/' }">Home</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/the-house" :class="{ 'router-link-active': $route.path === '/the-house' }">The House</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/pringle-bay" :class="{ 'router-link-active': $route.path.startsWith('/pringle-bay') }">Pringle Bay</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/faqs" :class="{ 'router-link-active': $route.path === '/faqs' }">FAQ's</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/contact" :class="{ 'router-link-active': $route.path === '/contact' }">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style>
#site-menu {
  display: flex;
  align-items: center;
}

.nav-menu {
  position: relative;
}

/* Remove the pseudo-element that's causing the grey line */
.nav-menu::after {
  display: none !important;
  content: none !important;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0 1rem;
}

.nav-menu a {
  text-decoration: none;
  color: inherit;
}

/* Active link styles */
.router-link-active {
  font-weight: 700 !important;
}
</style>
