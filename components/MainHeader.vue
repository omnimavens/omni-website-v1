<template> 
  <header class="shadow-sm" :class="{ 'scrolled': isShrunk }">
    <div class="container">
      <nav class="d-flex justify-content-between align-items-center">
        
        <!-- LOGO -->
        <NuxtLink to="/" class="logo d-flex">
            <NuxtImg src="/images/omnimavens-logo.svg" alt="OMNIMAVENS"/>
        </NuxtLink>

        <!-- DESKTOP NAV LINKS -->
        <ul class="nav-links d-flex justify-content-between align-items-center">
          <li><NuxtLink to="/" exact-active-class="active">Home</NuxtLink></li>
          <li><NuxtLink to="/about-us" active-class="active">About</NuxtLink></li>
          <li><NuxtLink to="/services" active-class="active">Services</NuxtLink></li>
          <li><NuxtLink to="/solutions" active-class="active">Solutions</NuxtLink></li>
          <li><NuxtLink to="/blog" active-class="active">Blogs</NuxtLink></li>
          <li>
              <NuxtLink to="/contact-us" class="btn-primary hidden md:inline-block">
                  Get Proposal
                </NuxtLink>
            </li>
        </ul>

        <!-- DESKTOP BUTTON + HAMBURGER -->
        <!-- <div class=" gap-4 d-none">
          <button class="hamburger md:hidden " @click="toggleMenu">
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div> -->

      </nav>

      <!-- MOBILE MENU -->
      <!-- <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="mobile-menu fixed inset-0 bg-white p-6 z-50"
        >
          <div class="flex justify-end mb-6">
            <button @click="toggleMenu" class="text-3xl">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul class="flex flex-col gap-6 text-lg">
            <li><NuxtLink to="/" @click="toggleMenu">Home</NuxtLink></li>
            <li><NuxtLink to="/services" @click="toggleMenu">Services</NuxtLink></li>
            <li><NuxtLink to="/solutions" @click="toggleMenu">Solutions</NuxtLink></li>
            <li><NuxtLink to="/insights" @click="toggleMenu">Insights</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="toggleMenu">Contact</NuxtLink></li>
          </ul>
        </div>
      </transition> -->
    </div>
  </header>
</template>

<script setup>

    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isShrunk = ref(false)
    const menuClose = ref(false)

    const handleScroll = () => {
        isShrunk.value = window.scrollY > 50
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })

// import { ref } from 'vue'

// const isMenuOpen = ref(false)

// const toggleMenu = () => {
//   isMenuOpen.value = !isMenuOpen.value
// }

</script>

