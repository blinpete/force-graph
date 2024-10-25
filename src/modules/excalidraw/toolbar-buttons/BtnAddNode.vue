<script setup lang="ts">
import { network } from '@/modules/shared/store'
import GraphToolbarButton from '@/modules/shared/toolbar-buttons/GraphToolbarButton.vue'
</script>

<template>
  <GraphToolbarButton @click="network?.addNodeMode()">
    <span class="i-octicon-dot-fill-16" />
  </GraphToolbarButton>
</template>
