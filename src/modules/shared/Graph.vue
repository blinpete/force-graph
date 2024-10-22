<script setup lang="ts">
import type { GraphData } from './types'
import { Network, type Options } from 'vis-network'
import { onMounted, ref, watch } from 'vue'
import { edgeColors, nodeColors } from './graph-runtime-config'
import GraphToolbarUI from './GraphToolbarUI.vue'
import { network, setNetwork, settings } from './store'
import { theme } from './theme/store'

const props = defineProps<{
  data: GraphData
  setEventHandlers?: (network: Network) => void
  overrideOptions?: (options: Options) => Options
}>()

const container = ref<HTMLDivElement | null>()

// https://github.com/visjs/vis-network/issues/2092
// const network = ref<Network | undefined>()

watch(() => settings.value.physics, (val) => {
  network?.setOptions({ physics: { enabled: val } })
})

onMounted(() => {
  let options: Options = {
    // https://visjs.github.io/vis-network/docs/network/nodes
    nodes: {
      shape: 'dot',
      borderWidth: 3,
    },

    // https://visjs.github.io/vis-network/docs/network/edges
    edges: {
      // -------------------------- arrows
      arrows: {
        to: {
          scaleFactor: 0.4,
        },
        from: {
          scaleFactor: 0.4,
        },
      },
      arrowStrikethrough: true,
      // ---------------------------------

      physics: true,
      width: 1,

      smooth: false,
    },

    // https://visjs.github.io/vis-network/docs/network/interaction
    interaction: {
      multiselect: true,
    },

    // https://visjs.github.io/vis-network/docs/network/layout
    layout: {
      randomSeed: settings.value?.seed,
    },

    // https://visjs.github.io/vis-network/docs/network/physics
    physics: {
      enabled: settings.value.physics,
      maxVelocity: 146,
      // solver: 'barnesHut',
      solver: 'forceAtlas2Based',
      // solver: 'hierarchicalRepulsion',
      // solver: 'repulsion',
      timestep: 0.5,
      stabilization: {
        enabled: true,
        iterations: 1000,
      },
      forceAtlas2Based: {
        centralGravity: 0.01,
        gravitationalConstant: -100,
        // springLength: 200,
        // springConstant: 1,
      },
    },
  }

  if (props.overrideOptions) {
    options = props.overrideOptions(options)
  }

  setNetwork(new Network(container.value!, props.data, options))

  if (props.setEventHandlers) {
    props.setEventHandlers(network)
  }

  // --------------------------------- set watchers
  watch(theme, (val) => {
    network?.setOptions({
      nodes: {
        font: { color: val === 'dark' ? '#ddd' : '#444' },
        color: nodeColors[val],
      },
      edges: {
        color: edgeColors[val],
      },
    })
  }, { immediate: true })

  watch(nodeColors, (val) => {
    network?.setOptions({ nodes: { color: val[theme.value] } })
  }, { immediate: true })

  watch(edgeColors, (val) => {
    network?.setOptions({ edges: { color: val[theme.value] } })
  }, { immediate: true })
  // ----------------------------------------------

  network?.on('doubleClick', (e) => {
    if (e.nodes?.length) {
      const node = props.data.nodes.get([e.nodes[0]])[0]
      console.log('🚀 doubleClick before | node:', node)

      const newPhysics = node.physics === undefined ? !settings.value.physics : !node.physics
      const borderColor = !newPhysics ? (theme.value === 'dark' ? 'white' : 'black') : nodeColors[theme.value].border

      /**
       * only works as "pin" when options.physics.enabled=true
       */
      props.data.nodes.update({
        id: e.nodes[0],
        physics: newPhysics,

        color: {
          border: borderColor,
        },
      })
    }
  })
})
</script>

<template>
  <div v-if="props.data">
    <div
      ref="container" outline-none
      h-100vh w-100vw bg-main
    />
    <GraphToolbarUI
      fixed top-3 right-3
      bg-main border border-main rounded-lg
    />
  </div>
</template>

<style lang="postcss">
.vis-network, canvas {
  outline: none;
}
</style>
