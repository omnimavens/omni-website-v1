<template>
    <section class="about-hero">
        <div class="container">
            <h1 class="hero-title" data-aos="fade-up">
                We Are <br> <span class="text-accent">OMNI MAVENS</span>
            </h1>
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="100">
                We aren't just an agency. We are a collective of dreamers, doers, and data geeks obsessed with growing your business.
            </p>
        </div>
    </section>

    <section class="connection-section">
        <div class="container">
            <div class="conn-grid">
                <div data-aos="fade-right">
                    <span class="section-subtitle">Our Philosophy</span>
                    <h2>Humans First. <br>Algorithms Second.</h2>
                    <p>
                        In a world obsessed with AI and automation, we believe the real competitive advantage is <strong>human connection</strong>. 
                    </p>
                    <p>
                        We don't hide behind spreadsheets. We build relationships. When you work with us, you aren't just hiring a vendor; you are gaining a partner who loses sleep over your revenue goals just as much as you do.
                    </p>
                    <div class="quote-box">
                        <p class="quote-text">"Marketing is no longer about the stuff that you make, but about the stories you tell."</p>
                        <span class="quote-author">— Seth Godin (Our Inspiration)</span>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team Collaboration" class="conn-img">
                </div>
            </div>
        </div>
    </section>

      <div class="stats-bar">
        <div class="container">
            <div class="stats-grid">
                <div data-aos="fade-up" data-aos-delay="0">
                    <div class="stat-num">$50M+</div>
                    <div class="stat-label">Revenue Generated</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <div class="stat-num">150+</div>
                    <div class="stat-label">Brands Scaled</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <div class="stat-num">4.5x</div>
                    <div class="stat-label">Average ROAS</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div class="stat-num">24/7</div>
                    <div class="stat-label">Always On</div>
                </div>
            </div>
        </div>
    </div>

    <CtaSection
        title="Want to Boost "
        highlight="Your Brand?"
        description="Our team helps you design, market & scale your business online."
        buttonText="Contact Us"
    />


    <ContactFormSection />


</template>

<script setup lang="ts">
    definePageMeta({
        title: 'about',
    })

    useSeoMeta({
        title: ' Digital Marketing Services', // Will become "Home - My Amazing Site"
        description: 'Welcome to the OmniMavens.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'About OmniMavens - The Digital Marketing Agency',
        ogDescription: 'Your digital marketing agency focused on you, your business, your results.',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>