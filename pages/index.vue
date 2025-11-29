<template>
    <h2>Digital Marketing Agency</h2>
</template>

<script setup lang="ts">
    definePageMeta({
        title: 'Home Page',
    })

    useSeoMeta({
        title: 'OmniMavens - The Digital Marketing Agency', // Will become "Home - My Amazing Site"
        description: 'Welcome to the Omni Mavens.',
        
        // Social Media Cards (Open Graph)
        ogTitle: 'OmniMavens - The Digital Marketing Agency',
        ogDescription: 'Your digital marketing agency focused on you, your business, your results.',
        ogImage: 'https://www.omnimavens.com/wp-content/uploads/2025/05/omnimavens-logo-888810.svg',
        twitterCard: 'summary_large_image',
    })

</script>