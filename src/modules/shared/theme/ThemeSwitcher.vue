<script setup lang="ts">
import GraphToolbarButton from '../GraphToolbarButton.vue'
import { nextTheme, theme } from './store'
</script>

<template>
  <GraphToolbarButton
    @click="nextTheme()"
  >
    <span v-if="theme === 'dark'" class="i-tabler-moon" />
    <span v-else class="i-tabler-sun" />
    <!-- <span class="i-tabler-coffee" /> -->
  </GraphToolbarButton>
</template>
