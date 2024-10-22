<script setup lang="ts">
import { ref } from 'vue'
import GraphToolbarButton from './GraphToolbarButton.vue'
import { network } from './store'

const winds = [
  { values: ['off'], icon: 'i-tabler-wind-off', setting: { x: 0, y: 0 } },
  { values: ['down'], icon: 'i-tabler-wind rotate-90', setting: { y: 3, x: 0 } },
  { values: ['left'], icon: 'i-tabler-wind rotate-180', setting: { x: -3, y: 0 } },
  { values: ['up'], icon: 'i-tabler-wind rotate-270', setting: { y: -3, x: 0 } },
  { values: ['right'], icon: 'i-tabler-wind', setting: { x: 3, y: 0 } },
]

const wind = ref(winds[0])

function nextOption(current: string) {
  const idx = winds.findIndex(sh => sh.values.includes(current))
  return (idx + 1) % winds.length
}
</script>

<template>
  <GraphToolbarButton
    @click="() => {
      wind = winds[nextOption(wind.values[0])]
      network?.setOptions({ physics: { wind: wind.setting } })
    }"
  >
    <span :class="wind.icon" />
  </GraphToolbarButton>
</template>
