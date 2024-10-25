<script setup lang="ts">
import GraphToolbarButton from '../GraphToolbarButton.vue'
import { nextTheme, store } from './store'
</script>

<template>
  <GraphToolbarButton
    @click="nextTheme()"
  >
    <span v-if="store === 'dark'" class="i-tabler-moon" />
    <span v-else-if="store === 'light'" class="i-tabler-sun" />
    <span v-else class="i-tabler-device-desktop" />
    <!-- <span class="i-tabler-coffee" /> -->
  </GraphToolbarButton>
</template>
