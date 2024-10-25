<script setup lang="ts">
import BtnCentralGravity from '@/modules/shared/toolbar-buttons/BtnCentralGravity.vue'
import BtnPhysics from '@/modules/shared/toolbar-buttons/BtnPhysics.vue'
import BtnStabilize from '@/modules/shared/toolbar-buttons/BtnStabilize.vue'
import BtnWind from '@/modules/shared/toolbar-buttons/BtnWind.vue'
import BtnAddEdge from '../toolbar-buttons/BtnAddEdge.vue'
import BtnAddNode from '../toolbar-buttons/BtnAddNode.vue'
import BtnDropCache from '../toolbar-buttons/BtnDropCache.vue'
import BtnSavePositions from '../toolbar-buttons/BtnSavePositions.vue'

defineSlots<{
  default: () => any
}>()
</script>

<template>
  <div flex="~ col" ps-2 pe-4 pt-2 pb-4 gap-0.5 text-main text-start class="root">
    <h1 text-sm mb-3 flex flex-row items-center text-subtle>
      <span class="i-mdi-help-circle-outline" />&nbsp;Quick guide
    </h1>
    <ul flex flex-col gap-1>
      <li flex items-start>
        <BtnPhysics class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle>turn on <strong text-main dark:font-normal light:font-500>physics</strong>, nodes repel if not connected, edges behave as springs, simulation runs in cylindrical gravity field.</span>
      </li>
      <li flex items-start>
        <BtnWind class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle>turn on <strong text-main dark:font-normal light:font-500>wind</strong>, cycle through options (down, left, up, right, off).</span>
      </li>
      <li flex items-start>
        <BtnCentralGravity class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle>toggle <strong text-main dark:font-normal light:font-500>central gravity</strong> on/off to reshape the graph or just for fun.</span>
      </li>
      <li flex items-start>
        <BtnStabilize class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle>scroll <strong text-main dark:font-normal light:font-500>back to content</strong> if you got lost</span>
      </li>

      <li flex items-start>
        <BtnAddNode class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle><strong text-main dark:font-normal light:font-500>add a node</strong>, pick a location by clicking on the canvas.</span>
      </li>
      <li flex items-start>
        <BtnAddEdge class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle><strong text-main dark:font-normal light:font-500>add an edge</strong> between two nodes, 1st click picks "from" node, 2nd click picks "to".</span>
      </li>
      <li flex items-start>
        <BtnSavePositions class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle><strong text-main dark:font-normal light:font-500>save coordinates</strong> of all the nodes, so that after page refresh they are on the same positions.</span>
      </li>
      <li flex items-start>
        <BtnDropCache class="mr-1.5 mt-1" border border-subtle bg-active />
        <span text-subtle><strong text-main dark:font-normal light:font-500>delete all</strong> the nodes and edges and start from scratch.</span>
      </li>
    </ul>

    <slot />
  </div>
</template>

<style lang="css" scoped>
.root {
  overflow-y: auto;
  scrollbar-width: none;
  max-height: calc(100dvh - 5rem);
}
</style>
