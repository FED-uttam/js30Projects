<script setup>
import { ref, computed, onMounted } from 'vue'
import Balance from './Balance.vue'
import IncomeExpenses from './IncomeExpenses.vue'
import TransactionLists from './TransactionLists.vue'
import AddTransaction from './AddTransaction.vue'
import { useToast } from 'vue-toastification'

const transactions = ref([])

const toast = useToast()
//get Total Income
const totalAmount = computed(() => {
  return transactions.value.reduce((acc, trans) => {
    return acc + trans.amount
  }, 0)
})

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, trans) => {
      return acc + trans.amount
    }, 0)
})

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, trans) => {
      return acc + trans.amount
    }, 0)
})

const handleTransaction = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    text: transactionData.text,
    amount: transactionData.amount,
  })
  saveTrnasactions()
  toast.success('Entry Submitted Successfully')
}

const deleteList = (id) => {
  transactions.value = transactions.value.filter((transactions) => transactions.id != id)
  saveTrnasactions()
  toast.success('Transaction Deleted')
}
const generateId = () => {
  return Math.floor(Math.random() * 100000)
}

// save to locale Storage
const saveTrnasactions = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}

// check for saved transactions
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})
</script>

<template>
  <div class="main">
    <div class="container">
      <h2>Expense Tracker</h2>
      <Balance :totalAmount="+totalAmount" />
      <IncomeExpenses :income="+income" :expense="+expense" />
      <AddTransaction @transaction-submitted="handleTransaction" />
    </div>
    <div class="container">
      <TransactionLists :transactions="transactions" @delete-list="deleteList" />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

:root {
  --bg: #f4f6f8;
  --card-bg: #ffffff;
  --primary: #4f46e5;
  --text: #1f2937;
  --muted: #6b7280;
  --radius: 14px;
  --shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

* {
  box-sizing: border-box;
}

.main {
  display: flex;
  gap: 24px;
  padding: 40px 20px;
  justify-content: center;
  flex-wrap: wrap;
  background: var(--bg);
  font-family: 'Inter', sans-serif;
  color: var(--text);
  min-height: 100vh;
}

/* Card Container */
.container {
  width: 380px;
  background: var(--card-bg);
  padding: 28px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Typography */
h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary);
  text-align: center;
}

h3 {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 10px;
  margin: 30px 0 15px;
  font-weight: 600;
}

h4 {
  margin: 0;
  text-transform: uppercase;
  font-size: 13px;
  color: var(--muted);
  letter-spacing: 1px;
}

/* Responsive Layout */
@media (max-width: 900px) {
  .main {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
}
</style>
