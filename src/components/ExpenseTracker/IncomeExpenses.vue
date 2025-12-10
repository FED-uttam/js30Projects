<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  income: {
    type: Number,
    required: true,
    default: 0
  },
  expense: {
    type: Number,
    required: true,
    default: 0
  }
})

</script>

<template>
  <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">${{ props.income }}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">${{ props.expense }}</p>
        </div>
  </div>
</template>

<style scoped>
.inc-exp-container {
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    padding: 20px;
    justify-content: space-between;
    margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}
.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}
.money {
    font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}
.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
</style>



