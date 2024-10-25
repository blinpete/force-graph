<script setup lang="ts">
import { network, settings } from '../store'
import GraphToolbarButton from './GraphToolbarButton.vue'
</script>

<template>
  <GraphToolbarButton
    @click="() => {
      if (settings.seed) settings.seed = undefined
      else {
        settings.seed = network?.getSeed().toString()
      }
    }"
  >
    <span v-if="settings.seed" class="i-mdi-seed-outline" />
    <span v-else class="i-mdi-seed-off-outline" />
  </GraphToolbarButton>
</template>
