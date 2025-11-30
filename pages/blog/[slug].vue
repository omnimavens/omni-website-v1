<template>
  <div class="container">
    <ContentRenderer :value="post" v-if="post" />

    <div v-else>
      <h2>Blog not found.</h2>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const post = await queryContent('/blog')
  .where({ _path: `/blog/${route.params.slug}` })
  .findOne()

useSeoMeta({
  title: post?.title,
  description: post?.description
})
</script>
