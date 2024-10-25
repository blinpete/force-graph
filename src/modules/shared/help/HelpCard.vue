<script setup lang="ts">
import BtnCentralGravity from '@/modules/shared/toolbar-buttons/BtnCentralGravity.vue'
import BtnPhysics from '@/modules/shared/toolbar-buttons/BtnPhysics.vue'
import BtnStabilize from '@/modules/shared/toolbar-buttons/BtnStabilize.vue'
import BtnWind from '@/modules/shared/toolbar-buttons/BtnWind.vue'

defineSlots<{
  default: () => HTMLLIElement[]
}>()
</script>

<template>
  <div flex="~ col" ps-2 pe-4 pt-2 pb-4 gap-0.5 text-main text-start class="HelpCard">
    <h1 text-sm mb-3 flex flex-row items-center text-subtle>
      <span class="i-mdi-help-circle-outline" />&nbsp;Quick guide
    </h1>
    <ul flex flex-col gap-1>
      <li help-item>
        <BtnPhysics help-btn />
        <span help-desc>turn on <strong help-accent>physics</strong>, nodes repel if not connected, edges behave as springs, simulation runs in cylindrical gravity field.</span>
      </li>
      <li help-item>
        <BtnWind help-btn />
        <span help-desc>turn on <strong help-accent>wind</strong>, cycle through options (down, left, up, right, off).</span>
      </li>
      <li help-item>
        <BtnCentralGravity help-btn />
        <span help-desc>toggle <strong help-accent>central gravity</strong> on/off to reshape the graph or just for fun.</span>
      </li>
      <li help-item>
        <BtnStabilize help-btn />
        <span help-desc>scroll <strong help-accent>back to content</strong> if you got lost</span>
      </li>

      <slot />
    </ul>
  </div>
</template>

<style lang="css" scoped>
.HelpCard {
  overflow-y: auto;
  scrollbar-width: none;
  max-height: calc(100dvh - 5rem);
}
</style>
