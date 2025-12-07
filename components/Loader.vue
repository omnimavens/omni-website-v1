<template>
  <div id="flashlight-loader" :class="{ hide: isLoaded }" ref="loaderRef">
    <div class="loader-hidden-layer">
      <div class="loader-pattern"></div>
      <div class="loader-brand">OMNI MAVENS<span>.</span></div>
      <div class="loader-status">
        Analyzing ROAS <span>{{ progress }}%</span>
      </div>
    </div>

    <div class="flashlight-mask"></div>
    <div class="loader-cursor"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const loaderRef = ref(null);
const progress = ref(0);
const isLoaded = ref(false);

let interval;

// Set mouse spotlight position
function handleMouse(e) {
  if (!isLoaded.value && loaderRef.value) {
    loaderRef.value.style.setProperty("--x", e.clientX + "px");
    loaderRef.value.style.setProperty("--y", e.clientY + "px");
  }
}

onMounted(() => {
  // Mouse move spotlight
  document.addEventListener("mousemove", handleMouse);

  // Fake loading progress
  interval = setInterval(() => {
    progress.value += Math.floor(Math.random() * 3) + 1;
    if (progress.value > 99) progress.value = 99;
  }, 50);

  // Simulated "window load"
  window.addEventListener("load", () => {
    clearInterval(interval);
    progress.value = 100;

    setTimeout(() => {
      isLoaded.value = true;
      document.body.classList.add("loaded");
    }, 500);
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouse);
  clearInterval(interval);
});
</script>

<style scoped>
/* Keep your original CSS here */
.hide {
  opacity: 0;
  pointer-events: none;
  transition: 0.6s ease;
}
</style>
