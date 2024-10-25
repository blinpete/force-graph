<script setup lang="ts">
import PhysicsCentralGravity from './toolbar-buttons/BtnCentralGravity.vue'
import BtnPhysics from './toolbar-buttons/BtnPhysics.vue'
import BtnStabilize from './toolbar-buttons/BtnStabilize.vue'
import PhysicsWind from './toolbar-buttons/BtnWind.vue'

defineSlots<{
  default: () => any
}>()
</script>

<template>
  <div flex="~ row" px-1.5 py-1 gap-0.5 text-main>
    <BtnPhysics />
    <PhysicsWind />
    <PhysicsCentralGravity />
    <BtnStabilize />

    <slot />
  </div>
</template>
