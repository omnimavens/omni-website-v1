<template>
  <div>
    <NuxtLayout>
    	<NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
  export default {
    app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

    router: {
      scrollBehavior() {
        return { x: 0, y: 0 }
      }
    }
  }
</script>


<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
