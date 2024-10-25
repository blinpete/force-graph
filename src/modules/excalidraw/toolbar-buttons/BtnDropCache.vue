<script setup lang="ts">
import GraphToolbarButton from '@/modules/shared/toolbar-buttons/GraphToolbarButton.vue'
import { dropCache } from '../model/data-cache'
</script>

<template>
  <GraphToolbarButton @click="dropCache()">
    <span class="i-mage-trash" />
  </GraphToolbarButton>
</template>
