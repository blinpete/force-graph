<script setup lang="ts">
import ColorPicker from '@/modules/shared/ColorPicker.vue'
import { nodeColors } from '@/modules/shared/graph-runtime-config'
import GraphToolbarButton from '@/modules/shared/GraphToolbarButton.vue'
import { theme } from '@/modules/shared/theme/store'
import { deleteSelected } from './handle-selection'
import { edges, nodes } from './model/data'
import { selectedEdges, selectedEdgesDashes, selectedEdgesNotDashes } from './model/selected-edge'
import { selectedNode } from './model/selected-node'

const shapes = [
  { values: ['dot', undefined], icon: 'i-ic-outline-circle' },
  { values: ['hexagon'], icon: 'i-ic-outline-hexagon' },
  { values: ['triangle'], icon: 'i-uil-triangle' },
  { values: ['diamond'], icon: 'i-ic-outline-square rotate-45 scale-85' },
]
</script>

<template>
  <div flex="~ col" px-4 py-2 gap-1 text-main>
    <input
      border="~ main" my-2 px-2
      bg-transparent outline-none rounded
      :value="selectedNode?.label"
      @change="val => {
        nodes.update({ id: selectedNode?.id, label: val.target.value })
      }"
    >

    <h1 w-full text-left text-neutral text-sm>
      node.shape
    </h1>
    <div flex="~ row">
      <GraphToolbarButton
        v-for="shape in shapes"
        :key="`shape-${shape.values[0]}`"
        :class="{ 'bg-neutral bg-op-20': shape.values.includes(selectedNode?.shape) }"
        @click="nodes.update({ id: selectedNode?.id, shape: shape.values[0] })"
      >
        <span :class="shape.icon" />
      </GraphToolbarButton>
    </div>

    <h1 w-full text-left text-neutral text-sm>
      node.color
    </h1>
    <div flex="~ row">
      <GraphToolbarButton>
        <ColorPicker
          :model-value="selectedNode?.color?.background || nodeColors[theme].background"
          @update:model-value="val => {
            nodes.update({ id: selectedNode?.id, color: { background: val, highlight: { background: val } } })
          }"
        />
      </GraphToolbarButton>
    </div>

    <!-- <div border="~ main" /> -->

    <h1 w-full text-left text-neutral text-sm>
      edge.dashes
    </h1>
    <div flex="~ raw" gap-1>
      <GraphToolbarButton
        :class="selectedEdgesDashes ? ' bg-blueGray bg-op-20' : ''"
        @click="edges.update(selectedEdges?.map(x => ({ ...x, dashes: true })))"
      >
        <span class="i-radix-icons-border-dashed -rotate-45" />
      </GraphToolbarButton>
      <GraphToolbarButton
        :class="selectedEdgesNotDashes ? ' bg-blueGray bg-op-20' : ''"
        @click="edges.update(selectedEdges?.map(x => ({ ...x, dashes: false })))"
      >
        <span class="i-fluent-line-20-regular" />
      </GraphToolbarButton>
    </div>

    <div flex="~ raw" gap-1>
      <GraphToolbarButton
        @click="deleteSelected()"
      >
        <!-- <span class="i-icon-park-outline:delete-key" /> -->
        <span class="i-icon-park-solid:delete-key" />
      </GraphToolbarButton>
    </div>
  </div>
</template>
