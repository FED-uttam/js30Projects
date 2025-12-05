<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import keysData from '@/data/drumKeys.json'

const keys = ref(keysData)

const activeKey = ref(null)
const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  activeKey.value = keyCode

  setTimeout(() => {
    if (activeKey.value === keyCode) {
      activeKey.value = null
    }
  }, 150)
}

const handleKeyDown = (e) => {
  playSound(e.keyCode)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="main">
    <h1>Drums</h1>

    <!-- Center container -->
    <div class="keys-container">
      <div
        class="drumKeys"
        :class="{ playing: activeKey === item.keyCode }"
        v-for="item in keys"
        :key="item.keyCode"
        :data-key="item.keyCode"
      >
        <kbd>{{ item.keyChar }}</kbd>
        <span class="soundName">{{ item.sound }}</span>
      </div>
    </div>
  </div>
  <audio v-for="key in keys" :key="key.keyCode" :data-key="key.keyCode" :src="key.src"></audio>
</template>

<style scoped>
.main {
  background: url('@/images/background.jpg') bottom center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center; /* Centers keys horizontally */
  justify-content: center; /* Centers everything vertically */
}
h1 {
  color: #ffc600;
}
.keys-container {
  display: flex;
  gap: 20px; /* Space between drum keys */
  flex-wrap: wrap;
  justify-content: center; /* Center inside container */
  transition: all 0.07s ease;
}
.playing {
  transform: scale(1.2);
  border-color: #e617b2;
  box-shadow: 0 0 1rem #da1313;
}
.drumKeys {
  padding: 20px;
  min-width: 80px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
}
.soundName {
  display: block;
}
</style>
