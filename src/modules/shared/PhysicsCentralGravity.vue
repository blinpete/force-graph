<script setup lang="ts">
import { ref } from 'vue'
import GraphToolbarButton from './GraphToolbarButton.vue'
import { network } from './store'

const strongGravity = ref(false)
</script>

<template>
  <GraphToolbarButton
    @click="() => {
      strongGravity = !strongGravity
      network?.setOptions({
        physics: {
          forceAtlas2Based: {
            centralGravity: strongGravity ? 1 : 0.01,
          },
        },
      })
    }"
  >
    <span v-if="strongGravity" class="i-solar-black-hole-linear" />
    <span v-else class="i-solar-black-hole-line-duotone" />
  </GraphToolbarButton>
</template>
