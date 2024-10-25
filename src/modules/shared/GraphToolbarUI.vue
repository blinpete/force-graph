<script setup lang="ts">
import BtnHelp from './help/BtnHelp.vue'
import { settings } from './store'
import ThemeSwitcher from './theme/ThemeSwitcher.vue'
import GraphToolbarButton from './toolbar-buttons/GraphToolbarButton.vue'
</script>

<template>
  <div flex="~ row" px-1 py-1 gap-0.5 text-main>
    <BtnHelp v-show="!settings.zenMode" />

    <GraphToolbarButton
      @click="settings.zenMode = !settings.zenMode"
    >
      <span v-if="settings.zenMode" class="i-mdi-eye-off-outline" />
      <span v-else class="i-mdi-eye-outline" />
    </GraphToolbarButton>

    <ThemeSwitcher />
  </div>
</template>
