<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import GraphToolbarButton from '../toolbar-buttons/GraphToolbarButton.vue'

const router = useRouter()
const isHelp = computed(() => {
  return router.currentRoute.value.query?.help === 'true'
})
</script>

<template>
  <GraphToolbarButton
    :class="{ 'text-indigo': isHelp }"
    @click="router.replace({
      path: router.currentRoute.value.path,
      query: { help: isHelp ? undefined : 'true' },
    })"
  >
    <span v-if="isHelp" class="i-mdi-help-circle" />
    <span v-else class="i-mdi-help-circle-outline" />
  </GraphToolbarButton>
</template>
