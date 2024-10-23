<script setup lang="ts">
import Graph from '@/modules/shared/Graph.vue'
import GraphToolbar from '@/modules/shared/GraphToolbar.vue'
import { network, settings } from '@/modules/shared/store'
import GraphSource from './GraphSource.vue'
import { edges, nodes } from './model/data'
</script>

<template>
  <Graph :data="{ nodes, edges }" />

  <GraphToolbar
    v-show="!settings.zenMode"
    class="left-50% translate-x-[-50%]"
    fixed top-3
    bg-main border border-main rounded-lg
    :network="network"
  />

  <GraphSource
    v-show="!settings.zenMode"
    border="~ main"
    fixed top-3 bottom-3 left-3 w-54 select-none
    rounded bg-opacity-75 p3 text-sm shadow
    backdrop-blur-8 bg-main text-main
  />
</template>
