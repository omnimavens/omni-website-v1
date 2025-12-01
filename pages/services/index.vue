<template>
     <section class="about-hero">
        <div class="container">
            <h1 class="hero-title" data-aos="fade-up">
                Digital <span class="text-accent">Capabilities</span>
            </h1>
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="100">
A modular system of specialized services designed to work alone or together. We don't outsource; we execute in-house with dedicated pods
            </p>
        </div>
    </section>


     <section class="connection-section">
        <div class="container">
            <div class="conn-grid">
                <div data-aos="fade-right">
                    <span class="section-subtitle">Execution Matters</span>
                    <h2>Specialists, Not Generalists.</h2>
                    <p>Many agencies claim to do it all, but master nothing. At Omni Mavens, we operate as <strong>Specialized Pods</strong>.</p>
                    <p>Our SEO team doesn't touch Ads. Our Creative team doesn't write code. Each service is led by a subject-matter expert, ensuring you get deep expertise across every channel.</p>
                
                </div>
                <div data-aos="fade-left">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team Collaboration" class="conn-img">
                </div>
            </div>
        </div>
    </section>

     <section class="service-category">
        <div class="container">
            <div class="cat-header">
                <h2 class="cat-title"><i class="fa-solid fa-magnifying-glass"></i> Search & Discovery</h2>
                <p style="color:#888;">Strategies to capture demand and high-intent traffic.</p>
            </div>
            <div class="services-grid">
                
                <div class="service-card" data-aos="fade-up">
                    <div class="s-head">
                        <h3 class="s-title">SEO Services</h3>
                        <span class="s-tag">Foundation</span>
                    </div>
                    <p class="s-desc">We build the technical architecture and content authority required to rank for transactional keywords.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Technical & Local SEO</li>
                        <li><i class="fa-solid fa-check"></i> On-Page Optimization</li>
                        <li><i class="fa-solid fa-check"></i> High-DA Link Building</li>
                    </ul>
                    <NuxtLink :to="{ name: 'seo-services' }" class="s-link">Explore SEO <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="50">
                    <div class="s-head">
                        <h3 class="s-title">GEO & AI Search</h3>
                        <span class="s-tag">Innovation</span>
                    </div>
                    <p class="s-desc">Optimizing your brand entity for the new era of search: Google SGE, ChatGPT, and Answer Engines.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Generative Engine Opt.</li>
                        <li><i class="fa-solid fa-check"></i> Schema Architecture</li>
                        <li><i class="fa-solid fa-check"></i> Knowledge Graph Setup</li>
                    </ul>
                    <NuxtLink :to="{ name: 'geo-ai-optimization'}" class="s-link">Explore GEO <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="s-head">
                        <h3 class="s-title">PPC Management</h3>
                        <p class="s-tag">Acceleration</p>
                    </div>
                    <p class="s-desc">Scientific ad management focused on ROAS. We stop wasted spend and scale winning keywords.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Google Search & Shopping</li>
                        <li><i class="fa-solid fa-check"></i> Retargeting Campaigns</li>
                        <li><i class="fa-solid fa-check"></i> Landing Page Consulting</li>
                    </ul>
                    <NuxtLink :to="{ name: 'ppc-management'}" class="s-link">Explore PPC <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>

            </div>
        </div>
    </section>

    <section class="service-category">
        <div class="container">
            <div class="cat-header">
                <h2 class="cat-title"><i class="fa-solid fa-pen-nib"></i> Brand & Creative</h2>
                <p style="color:#888;">Visuals and narratives that build trust and authority.</p>
            </div>
            <div class="services-grid">
                
                <div class="service-card" data-aos="fade-up">
                    <div class="s-head">
                        <h3 class="s-title">Content Marketing</h3>
                        <span class="s-tag">Authority</span>
                    </div>
                    <p class="s-desc">We produce "Thought Leadership" content that educates your market and supports your SEO strategy.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Blog Writing & Strategy</li>
                        <li><i class="fa-solid fa-check"></i> Website Copywriting</li>
                        <li><i class="fa-solid fa-check"></i> Lead Magnets / Whitepapers</li>
                    </ul>
                    <a href="/services/content-marketing" class="s-link">Explore Content <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="50">
                    <div class="s-head">
                        <h3 class="s-title">Branding & Creative</h3>
                        <span class="s-tag">Identity</span>
                    </div>
                    <p class="s-desc">Comprehensive visual identity systems. From Logo design to full brand guidelines and creative direction.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Logo & Identity Design</li>
                        <li><i class="fa-solid fa-check"></i> Brand Strategy Book</li>
                        <li><i class="fa-solid fa-check"></i> Marketing Collateral</li>
                    </ul>
                    <a href="/services/branding-creative" class="s-link">Explore Branding <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="s-head">
                        <h3 class="s-title">Social Media</h3>
                        <span class="s-tag">Engagement</span>
                    </div>
                    <p class="s-desc">Paid and organic social strategies to build community and drive top-of-funnel awareness.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Paid Social (Meta/TikTok)</li>
                        <li><i class="fa-solid fa-check"></i> Social Strategy & Mgmt</li>
                        <li><i class="fa-solid fa-check"></i> Video / Reel Production</li>
                    </ul>
                    <a href="/services/social-media-marketing" class="s-link">Explore Social <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    </section>

    <section class="service-category" style="border-bottom: none;">
        <div class="container">
            <div class="cat-header">
                <h2 class="cat-title"><i class="fa-solid fa-code"></i> Tech & Retention</h2>
                <p style="color:#888;">The engines that convert traffic and keep customers.</p>
            </div>
            <div class="services-grid">
                
                <div class="service-card" data-aos="fade-up">
                    <div class="s-head">
                        <h3 class="s-title">Website Development</h3>
                        <span class="s-tag">Infrastructure</span>
                    </div>
                    <p class="s-desc">High-performance websites built on Shopify or WordPress. Engineered for speed, mobile UX, and conversion.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Custom Theme Dev</li>
                        <li><i class="fa-solid fa-check"></i> Speed Optimization</li>
                        <li><i class="fa-solid fa-check"></i> CRO (Conversion Rate Opt)</li>
                    </ul>
                    <a href="/services/website-development" class="s-link">Explore Web <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div class="service-card" data-aos="fade-up" data-aos-delay="50">
                    <div class="s-head">
                        <h3 class="s-title">Email Marketing</h3>
                        <span class="s-tag">Retention</span>
                    </div>
                    <p class="s-desc">Automated lifecycle marketing. We turn one-time buyers into loyal advocates using data-driven flows.</p>
                    <ul class="s-list">
                        <li><i class="fa-solid fa-check"></i> Klaviyo / Mailchimp Setup</li>
                        <li><i class="fa-solid fa-check"></i> Drip Automation Flows</li>
                        <li><i class="fa-solid fa-check"></i> List Segmentation</li>
                    </ul>
                    <a href="/services/email-marketing" class="s-link">Explore Email <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    </section>

    <section class="process-section">
        <div class="container">
            <div style="text-align: center;">
                <span class="section-subtitle">How We Work</span>
                <h2 style="font-size: 36px;">The Omni Execution Model</h2>
            </div>
            <div class="process-steps">
                <div class="p-step" data-aos="fade-up" data-aos-delay="0">
                    <div class="p-num">01</div>
                    <h4 class="p-title">Audit & Diagnose</h4>
                    <p class="p-desc">We don't guess. We start every engagement with a deep-dive audit of your current data, tech stack, and competitors to find the gaps.</p>
                </div>
                <div class="p-step" data-aos="fade-up" data-aos-delay="100">
                    <div class="p-num">02</div>
                    <h4 class="p-title">Strategy & Roadmap</h4>
                    <p class="p-desc">We build a 90-day execution plan. You get clear KPIs, deliverables, and timelines so you know exactly what to expect.</p>
                </div>
                <div class="p-step" data-aos="fade-up" data-aos-delay="200">
                    <div class="p-num">03</div>
                    <h4 class="p-title">Execute & Optimize</h4>
                    <p class="p-desc">Our pods go to work. We launch campaigns, write code, and produce content, optimizing weekly based on live performance data.</p>
                </div>
            </div>
        </div>
    </section>


    <ContactFormSection/>

</template>

<script setup lang="ts">
    definePageMeta({
        title: 'Services Page',
        name: 'services',
    })

    useSeoMeta({
        title: ' Services | Digital Marketing Services', // Will become "Home - My Amazing Site"
        description: 'Welcome to the OmniMavens.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'OmniMavens - The Digital Marketing Agency',
        ogDescription: 'Your digital marketing agency focused on you, your business, your results.',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>