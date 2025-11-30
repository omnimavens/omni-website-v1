<template>
  <footer class="bg-black text-white py-16">
    <div class="container mx-auto px-4">
      
      <!-- GRID -->
      <div class="main-footer footer-grid d-flex justify-conntent-between">
        
        <!-- LOGO + TEXT -->
        <div>
          <NuxtLink to="/" class="logo">
            <NuxtImg src="/images/omnimavens-logo.svg" alt="OMNIMAVENS"/>
          </NuxtLink>

          <p class="text-gray-400 mt-5 max-w-md leading-relaxed">
            The premier agency for digital growth, visual storytelling, and market dominance.
          </p>
        </div>

        <!-- COMPANY LINKS -->
        <div>
          <h4 class="text-lg mb-5 font-semibold">Company</h4>
          <ul class="space-y-3 text-gray-400">
            <li><NuxtLink to="/about-us" class="hover:text-white">About Us</NuxtLink></li>
            <li><NuxtLink to="/services" active-class="active">Services</NuxtLink></li>
            <li><NuxtLink to="/solutions" active-class="active">Solutions</NuxtLink></li>
            <li><NuxtLink to="/blog" active-class="active">Blogs</NuxtLink></li>
            <li><NuxtLink to="/contact-us" active-class="active">Contact</NuxtLink></li>
          </ul>
        </div>

        

        <!-- SOCIAL LINKS -->
        <div class="social-links">
          <h4 class="text-lg mb-5 font-semibold">Socials</h4>
          <div class="d-flex text-white">
            <a href="https://www.linkedin.com/company/omni-mavens/" target="_blank" class="hover:text-accent">
              <i class="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/omnimavens/" target="_blank" class="hover:text-accent">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com/people/Omni-Mavens/61578739193718/" target="_blank" class="hover:text-accent">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
          </div>
        </div>

        <!-- COntact -->
        <div class="contact-info">
          <h4 class="text-lg mb-5 font-semibold">Contact</h4>
            <ul class="space-y-3 text-gray-400">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-phone fa-sm"></i>
              <a href="tel:9274824894" class="hover:text-white">+91 92748 24894</a>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-envelope fa-sm"></i>
              <a href="mailto:info@omnimavens.com" class="hover:text-white">info@omnimavens.com</a>
            </li>
            </ul>
        </div>
        
        

      </div>

      <!-- COPYRIGHT -->
      <div class="copyright border-t border-gray-800">
       <p> &copy; {{ currentYear }} Omni Mavens. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>

