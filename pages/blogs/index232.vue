<template>
  <div class="container">
    <h1>Our Blog</h1>

    <div v-if="posts.length === 0">No blog posts found.</div>

    <div v-for="post in posts" :key="post._path" class="blog-item">
      <NuxtLink :to="post._path">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>

    const posts = await queryContent('/blog').find()
</script>

<style>
.blog-item {
  margin-bottom: 30px;
}
</style>
