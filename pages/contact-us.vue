<template>
    <section class="about-hero">
        <div class="container">
            <h1 class="hero-title" data-aos="fade-up">
                Let's Work <br> <span class="text-accent">Together</span>
            </h1>
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="100">
Whether you're looking for growth, strategy, or clarity—our experts are here to guide your next step.
            </p>
        </div>
    </section>

    <ContactFormSection/>
</template>

<script setup lang="ts">
    definePageMeta({
        title: 'Home Page',
        name: 'contact'
    })

    useSeoMeta({
        title: ' Connect with us Now | Digital Marketing Services', // Will become "Home - My Amazing Site"
        description: 'Welcome to the OmniMavens.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'Connect with us Now - The Digital Marketing Agency',
        ogDescription: 'Your digital marketing agency focused on you, your business, your results.',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>