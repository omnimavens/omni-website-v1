<template>
    <section class="about-hero">
        <div class="container">
            <h1 class="hero-title" data-aos="fade-up">
                Omni Mavens <br> <span class="text-accent">Insights</span>
            </h1>
            <p class="hero-desc" data-aos="fade-up" data-aos-delay="100">
Expert guides, data analysis, and strategies on Amazon FBA, SEO, PPC, and Digital Growth.           
             </p>
        </div>
    </section>

    <section class="blog-hero">
        <div class="container">
            <div class="featured-card" data-aos="fade-up">
                <div class="featured-thumb-img">
                    <img src="/public/images/local-seo.png" alt="Local SEO" class="featured-img">
                </div>
                <div class="featured-content">
                    <span class="meta-tag">Featured Blog</span>
                    <h2 class="featured-title">How to Dominate Google Maps and Local AI Search</h2>
                    <p class="featured-desc">
                        People are no longer searching only through traditional web results. They are discovering businesses through Google Maps, voice assistants, and AI-powered search experiences.
                    </p>
                    <div style="display: flex; align-items: center; gap: 20px; color: #666; font-size: 13px; margin-bottom: 30px;">
                        <span><i class="fa-regular fa-clock"></i> 12 Min Read</span>
                        <span><i class="fa-regular fa-calendar"></i> March 08, 2026</span>
                    </div>
                    <NuxtLink :to="{ name: 'local-seo-playbook-google-maps-ai-search' }" class="btn-primary">Read Article</NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <div class="filter-bar">
      <div class="container">
        <ul class="filter-list">
          <li
            v-for="cat in categories"
            :key="cat.value"
            class="filter-btn"
            :class="{ active: activeCategory === cat.value }"
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </li>
        </ul>
      </div>
    </div>

    <section class="blog-feed">
        <div class="container">
            
            <div class="blog-grid" id="blogGrid">

                <article class="article-card" data-category="tech" data-aos="fade-up" v-show="activeCategory === 'all' || activeCategory === 'tech'">
                    <div class="card-img-wrap">
                        <img src="/public/images/andromeda-thumb.png" alt="Coding" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Tech</span>
                            <span>Jan 16, 2026</span>
                        </div>
                        <h3 class="card-title"><NuxtLink :to="{ name: 'meta-andromeda-update-strategy-guide' }">Meta Andromeda Update 2026: The Ultimate Strategy Guide</NuxtLink></h3>
                        <p class="card-desc">Why your old targeting hacks are failing, and how to master AI-driven ad retrieval.</p>
                        <NuxtLink :to="{ name: 'meta-andromeda-update-strategy-guide' }" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                    </div>
                </article>

                <article class="article-card" data-category="tech" data-aos="fade-up" v-show="activeCategory === 'all' || activeCategory === 'tech'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Coding" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Tech</span>
                            <span>Nov 28, 2025</span>
                        </div>
                        <h3 class="card-title"><NuxtLink :to="{ name: 'inner-blog' }">The Modern Digital Marketing Blueprint</NuxtLink></h3>
                        <p class="card-desc">You aren’t losing sales because your ads are weak; you’re losing sales because your system is disconnected.</p>
                        <NuxtLink :to="{ name: 'inner-blog' }" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                    </div>
                </article>

                
                <article class="article-card" data-category="seo" data-aos="fade-up" data-aos-delay="0" v-show="activeCategory === 'all' || activeCategory === 'seo'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="SEO Strategy" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">SEO</span>
                            <span>Oct 12, 2025</span>
                        </div>
                        <h3 class="card-title"><a href="#">Technical SEO Checklist for Shopify Stores</a></h3>
                        <p class="card-desc">Why your theme might be killing your rankings, and how to fix crawl errors in 2025.</p>
                        <a href="#" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>


                <article class="article-card" data-category="ppc" data-aos="fade-up" data-aos-delay="100" v-show="activeCategory === 'all' || activeCategory === 'ppc'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2106&auto=format&fit=crop" alt="Google Ads" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Paid Ads</span>
                            <span>Oct 10, 2025</span>
                        </div>
                        <h3 class="card-title"><a href="#">Stop Boosting Posts: The Full-Funnel Strategy</a></h3>
                        <p class="card-desc">How to structure Meta campaigns to capture cold traffic and retarget warm leads profitably.</p>
                        <a href="#" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>



               

            </div>

            <!-- <div class="pagination">
                <a href="#" class="page-num active">1</a>
                <a href="#" class="page-num">2</a>
                <a href="#" class="page-num">3</a>
                <a href="#" class="page-num"><i class="fa-solid fa-chevron-right"></i></a>
            </div> -->

        </div>
    </section>

    <!-- <ContactFormSection /> -->


</template>

<script setup lang="ts">
    definePageMeta({
        title: ' Insights & Intelligence | Omni Mavens',
        name: 'blogs'
    })

    useSeoMeta({
        title: 'Digital Marketing Insights, SEO & Growth Strategies', 
        description: 'Explore expert insights on SEO, paid ads, AI search, and digital marketing strategies designed to help businesses increase traffic and revenue.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'Digital Marketing Insights, SEO & Growth Strategies',
        ogDescription: 'Explore expert insights on SEO, paid ads, AI search, and digital marketing strategies designed to help businesses increase traffic and revenue.',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

    const categories = [
        { label: "All Insights", value: "all" },
        { label: "SEO & Search", value: "seo" },
        { label: "Paid Media (PPC)", value: "ppc" },
        { label: "Amazon FBA", value: "amazon" },
        { label: "Social & Brand", value: "social" },
        { label: "Tech & Dev", value: "tech" },
    ];

    const activeCategory = ref("all");

</script>