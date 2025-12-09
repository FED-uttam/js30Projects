<script setup>
import JSClock from './JSClock.vue'
</script>
<template>
  <div class="container">
    <h1>Home Page</h1>
  </div>
  <JSClock
    :size="260"
    theme="dark"
    borderColor="#374151"
    backgroundColor="#020617"
    handColor="#e5e7eb"
    secondHandColor="#ef4444"
    :showSecondHand="false"
  >
    <span>Dark Minimal (No Seconds)</span>
  </JSClock>
</template>
<style scoped>
html {
  color: red;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
}
</style>
