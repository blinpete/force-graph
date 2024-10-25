<script setup lang="ts">
import GraphToolbarButton from '@/modules/shared/toolbar-buttons/GraphToolbarButton.vue'
import { saveData } from '../model/data-cache'
</script>

<template>
  <GraphToolbarButton @click="saveData()">
    <span class="i-material-symbols-save-outline" />
  </GraphToolbarButton>
</template>
