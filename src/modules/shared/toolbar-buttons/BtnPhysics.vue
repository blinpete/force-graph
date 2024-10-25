<script setup lang="ts">
import { settings } from '../store'
import GraphToolbarButton from './GraphToolbarButton.vue'
</script>

<template>
  <GraphToolbarButton
    @click="() => settings.physics = !settings.physics"
  >
    <!-- <span class="i-ion-play-circle-outline" /> -->
    <!-- <span class="i-ion-pause-circle-outline" /> -->
    <span v-if="settings.physics" class="i-ion-magnet" />
    <span v-else class="i-ion-magnet-outline" />
  </GraphToolbarButton>
</template>
