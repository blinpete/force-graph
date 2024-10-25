<script setup lang="ts">
import { network } from '@/modules/shared/store'
import GraphToolbarButton from '@/modules/shared/toolbar-buttons/GraphToolbarButton.vue'
</script>

<template>
  <GraphToolbarButton @click="network?.addEdgeMode()">
    <span class="i-lets-icons-line-alt" />
  </GraphToolbarButton>
</template>
