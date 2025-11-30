<template>
  <section class="cta-section py-20 text-center bg-black text-white">
    <div class="container mx-auto px-4" data-aos="zoom-in">

      <h2 class="text-4xl md:text-5xl font-bold uppercase mb-5">
        {{ title }}
        <span class="text-accent">{{ highlight }}</span>
      </h2>

      <p class="text-gray-300 mb-10 text-lg">
        {{ description }}
      </p>

      <NuxtLink
        to="/contact"
        class="btn-primary inline-block px-12 py-4 text-lg"
      >
        {{ buttonText }}
      </NuxtLink>

    </div>
  </section>
</template>

<script setup>
// Props to make component reusable
defineProps({
  title: { type: String, default: "Ready to" },
  highlight: { type: String, default: "Scale?" },
  description: {
    type: String,
    default: "Get a free digital audit and 30-minute strategy consultation."
  },
  buttonText: { type: String, default: "Get Free Audit" }
})
</script>

