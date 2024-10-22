<script setup lang="ts">
import GraphToolbarButton from './GraphToolbarButton.vue'
import PhysicsCentralGravity from './PhysicsCentralGravity.vue'
import PhysicsWind from './PhysicsWind.vue'
import { network, settings } from './store'

defineSlots<{
  default: () => any
}>()
</script>

<template>
  <div flex="~ row" px-4 py-1 gap-0.5 text-main>
    <GraphToolbarButton
      @click="() => {
        if (settings.seed) settings.seed = undefined
        else {
          settings.seed = network?.getSeed().toString()
        }
      }"
    >
      <span v-if="settings.seed" class="i-mdi-seed-outline" />
      <span v-else class="i-mdi-seed-off-outline" />
    </GraphToolbarButton>
    <GraphToolbarButton
      @click="() => settings.physics = !settings.physics"
    >
      <!-- <span class="i-ion-play-circle-outline" /> -->
      <!-- <span class="i-ion-pause-circle-outline" /> -->
      <span v-if="settings.physics" class="i-ion-magnet" />
      <span v-else class="i-ion-magnet-outline" />
    </GraphToolbarButton>

    <PhysicsWind />
    <PhysicsCentralGravity />

    <GraphToolbarButton @click="network?.stabilize()">
      <!-- <span class="i-icon-park-solid-aiming" /> -->
      <span class="i-ic-sharp-crop-free" />
    </GraphToolbarButton>

    <slot />
  </div>
</template>
