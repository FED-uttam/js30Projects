<script setup>
import { ref, onMounted, defineProps } from 'vue'

const secondHand = ref(null)
const minuteHand = ref(null)
const hourHand = ref(null)

const props = defineProps({
  theme: String,
})

const setDate = () => {
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
  <div class="container" :class="{ Dark: props.theme }">
    <div class="clock">
      <div class="clock-face">
        <div class="roman roman1">I</div>
        <div class="roman roman2">II</div>
        <div class="roman roman3">III</div>
        <div class="roman roman4">IV</div>
        <div class="roman roman5">V</div>
        <div class="roman roman6">VI</div>
        <div class="roman roman7">VII</div>
        <div class="roman roman8">VIII</div>
        <div class="roman roman9">IX</div>
        <div class="roman roman10">X</div>
        <div class="roman roman11">XI</div>
        <div class="roman roman12">XII</div>
        <div class="hand hour-hand" ref="hourHand"></div>
        <div class="hand minute-hand" ref="minuteHand"></div>
        <div class="hand second-hand" ref="secondHand"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: brown;
}
.container {
  background: #dfecf4;
  display: flex;
  width: 100vw;
  height: 70vh;
}
.Dark {
  background: black;
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
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
.hour-hand {
  height: 8px;
  background: #a304f8;
}
.minute-hand {
  height: 6px;
  background: #eeff05;
}
.second-hand {
  height: 4px;
  background: #ff1404;
}
.roman {
  position: absolute;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transform: translate(-50%, -50%);
}
.roman12 {
  top: 0%;
  left: 50%;
}
.roman1 {
  top: 9%;
  left: 80%;
}
.roman2 {
  top: 25%;
  left: 94%;
}
.roman3 {
  top: 50%;
  left: 100%;
}
.roman4 {
  top: 72%;
  left: 94%;
}
.roman5 {
  top: 93%;
  left: 77%;
}
.roman6 {
  top: 100%;
  left: 50%;
}
.roman7 {
  top: 90%;
  left: 25%;
}
.roman8 {
  top: 71%;
  left: 7%;
}
.roman9 {
  top: 50%;
  left: 0%;
}
.roman10 {
  top: 25%;
  left: 5%;
}
.roman11 {
  top: 7%;
  left: 23%;
}
</style>
