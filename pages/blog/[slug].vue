<template>
  <div class="blog-post">
    <PageHero 
      :title="post.title"
      :subtitle="post.date + ' | ' + post.author"
      :image="post.image"
    />

    <div class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="entry">
              <div class="entry-content">
                <div class="post-meta">
                  <span class="post-date">{{ post.date }}</span>
                  <span class="post-author">By {{ post.author }}</span>
                  <span class="post-category">In {{ post.category }}</span>
                </div>

                <div class="post-content" v-html="post.content"></div>

                <div class="post-tags">
                  <span>Tags:</span>
                  <a v-for="tag in post.tags" :key="tag" :href="'/blog/tag/' + tag">{{ tag }}</a>
                </div>

                <div class="post-share">
                  <span>Share:</span>
                  <a href="#" class="facebook">Facebook</a>
                  <a href="#" class="twitter">Twitter</a>
                  <a href="#" class="linkedin">LinkedIn</a>
                </div>
              </div>
            </div>

            <div class="post-navigation">
              <div class="prev-post" v-if="prevPost">
                <span>Previous Post</span>
                <a :href="'/blog/' + prevPost.slug">{{ prevPost.title }}</a>
              </div>
              <div class="next-post" v-if="nextPost">
                <span>Next Post</span>
                <a :href="'/blog/' + nextPost.slug">{{ nextPost.title }}</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="sidebar">
              <div class="widget widget-recent-posts">
                <h3 class="widget-title">Recent Posts</h3>
                <ul>
                  <li v-for="recentPost in recentPosts" :key="recentPost.slug">
                    <a :href="'/blog/' + recentPost.slug">{{ recentPost.title }}</a>
                    <span>{{ recentPost.date }}</span>
                  </li>
                </ul>
              </div>

              <div class="widget widget-categories">
                <h3 class="widget-title">Categories</h3>
                <ul>
                  <li v-for="category in categories" :key="category.slug">
                    <a :href="'/blog/category/' + category.slug">{{ category.name }}</a>
                    <span>({{ category.count }})</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// This would normally come from an API or CMS
const post = {
  title: 'The Art of French Cuisine',
  slug: 'art-of-french-cuisine',
  date: 'February 15, 2025',
  author: 'Chef Pierre Dubois',
  category: 'Dining',
  image: '/images/blog/cuisine.jpg',
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <h2>The Essence of French Cooking</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <blockquote>
      <p>"Cooking is the art of adjustment, for no two pieces of food are exactly alike."</p>
      <cite>- Julia Child</cite>
    </blockquote>
    
    <h2>Our Culinary Philosophy</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  `,
  tags: ['Cuisine', 'French Food', 'Fine Dining']
}

const prevPost = {
  title: 'Winter in Paris Guide',
  slug: 'winter-in-paris'
}

const nextPost = {
  title: 'A Century of Luxury',
  slug: 'century-of-luxury'
}

const recentPosts = [
  {
    title: 'Valentine\'s Day Special Menu',
    slug: 'valentines-day-menu',
    date: 'February 12, 2025'
  },
  {
    title: 'New Spa Treatments for 2025',
    slug: 'new-spa-treatments',
    date: 'February 8, 2025'
  },
  {
    title: 'Winter in Paris Guide',
    slug: 'winter-in-paris',
    date: 'February 1, 2025'
  }
]

const categories = [
  { name: 'Dining', slug: 'dining', count: 12 },
  { name: 'Events', slug: 'events', count: 8 },
  { name: 'Lifestyle', slug: 'lifestyle', count: 15 },
  { name: 'Travel', slug: 'travel', count: 10 }
]
</script>

<style>
.entry-title {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.meta-data {
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  text-align: center;
}

.meta-data span {
  margin: 0 0.75rem;
}

.meta-data em {
  margin-right: 0.25rem;
  vertical-align: middle;
}

.meta-data a {
  color: inherit;
  text-decoration: none;
}

.meta-data a:hover {
  color: var(--primary-color);
}

.entry-content {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.entry-content p {
  margin-bottom: 1.5rem;
}

.entry-content blockquote {
  margin: 2rem 0;
  padding: 1.5rem;
  border-left: 4px solid var(--primary-color);
  background: var(--bg-light);
  font-style: italic;
}

.entry-content blockquote p:last-child {
  margin-bottom: 0;
}

.author-box {
  margin: 4rem 0;
  padding: 2rem;
  background: var(--bg-light);
  border-radius: 4px;
}

.author-box-image {
  float: left;
  margin-right: 2rem;
}

.author-box-image img {
  border-radius: 50%;
}

.author-box-title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
}

.author-box-title a {
  color: var(--heading-color);
  text-decoration: none;
}

.author-box-title a:hover {
  color: var(--primary-color);
}

.author-box-description {
  color: var(--text-color);
  line-height: 1.6;
}

.author-box-description a {
  color: var(--primary-color);
  text-decoration: none;
}

.author-box-description a:hover {
  text-decoration: underline;
}

#comments {
  margin-top: 4rem;
}

.comment-reply-title {
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.comment-form {
  max-width: 600px;
}

.comment-form label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--heading-color);
}

.comment-form input[type="text"],
.comment-form input[type="email"],
.comment-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-light);
  margin-bottom: 1rem;
}

.comment-form input[type="text"]:focus,
.comment-form input[type="email"]:focus,
.comment-form textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-submit {
  margin-top: 2rem;
}

.submit {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
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

@media (max-width: 768px) {
  .author-box-image {
    float: none;
    margin: 0 0 1rem;
    text-align: center;
  }
  
  .author-box-content {
    text-align: center;
  }
}
</style>
