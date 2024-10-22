<script setup lang="ts">
import type { Options } from 'vis-network'
import Graph from '@/modules/shared/Graph.vue'
import GraphToolbar from '@/modules/shared/GraphToolbar.vue'
import GraphToolbarButton from '@/modules/shared/GraphToolbarButton.vue'
import { network, settings } from '@/modules/shared/store'
import GraphToolbarSelectedNode from './GraphToolbarSelectedNode.vue'
import { setSelectionRefs } from './handle-selection'
import { handleKeyboard } from './keyboard'
import { edges, nodes } from './model/data'
import { dropCache, saveData } from './model/data-cache'
import { selectedEdgesIds } from './model/selected-edge'
import { selectedNode } from './model/selected-node'
import { setEventHandlers } from './vis-interactions'

handleKeyboard()

function overrideOptions(options: Options) {
  return {
    ...options,
    manipulation: {
      enabled: false,

      addNode: (node, callback) => {
        node.size = 10
        callback(node)
        network?.selectNodes([node.id])
        const selection = network?.getSelection()
        setSelectionRefs(selection)
      },
    },
  }
}
</script>

<template>
  <Graph
    :data="{ nodes, edges }"
    :set-event-handlers="setEventHandlers"
    :override-options="overrideOptions"
  />

  <GraphToolbar
    v-show="!settings.zenMode"
    class="left-50% translate-x-[-50%]"
    fixed top-3
    bg-main border border-main rounded-lg
    :network="network"
  >
    <GraphToolbarButton @click="network?.addNodeMode()">
      <span class="i-octicon-dot-fill-16" />
    </GraphToolbarButton>

    <GraphToolbarButton @click="network?.addEdgeMode()">
      <span class="i-lets-icons-line-alt" />
    </GraphToolbarButton>

    <GraphToolbarButton @click="saveData()">
      <span class="i-material-symbols-save-outline" />
    </GraphToolbarButton>

    <GraphToolbarButton @click="dropCache()">
      <span class="i-mage-trash" />
    </GraphToolbarButton>
  </GraphToolbar>

  <GraphToolbarSelectedNode
    v-if="selectedNode || selectedEdgesIds"
    class="top-40% translate-y-[-50%]"
    fixed left-3
    bg-main border border-main rounded-lg
  />
</template>
