<template>
  <article class="entry">
    <div class="entry-media" v-if="post.image">
      <NuxtLink :to="`/blog/${post.slug}`">
        <img :src="post.image" :alt="post.title">
        <span class="mdi mdi-eye"></span>
      </NuxtLink>
    </div>
    <div class="entry-content">
      <div class="entry-meta">
        <span class="posted-on">
          <span class="mdi mdi-calendar"></span>
          {{ post.date }}
        </span>
        <span class="categories">
          <span class="mdi mdi-tag"></span>
          {{ post.category }}
        </span>
      </div>
      <h2 class="entry-title">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </h2>
      <div class="entry-summary">
        <p>{{ post.excerpt }}</p>
      </div>
      <div class="entry-more">
        <NuxtLink :to="`/blog/${post.slug}`" class="button">Read More</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface BlogPost {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  image?: string
}

defineProps<{
  post: BlogPost
}>()
</script>

<style>
.entry {
  margin-bottom: 4rem;
}

.entry-media {
  margin-bottom: 1.5rem;
}

.entry-media img {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s;
}

.entry-media a:hover img {
  opacity: 0.85;
}

.entry-content {
  margin-top: 1.5rem;
}

.entry-meta {
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.entry-meta span {
  margin-right: 1.5rem;
}

.entry-meta .mdi {
  margin-right: 0.25rem;
  vertical-align: middle;
}

.entry-title {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.entry-title a {
  color: var(--heading-color);
  text-decoration: none;
}

.entry-title a:hover {
  color: var(--primary-color);
}

.entry-summary {
  color: var(--text-color);
  line-height: 1.6;
}

.entry-more {
  margin-top: 1rem;
}

.button {
  color: var(--primary-color);
  text-decoration: none;
  background-color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: var(--primary-color-hover);
}
</style>
