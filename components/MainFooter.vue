<template>
    <footer>
        <h1>Contact</h1>
        <p>Copyright © {{ currentYear }} OmniMavens. All Rights Reserved.</p>
    </footer>
</template>


<script setup>
    const currentYear = new Date().getFullYear()
</script>