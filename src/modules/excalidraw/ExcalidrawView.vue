<script setup lang="ts">
import type { Options } from 'vis-network'
import Graph from '@/modules/shared/Graph.vue'
import GraphToolbar from '@/modules/shared/GraphToolbar.vue'
import { network, settings } from '@/modules/shared/store'
import { makeRefIsHelp } from '../shared/help/store'
import GraphToolbarSelectedNode from './GraphToolbarSelectedNode.vue'
import { setSelectionRefs } from './handle-selection'
import HelpCard from './help/HelpCard.vue'
import { handleKeyboard } from './keyboard'
import { edges, nodes } from './model/data'
import { selectedEdgesIds } from './model/selected-edge'
import { selectedNode } from './model/selected-node'
import BtnAddEdge from './toolbar-buttons/BtnAddEdge.vue'
import BtnAddNode from './toolbar-buttons/BtnAddNode.vue'
import BtnDropCache from './toolbar-buttons/BtnDropCache.vue'
import BtnSavePositions from './toolbar-buttons/BtnSavePositions.vue'
import { setEventHandlers } from './vis-interactions'

handleKeyboard()

const isHelp = makeRefIsHelp()

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
    <BtnAddNode />
    <BtnAddEdge />
    <BtnSavePositions />
    <BtnDropCache />
  </GraphToolbar>

  <GraphToolbarSelectedNode
    v-if="selectedNode || selectedEdgesIds"
    class="top-40% translate-y-[-50%]"
    fixed left-3
    bg-main border border-main rounded-lg
  />

  <HelpCard
    v-show="isHelp && !settings.zenMode"
    fixed top-16 right-3 top max-w-20rem
    bg-main border border-main rounded-lg
  />
</template>

<style>
body {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
</style>
