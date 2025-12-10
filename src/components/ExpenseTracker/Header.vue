<script setup>
import { ref, computed } from 'vue'
import Balance from './Balance.vue'
import IncomeExpenses from './IncomeExpenses.vue'
import TransactionLists from './TransactionLists.vue'
import AddTransaction from './AddTransaction.vue'
import { useToast } from 'vue-toastification'

const transactions = ref([{"id":1,"text":"Flower","amount":-20}])

const toast = useToast();
//get Total Income
const totalAmount = computed(()=> {
  return transactions.value.reduce((acc, trans) => {
    return acc + trans.amount
  }, 0)
});

const income = computed(() => {
  return transactions.value.filter((transaction)=> transaction.amount > 0).reduce((acc, trans)=> {
    return acc + trans.amount
  }, 0)
});

const expense = computed(() => {
  return transactions.value.filter((transaction)=> transaction.amount < 0).reduce((acc, trans)=> {
    return acc + trans.amount
  }, 0)
});

const handleTransaction = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    text : transactionData.text,
    amount: transactionData.amount
  })
console.log(generateId())
  toast.success("Entry Submitted Successfully");
}

const generateId = () => {
  return Math.floor(Math.random() * 100000)
}
</script>

<template>
  <div class="container">
    <h2>Expense Tracker</h2>
    <Balance :totalAmount="+totalAmount"/>
    <IncomeExpenses :income="+income" :expense="+expense"/>
    <TransactionLists :transactions="transactions"/>
    <AddTransaction @transaction-submitted="handleTransaction"/>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

* {
  box-sizing: border-box;
}

body {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
}

.container {
  margin: 30px auto;
  width: 400px;
}

h1 {
  letter-spacing: 1px;
  margin: 0;
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}
</style>



