<template>
  <div>
    <div id="site-menu">
      <nav class="nav-menu">
        <ul>
          <li class="menu-item"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/about">The House</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/accommodations">Pringle Bay</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/dining">FAQ's</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component remains simple as it inherits all global styles
// and mobile functionality from style.css
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
</style>
