<template>
  <div class="menu-item">
    <div class="menu-item-title">
      <h3>{{ item.title }}</h3>
      <span class="dots"></span>
      <span class="price">${{ item.price }}</span>
    </div>
    <p class="menu-item-description">{{ item.description }}</p>
  </div>
</template>

<script setup lang="ts">
interface MenuItem {
  title: string
  description: string
  price: number
}

defineProps<{
  item: MenuItem
}>()
</script>

<style>
.menu-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.menu-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.menu-item-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-item-title h3 {
  margin: 0;
  color: var(--heading-color);
  font-size: 1.125rem;
}

.menu-item-title .dots {
  width: 40px;
  height: 1px;
  background: var(--border-color);
  margin: 0 1rem;
}

.menu-item-title .price {
  color: var(--primary-color);
  font-size: 1.25rem;
}

.menu-item-description {
  margin: 0;
  color: var(--text-color);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .menu-item {
    grid-template-columns: 80px 1fr;
  }

  .menu-item-title {
    grid-column: 2;
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .menu-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .menu-item-title {
    grid-column: 1;
  }
}
</style>
