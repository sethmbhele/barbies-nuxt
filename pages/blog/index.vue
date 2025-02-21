<template>
  <div class="blog has-additional-menu-content">
    <section class="hero-media">
      <div class="owl-carousel" data-expand-duration="800">
        <div class="item item-video owl-lazy" data-src="https://html.liviucerchez.com/leluxe/tmp/sample-video1.jpg">
          <video loop muted preload="none">
            <source type="video/mp4" src="https://html.liviucerchez.com/leluxe/tmp/sample-video1.mp4" />
            <source type="video/webm" src="https://html.liviucerchez.com/leluxe/tmp/sample-video1.webm" />
          </video>
        </div>
      </div>
      <span class="overlay"></span>
      <span class="mdi mdi-spin mdi-loading"></span>
    </section>

    <div class="content-wrap">
      <div class="entry entry-page">
        <h2 class="entry-title">Our weekly journal</h2>
        <div class="entry-content">
          <div class="blog-listing">
            <BlogPost 
              v-for="post in posts" 
              :key="post.slug" 
              :post="post" 
            />
          </div>
        </div>
      </div>
      
      <div class="entry-copyright">
        <p>&copy; {{ new Date().getFullYear() }} <NuxtLink to="/">LeLuxe Hotel</NuxtLink>. All Rights Reserved. <NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
      </div>
    </div>

    <div class="additional-menu-content">
      <h5>More goodness:</h5>
      <ul>
        <li><NuxtLink to="/blog">Blog Entries</NuxtLink></li>
        <li><NuxtLink to="/dining">Visit Our Restaurant</NuxtLink></li>
        <li><NuxtLink to="/spa">Our Spa & Pool</NuxtLink></li>
        <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
        <li><NuxtLink to="/terms">Terms & Conditions</NuxtLink></li>
      </ul>
      <p><img src="/tmp/sample-sidebar.jpg" alt=""></p>
      <p><ins>*This panel is displayed only on large desktop screens.</ins></p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog — LeLuxe',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with the latest news, stories, and insights from LeLuxe Hotel. Explore our weekly journal covering hotel life, local attractions, and travel tips.'
    }
  ]
})

const posts = [
  {
    slug: '/blog/designers-life',
    title: "A day from our designer's life",
    date: 'May 30, 2018 at 2:19 pm',
    excerpt: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel…",
    image: '/tmp/sample-accomodation.jpg',
    imageWidth: 1380,
    imageHeight: 500,
    icon: 'mdi-file-document-box-multiple',
    comments: 3
  },
  {
    slug: '/blog/vegetarian-way',
    title: 'The vegetarian way of doing things',
    date: 'March 13, 2018 at 3:19 pm',
    excerpt: 'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini melon azuki bean garlic…',
    image: '/tmp/sample-accomodation.jpg',
    imageWidth: 1380,
    imageHeight: 500,
    icon: 'mdi-folder-multiple-image',
    comments: 1
  },
  {
    slug: '/blog/best-ui-ux',
    title: 'Bring out the best UI/UX in this',
    date: 'February 26, 2018 at 7:23 pm',
    excerpt: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean…',
    image: '/tmp/sample-accomodation.jpg',
    imageWidth: 1380,
    imageHeight: 500,
    icon: 'mdi-file-document-box-multiple'
  },
  {
    slug: '/blog/lessons-learned',
    title: 'Lessons learned from the big guys',
    date: 'January 21, 2018 at 7:23 pm',
    excerpt: 'Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage catsear cauliflower garbanzo yarrow salsify lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut…',
    image: '/tmp/sample-accomodation.jpg',
    imageWidth: 1380,
    imageHeight: 500,
    icon: 'mdi-file-document-box-multiple',
    comments: 5
  },
  {
    slug: '/blog/starting-fresh',
    title: 'Starting fresh one of these days',
    date: 'January 1, 2018 at 8:52 pm',
    excerpt: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd…',
    image: '/tmp/sample-accomodation.jpg',
    imageWidth: 1380,
    imageHeight: 500,
    icon: 'mdi-folder-multiple-image',
    comments: 5
  }
]
</script>

<style>
.entry-title {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.blog-listing {
  max-width: 800px;
  margin: 0 auto;
}

.additional-menu-content img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 1rem 0;
}

.additional-menu-content ins {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
}
</style>
