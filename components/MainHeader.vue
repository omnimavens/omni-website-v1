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
          <li><NuxtLink to="/blogs" active-class="active">Blogs</NuxtLink></li>
          <li>
              <NuxtLink to="/contact-us" class="btn-primary hidden md:inline-block">
                  Get Proposal
                </NuxtLink>
            </li>
        </ul>

        <!-- DESKTOP BUTTON + HAMBURGER -->
        <button class="hamburger md:hidden " @click="toggleMenu" :class="{ active: isMenuOpen }">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
        

      </nav>

      <!-- MOBILE MENU -->
      <transition name="fade">
        <div
          v-show="isMenuOpen"
          class="mobile-menu fixed inset-0 bg-white p-6 z-50"
          :class="{ active: isMenuOpen }"
        >
          <div class="flex justify-end mb-6 close-btn"> 
            <button @click="toggleMenu" class="text-3xl" :class="{ active: isMenuOpen }">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul class="mobile-links flex flex-col gap-6 text-lg">
            <li><NuxtLink to="/" @click="toggleMenu">Home</NuxtLink></li>
            <li><NuxtLink to="/services" @click="toggleMenu">Services</NuxtLink></li>
            <li><NuxtLink to="/solutions" @click="toggleMenu">Solutions</NuxtLink></li>
            <li><NuxtLink to="/blogs" @click="toggleMenu">Blogs</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="toggleMenu">Contact</NuxtLink></li>
            <!-- <li><i class="fa-solid fa-envelope fa-xl text-accent "></i> <a href="mailto:info@mavens.com" class="">info@mavens.com</a></li>
            <li><i class="fa-solid fa-phone fa-xl text-accent "></i> <a href="tel:++91 92748 24894">+91 92748 24894</a></li> -->
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>

    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isShrunk = ref(false)
    const isMenuOpen = ref(false)

    const handleScroll = () => {
        isShrunk.value = window.scrollY > 50
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })


    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value
    }

</script>

