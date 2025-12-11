<script setup>
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const text = ref('')
const amount = ref('')
const transactionType = ref('income')
const toast = useToast()

const emit = defineEmits(['transactionSubmitted'])

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Please Entet The Values')
    return
  }

  let finalAmount = Number(amount.value)

  if (transactionType.value === 'expense') {
    finalAmount = -Math.abs(finalAmount)
  }

  const transactionData = {
    text: text.value,
    amount: finalAmount,
  }

  emit('transactionSubmitted', transactionData)

  text.value = ''
  amount.value = ''
}
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Transaction Name</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount <br /></label>
      <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
    </div>
    <button @click="transactionType = 'income'" class="btn income-btn">Add Income</button>
    <button @click="transactionType = 'expense'" class="btn expense-btn">Add Expense</button>
  </form>
</template>

<style scoped>
/* Form Title */
h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
  color: var(--primary);
}

/* Form Control */
.form-control {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: var(--muted);
}

/* Inputs */
input[type='text'],
input[type='number'] {
  padding: 12px 14px;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: 0.25s ease;
  background: #f9fafb;
}

input:focus {
  border-color: var(--primary);
  background: white;
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 7, 237, 0.15);
}

/* Buttons Group */
.btn {
  display: block;
  width: 100%;
  padding: 14px;
  margin-top: 12px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  transition: 0.25s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

/* Income Button */
.income-btn {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.income-btn:hover {
  background: linear-gradient(135deg, #16a34a, #15803d);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(34, 197, 94, 0.25);
}

/* Expense Button */
.expense-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.expense-btn:hover {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(239, 68, 68, 0.25);
}

/* Smooth Press */
.btn:active {
  transform: scale(0.98);
}
</style>
