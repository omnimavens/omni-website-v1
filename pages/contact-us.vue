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
        title: 'Contact Page',
        name: 'contact'
    })

    useSeoMeta({
        title: ' Contact Our Digital Marketing Experts | Omni Mavens',
        description: 'Ready to scale your business? Contact Omni Mavens for expert digital marketing strategies including SEO, PPC, content, and growth consulting..',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'Contact Our Digital Marketing Experts | Omni Mavens',
        ogDescription: 'Ready to scale your business? Contact Omni Mavens for expert digital marketing strategies including SEO, PPC, content, and growth consulting..',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>