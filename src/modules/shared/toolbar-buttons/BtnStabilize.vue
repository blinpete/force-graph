<script setup lang="ts">
import { network } from '../store'
import GraphToolbarButton from './GraphToolbarButton.vue'
</script>

<template>
  <GraphToolbarButton @click="network?.stabilize()">
    <!-- <span class="i-icon-park-solid-aiming" /> -->
    <span class="i-ic-sharp-crop-free" />
  </GraphToolbarButton>
</template>
