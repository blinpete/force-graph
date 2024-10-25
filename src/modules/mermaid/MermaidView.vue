<script setup lang="ts">
import Graph from '@/modules/shared/Graph.vue'
import GraphToolbar from '@/modules/shared/GraphToolbar.vue'
import { network, settings } from '@/modules/shared/store'
import HelpCard from '../shared/help/HelpCard.vue'
import { makeRefIsHelp } from '../shared/help/store'
import BtnSeed from '../shared/toolbar-buttons/BtnSeed.vue'
import GraphSource from './GraphSource.vue'
import { edges, nodes } from './model/data'

const isHelp = makeRefIsHelp()
</script>

<template>
  <Graph :data="{ nodes, edges }" />

  <GraphToolbar
    v-show="!settings.zenMode"
    class="left-50% translate-x-[-50%]"
    fixed top-3
    bg-main border border-main rounded-lg
    :network="network"
  >
    <BtnSeed />
  </GraphToolbar>

  <GraphSource
    v-show="!settings.zenMode"
    border="~ main" shadow rounded-md
    fixed top-3 left-3 w-full max-w-16rem
    bg-main backdrop-blur-8 bg-op-70 dark:bg-op-30
    text-sm text-main
  />

  <HelpCard
    v-show="isHelp && !settings.zenMode"
    fixed top-16 right-3 top max-w-20rem
    bg-main border border-main rounded-lg
  >
    <li help-item>
      <BtnSeed help-btn />
      <span help-desc>toggle <strong help-accent>random seed</strong> on/off for the graph layout, if it's off each page refresh generates random layout.</span>
    </li>
  </HelpCard>
</template>
