<script setup>
import { ref } from 'vue'

const keys = ref([
  { "keyCode": 65, "keyChar": "A", "sound": "clap", "src": "sounds/clap.wav" },
  { "keyCode": 83, "keyChar": "S", "sound": "hihat", "src": "sounds/hihat.wav" },
  { "keyCode": 68, "keyChar": "D", "sound": "kick", "src": "sounds/kick.wav" },
  { "keyCode": 70, "keyChar": "F", "sound": "openhat", "src": "sounds/openhat.wav" },
  { "keyCode": 71, "keyChar": "G", "sound": "boom", "src": "sounds/boom.wav" },
  { "keyCode": 72, "keyChar": "H", "sound": "ride", "src": "sounds/ride.wav" },
  { "keyCode": 74, "keyChar": "J", "sound": "snare", "src": "sounds/snare.wav" },
  { "keyCode": 75, "keyChar": "K", "sound": "tom", "src": "sounds/tom.wav" },
  { "keyCode": 76, "keyChar": "L", "sound": "tink", "src": "sounds/tink.wav" }
])
</script>

<template>
  <div class="main">
    <h2>Drums</h2>

    <!-- Center container -->
    <div class="keys-container">
      <div class="drumKeys" v-for="item in keys" :key="item.keyCode">
        <kbd>{{ item.keyChar }}</kbd>
        <span class="soundName">{{ item.sound }}</span>
      </div>
    </div>
  </div>
  <div class="audioFiles" v-for="key in keys" :key="key.keyCode">
    <audio :src="key.src" />
  </div>
</template>


<style scoped>
.main {
  background: url('@/images/background.jpg') bottom center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;    /* Centers keys horizontally */
  justify-content: center; /* Centers everything vertically */
}

.keys-container {
  display: flex;
  gap: 20px;               /* Space between drum keys */
  flex-wrap: wrap;
  justify-content: center; /* Center inside container */
}

.drumKeys {
  border: 2px solid #ffcc00;
  padding: 20px;
  min-width: 80px;
  background: rgba(0,0,0,0.4);
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
