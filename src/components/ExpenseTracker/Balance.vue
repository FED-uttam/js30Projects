<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  totalAmount: {
    type: Number,
    required: true
  }
})

const balanceClass = computed(()=> {
  return props.totalAmount > 0 ? 'positive' : 'negative'
})

</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance" :class="balanceClass">${{ props.totalAmount }}</h1>
</template>
<style scoped>
.positive {
  color: green;
}
.negative {
  color: rgb(255, 63, 63)
}
</style>
