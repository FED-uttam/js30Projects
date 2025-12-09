<script setup>
import { ref, onMounted } from 'vue'

const secondHand = ref(null)
const minuteHand = ref(null)
const hourHand = ref(null)

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondHandDegrees = (seconds / 60) * 360 + 90
  secondHand.value.style.transform = `rotate(${secondHandDegrees}deg)`

  const mins = now.getMinutes()
  const minsDegrees = (mins / 60) * 360 + 90
  minuteHand.value.style.transform = `rotate(${minsDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees = (hours / 12) * 360 + 90
  hourHand.value.style.transform = `rotate(${hoursDegrees}deg)`
}

onMounted(() => {
  setDate()
  setInterval(setDate, 1000)
})
</script>

<template>
  <h2>JS Clock</h2>
  <div class="container">
    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand" ref="hourHand"></div>
        <div class="hand minute-hand" ref="minuteHand"></div>
        <div class="hand second-hand" ref="secondHand"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  background: #018ded url(https://unsplash.it/1500/1000?image=881&blur=5);
  background-size: cover;
  font-family: 'helvetica neue';
  text-align: center;
  font-size: 10px;
}
h2 {
  text-align: center;
  color: brown;
}
.container {
  background: #018ded bottom center;
  display: flex;
  width: 100vw;
  height: 70vh;
}
.clock {
  width: 20rem;
  height: 20rem;
  border: 20px solid papayawhip;
  border-radius: 50%;
  margin: auto;
  padding: 2rem;
  box-shadow:
    0 0 0 8px rgba(0, 0, 0, 0.1),
    inset 0 0 0 3px #efefef,
    inset 0 0 10px black,
    0 0 10px rgba(0, 0, 0, 0.2);
}
.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(3px);
}
.hand {
  width: 50%;
  height: 6px;
  background: #552f2f;
  border: 2px solid red;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
</style>
