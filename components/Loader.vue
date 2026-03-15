<template>
  <div class="orange-loader">
    <div class="loader-content">
      <div class="spinner"></div>
      <h2 class="brand">OMNIMAVENS</h2>
      <p class="status">Analyzing Strategy...</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.orange-loader {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.4s ease-in-out;
}

.loader-content {
  text-align: center;
}

/* 🔥 Glowing Orange Spinner */
.spinner {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 6px solid rgba(255, 140, 0, 0.15);
  border-top: 6px solid #E08322;
  animation: spin 1s linear infinite;
  margin: 0 auto 30px;
  box-shadow: 0 0 25px rgba(255, 122, 0, 0.5);
}

/* Brand */
.brand {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
  margin-bottom: 10px;
}

.brand span {
  color: #E08322;
}

/* Status */
.status {
  color: #E08322;
  font-size: 16px;
  letter-spacing: 1px;
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
