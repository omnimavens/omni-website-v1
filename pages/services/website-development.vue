<template>
    <section class="about-hero">
        <div class="container">
            <div class="breadcrumb" data-aos="fade-up">
                <NuxtLink :to="{ name: 'home' }">Home</NuxtLink> / <NuxtLink :to="{ name: 'seo-services' }">Services</NuxtLink> / <span style="color:#fff;">Web Development</span>
            </div>
            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
                Website <br> <span class="text-accent">Development</span>
            </h1>
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="200">
                We build high-performance Shopify and WordPress sites engineered for speed, SEO, and conversion. Design that sells, code that scales. 
            </p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <div class="layout-grid">
                
                <div class="main-col">
                    
                    <div class="highlight-box" data-aos="fade-up">
                        <h3><i class="fa-solid fa-code text-accent"></i> Development Capabilities</h3>
                        <p style="margin-bottom: 20px; font-size: 14px; color: #aaa;">
                            From custom builds to conversion optimization, our full-stack team delivers:
                        </p>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> <strong>Shopify Plus:</strong> Custom Themes & Apps.</li>
                            <li><i class="fa-solid fa-check"></i> <strong>WordPress:</strong> Enterprise B2B Sites.</li>
                            <li><i class="fa-solid fa-check"></i> <strong>Headless Commerce:</strong> React & Next.js.</li>
                            <li><i class="fa-solid fa-check"></i> <strong>CRO Audits:</strong> Speed & UX Optimization.</li>
                        </ul>
                    </div>

                    <div class="content-block" data-aos="fade-up">
                        <span class="section-subtitle">The Reality</span>
                        <h2>Why "Pretty" Websites Fail</h2>
                        <p>
                            Most agencies design for awards, not for customers. They use heavy animations that slow down your site and confuse mobile users. <strong>Speed is a feature.</strong> Every second of load time costs you 4.42% in conversion rate.
                        </p>
                        <p>
                            We build "Performance Websites." This means clean code, optimized image stacks, and a User Interface (UI) designed specifically to guide the user's thumb to the "Buy Now" button.
                        </p>
                        <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" alt="Coding on Monitor" class="content-img">
                    </div>

                    <div class="content-block" data-aos="fade-up">
                        <h2>The Build Process</h2>
                        <p>Our agile development methodology ensures transparency and speed.</p>

                        <div class="framework-section">
                            <div class="framework-line"></div>
                            
                            <div class="framework-card">
                                <div class="f-dot"></div>
                                <div class="f-header">
                                    <h3 class="f-title">UX Architecture & Design</h3>
                                    <span class="f-step">01</span>
                                </div>
                                <p class="f-desc">We start in Figma. We map out the user journey, wireframe key landing pages, and design a "Mobile-First" interface. You get a clickable prototype before we write a single line of code.</p>
                            </div>

                            <div class="framework-card">
                                <div class="f-dot"></div>
                                <div class="f-header">
                                    <h3 class="f-title">Clean Code Development</h3>
                                    <span class="f-step">02</span>
                                </div>
                                <p class="f-desc">Whether it's Liquid (Shopify) or PHP (WordPress), we write semantic code. We implement lazy-loading, minify CSS/JS, and ensure you score 90+ on Google PageSpeed Insights.</p>
                            </div>

                            <div class="framework-card">
                                <div class="f-dot"></div>
                                <div class="f-header">
                                    <h3 class="f-title">QA & CRO Launch</h3>
                                    <span class="f-step">03</span>
                                </div>
                                <p class="f-desc">Launch day is just day one. We stress-test the site on all devices, set up advanced event tracking (GA4), and prepare A/B tests to optimize conversion post-launch.</p>
                            </div>
                        </div>
                    </div>

                    

                    

                </div>
                <aside class="right-sidebar">
                    <div class="sidebar-card" data-aos="fade-left">
                        <h3 style="font-size: 18px; margin-bottom: 20px; color:#fff;">Deliverables</h3>
                        <ul class="check-list">
                            <li><i class="fa-solid fa-check text-accent"></i>  Custom UI/UX Design</li>
                            <li><i class="fa-solid fa-check text-accent"></i>  Full-Stack Development</li>
                            <li><i class="fa-solid fa-check text-accent"></i>  Mobile Responsiveness</li>
                            <li><i class="fa-solid fa-check text-accent"></i>  Speed Optimization (Core Vitals)</li>
                            <li><i class="fa-solid fa-check text-accent"></i>  SEO Structure Setup</li>
                            <li><i class="fa-solid fa-check text-accent"></i>  Payment Gateway Integration</li>
                        </ul>
                        <a href="contact.html" class="btn-primary" style="width: 100%; margin-top: 10px;">Get a Quote</a>
                    </div>

                    <div class="sidebar-card" style="border-color: #333;" data-aos="fade-left" data-aos-delay="100">
                        <h5 style="color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 15px;">Head of Engineering</h5>
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                            <img src="https://ui-avatars.com/api/?name=Dev+Lead&background=E08322&color=000" alt="Strategist" style="width: 50px; height: 50px; border-radius: 50%;">
                            <div>
                                <h4 style="font-size: 16px; margin: 0;">Tech Team</h4>
                                <span style="font-size: 12px; color: var(--brand-accent);">Omni Mavens</span>
                            </div>
                        </div>
                        <p style="font-size: 13px; color: #888; line-height: 1.5;">
                            "Code should be invisible. If the user notices the site loading, we failed. We build seamless experiences."
                        </p>
                    </div>
                </aside>

            </div>
        </div>
    </section>

    <section class="platform-section">
        <div class="container">
            <div class="platform-header" data-aos="fade-up">
                <span class="section-subtitle">Technology Stack</span>
                <h2>Platform Expertise</h2>
                <p style="color: #aaa; max-width: 600px; margin: 20px auto 0;">We don't rely on generic templates. We build custom solutions on the world's most robust CMS platforms.</p>
            </div>
            <div class="platform-grid">
                
                <div class="platform-card shopify-card" data-aos="fade-right">
                    <i class="fa-brands fa-shopify plat-icon shopify-color"></i>
                    <h3>Shopify Plus</h3>
                    <p>The gold standard for DTC brands. We build high-converting custom themes and optimize checkout flows for scale.</p>
                    <ul class="plat-features">
                        <li><i class="fa-solid fa-circle"></i> Custom Liquid Coding</li>
                        <li><i class="fa-solid fa-circle"></i> OS 2.0 Theme Architecture</li>
                        <li><i class="fa-solid fa-circle"></i> App Integration & APIs</li>
                        <li><i class="fa-solid fa-circle"></i> Checkout Extensibility</li>
                    </ul>
                </div>

                <div class="platform-card wp-card" data-aos="fade-up">
                    <i class="fa-brands fa-wordpress plat-icon wp-color"></i>
                    <h3>WordPress</h3>
                    <p>Flexible, SEO-friendly, and powerful. Ideal for B2B service companies and content-heavy publishers.</p>
                    <ul class="plat-features">
                        <li><i class="fa-solid fa-circle"></i> Custom Theme Development</li>
                        <li><i class="fa-solid fa-circle"></i> Advanced Custom Fields (ACF)</li>
                        <li><i class="fa-solid fa-circle"></i> WooCommerce Builds</li>
                        <li><i class="fa-solid fa-circle"></i> Enterprise Security</li>
                    </ul>
                </div>

                <div class="platform-card react-card" data-aos="fade-left">
                    <i class="fa-brands fa-react plat-icon react-color"></i>
                    <h3>Headless / React</h3>
                    <p>For brands that need ultimate speed and flexibility. We decouple the frontend to deliver instant load times.</p>
                    <ul class="plat-features">
                        <li><i class="fa-solid fa-circle"></i> Next.js Framework</li>
                        <li><i class="fa-solid fa-circle"></i> Progressive Web Apps (PWA)</li>
                        <li><i class="fa-solid fa-circle"></i> Custom API Connections</li>
                        <li><i class="fa-solid fa-circle"></i> Instant Page Transitions</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <section class="service-case-section">
        <div class="container">
            <div style="text-align: center; margin-bottom: 80px;" data-aos="fade-up">
                <span class="section-subtitle">Real Results</span>
                <h2 style="font-size: 40px;">Engineering Success</h2>
            </div>

            <div class="sc-grid">
                <div data-aos="fade-right">
                    <div class="sc-image-wrap">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Shopify Dashboard" class="sc-img">
                    </div>
                </div>
                <div class="sc-text" data-aos="fade-left">
                    <span class="sc-tag">E-Commerce</span>
                    <h2 class="sc-title">Shopify 2.0 Migration</h2>
                    <p class="sc-desc">
                        A beauty brand was on a slow, bloated theme. We migrated them to a custom Shopify 2.0 build with headless elements. Site speed went from 4s to 0.8s.
                    </p>
                    <div class="sc-metrics">
                        <div class="sc-metric-item"><h4>0.8s</h4><p>Load Time</p></div>
                        <div class="sc-metric-item"><h4>+42%</h4><p>Mobile Sales</p></div>
                        <div class="sc-metric-item"><h4>95</h4><p>Speed Score</p></div>
                    </div>
                    <a href="/case-studies.html" class="btn-primary" style="padding: 12px 30px;">Read Story</a>
                </div>
            </div>

            <div class="sc-grid reverse" style="margin-top: 100px;">
                <div data-aos="fade-left">
                    <div class="sc-image-wrap">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Corporate Site" class="sc-img">
                    </div>
                </div>
                <div class="sc-text" data-aos="fade-right">
                    <span class="sc-tag">B2B Corporate</span>
                    <h2 class="sc-title">Lead Gen Overhaul</h2>
                    <p class="sc-desc">
                        A logistics firm had a website that looked like 2010. We redesigned the UX to focus on trust signals and streamlined the "Get Quote" flow.
                    </p>
                    <div class="sc-metrics">
                        <div class="sc-metric-item"><h4>+200%</h4><p>Leads</p></div>
                        <div class="sc-metric-item"><h4>-40%</h4><p>Bounce Rate</p></div>
                        <div class="sc-metric-item"><h4>Top 3</h4><p>SEO Rank</p></div>
                    </div>
                    <a href="/case-studies.html" class="btn-primary" style="padding: 12px 30px;">Read Story</a>
                </div>
            </div>

            <div class="sc-grid" style="margin-top: 100px;">
                <div data-aos="fade-right">
                    <div class="sc-image-wrap">
                        <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" alt="Code Screen" class="sc-img">
                    </div>
                </div>
                <div class="sc-text" data-aos="fade-left">
                    <span class="sc-tag">Custom Dev</span>
                    <h2 class="sc-title">Headless React Build</h2>
                    <p class="sc-desc">
                        A subscription box company needed complex logic that Shopify couldn't handle natively. We built a Headless React frontend connected to Shopify's backend API.
                    </p>
                    <div class="sc-metrics">
                        <div class="sc-metric-item"><h4>100%</h4><p>Uptime</p></div>
                        <div class="sc-metric-item"><h4>Custom</h4><p>Checkout</p></div>
                        <div class="sc-metric-item"><h4>+25%</h4><p>AOV</p></div>
                    </div>
                    <a href="/case-studies.html" class="btn-primary" style="padding: 12px 30px;">Read Story</a>
                </div>
            </div>

        </div>
    </section>



</template>

<script setup lang="ts">
    definePageMeta({
        title: 'Website Development & UX Design | Omni Mavens',
        name: 'website-development',
    })

    useSeoMeta({
        title: ' Website Development & UX Design | Omni Mavens', // Will become "Home - My Amazing Site"
        description:'Strategic Content Marketing by Omni Mavens. We build authority through SEO blogs, video, whitepapers, and multi-channel distribution strategies.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'Website Development & UX Design | Omni Mavens',
        ogDescription:'Strategic Content Marketing by Omni Mavens. We build authority through SEO blogs, video, whitepapers, and multi-channel distribution strategies..',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>