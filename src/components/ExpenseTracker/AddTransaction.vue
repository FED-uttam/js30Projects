<script setup>
  import { ref, defineEmits } from 'vue'
  import { useToast } from 'vue-toastification'

  const text = ref('');
  const amount = ref('');

  const toast = useToast();

  const emit = defineEmits(['transactionSubmitted']);

  const onSubmit = () => {
    if(!text.value || !amount.value) {
      toast.error('Please Entet The Values');
      return
    }

    const transactionData = {
      text: text.value,
      amount: amount.value

    }

    emit('transactionSubmitted', transactionData);

    console.log(text.value, amount.value)
    text.value = '';
    amount.value= '';
  }
 </script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" v-model="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
</template>

<style scoped>
label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}
.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}
</style>
