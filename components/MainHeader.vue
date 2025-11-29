<template>
    <header :class="{ shrink: isShrunk }">
        <h1>OMNIMAVENS</h1>
    </header>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const isShrunk = ref(false)

    const handleScroll = () => {
        isShrunk.value = window.scrollY > 50
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>
