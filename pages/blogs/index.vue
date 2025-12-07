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
                <div style="height: 100%;">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Marketing Data" class="featured-img">
                </div>
                <div class="featured-content">
                    <span class="meta-tag">Featured Report</span>
                    <h2 class="featured-title">The State of Digital Marketing in 2025: AI, Privacy, and Profit</h2>
                    <p class="featured-desc">
                        With Google SGE reshaping search and tracking pixels disappearing, the playbook has changed. Here is the new roadmap for CMOs and Founders.
                    </p>
                    <div style="display: flex; align-items: center; gap: 20px; color: #666; font-size: 13px; margin-bottom: 30px;">
                        <span><i class="fa-regular fa-clock"></i> 8 Min Read</span>
                        <span><i class="fa-regular fa-calendar"></i> Nov 28, 2025</span>
                    </div>
                    <NuxtLink :to="{ name: 'inner-blog' }" class="btn-primary">Read Full Report</NuxtLink>
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

                <article class="article-card" data-category="amazon" data-aos="fade-up" data-aos-delay="200" v-show="activeCategory === 'all' || activeCategory === 'amazon'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop" alt="Amazon Boxes" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Amazon FBA</span>
                            <span>Oct 05, 2025</span>
                        </div>
                        <h3 class="card-title"><a href="#">Decoding the A9 Algorithm Update</a></h3>
                        <p class="card-desc">Amazon is prioritizing visual CTR more than keywords. Here is how to adapt your gallery.</p>
                        <a href="#" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>

                <article class="article-card" data-category="social" data-aos="fade-up" v-show="activeCategory === 'all' || activeCategory === 'social'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" alt="Creative Meeting" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Branding</span>
                            <span>Sep 28, 2025</span>
                        </div>
                        <h3 class="card-title"><a href="#">Color Psychology in E-Commerce</a></h3>
                        <p class="card-desc">Why your "Trust Blue" logo might be boring your customers, and when to use "Neon."</p>
                        <a href="#" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>

                <article class="article-card" data-category="tech" data-aos="fade-up" v-show="activeCategory === 'all' || activeCategory === 'tech'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Coding" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Web Dev</span>
                            <span>Sep 15, 2025</span>
                        </div>
                        <h3 class="card-title"><a href="#">Core Web Vitals: Speed = Revenue</a></h3>
                        <p class="card-desc">Every second of load time drops conversion by 4%. Optimize your Liquid code now.</p>
                        <a href="#" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>

                <article class="article-card" data-category="seo" data-aos="fade-up" v-show="activeCategory === 'all' || activeCategory === 'seo'">
                    <div class="card-img-wrap">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" alt="Local SEO" class="card-img">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="card-cat">Local SEO</span>
                            <span>Sep 10, 2025</span>
                        </div>
                        <h3 class="card-title"><a href="#">Dominate the "Map Pack"</a></h3>
                        <p class="card-desc">Local SEO strategies for service businesses to get more calls from Google Maps.</p>
                        <a href="#" class="read-more">Read Article <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>

            </div>

            <div class="pagination">
                <a href="#" class="page-num active">1</a>
                <a href="#" class="page-num">2</a>
                <a href="#" class="page-num">3</a>
                <a href="#" class="page-num"><i class="fa-solid fa-chevron-right"></i></a>
            </div>

        </div>
    </section>

    <!-- <ContactFormSection /> -->


</template>

<script setup lang="ts">
    definePageMeta({
        title: ' Insights & Intelligence | Omni Maven',
        name: 'blogs'
    })

    useSeoMeta({
        title: ' Insights & Intelligence | Omni Maven', // Will become "Home - My Amazing Site"
        description: 'Omni Mavens Insights. Expert guides, data analysis, and strategies on Amazon FBA, SEO, PPC, and Digital Growth.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'Insights & Intelligence | Omni Maven',
        ogDescription: 'Omni Mavens Insights. Expert guides, data analysis, and strategies on Amazon FBA, SEO, PPC, and Digital Growth.',
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