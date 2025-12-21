<template>
     <section class="thank-you-hero about-hero">
        <div class="container">
            
            <div class="status-icon-wrap" data-aos="zoom-in">
                <i class="fa-solid fa-check check-icon"></i>
            </div>

            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
                THANK <span class="text-accent">YOU</span>
            </h1>
            
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="200">
                Your submission has been received successfully. Our team is reviewing your details and will be in touch within 24 hours.
            </p>

            <NuxtLink to="/" class="btn-primary" data-aos="fade-up" data-aos-delay="300">
                Return to Home
            </NuxtLink>

            <div class="next-steps-grid" data-aos="fade-up" data-aos-delay="400">
                
                <NuxtLink to="/blogs" class="step-card">
                    <div class="step-icon"><i class="fa-solid fa-bolt"></i></div>
                    <h4 class="step-title">Read Our Insights</h4>
                    <p class="step-text">While you wait, discover our latest strategies on AI, SEO, and Paid Media growth.</p>
                </NuxtLink>

                <NuxtLink to="/blogs" class="step-card">
                    <div class="step-icon"><i class="fa-solid fa-chart-line"></i></div>
                    <h4 class="step-title">View Case Studies</h4>
                    <p class="step-text">See exactly how we scaled other brands from 6 to 7 figures using our ecosystem.</p>
                </NuxtLink>

                <a href="https://www.instagram.com/omnimavens/" target="_blank" class="step-card">
                    <div class="step-icon"><i class="fa-brands fa-instagram"></i></div>
                    <h4 class="step-title">Join the Community</h4>
                    <p class="step-text">Follow us on Instagram for daily tips and behind-the-scenes strategy.</p>
                </a>

            </div>

        </div>
    </section>


</template>

<script setup lang="ts">
    definePageMeta({
        title: 'Thank You - The Digital Marketing Agency',
        name: 'thank-you'
    })

    useSeoMeta({
        title: ' Thank You | Digital Marketing Services', // Will become "Home - My Amazing Site"
        description: 'Welcome to the OmniMavens.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'Thank You - The Digital Marketing Agency',
        ogDescription: 'Your digital marketing agency focused on you, your business, your results.',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>