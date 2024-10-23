import type { GraphDataParsed } from '../types'
import { useStorage } from '@vueuse/core'
import { watch } from 'vue'
import { parse } from '../parse'
import { edges, nodes } from './data'

/**
 * Raw graph data (mermaid-like syntax)
 */
export const graphDataRaw = useStorage<string>('forcegraph-me-raw', '')

// -------------------------------------------------------------
//                         vue watcher
// -------------------------------------------------------------
let parsedPrev: GraphDataParsed | undefined
watch(
  graphDataRaw,
  () => {
    const parsed = parse(graphDataRaw.value)

    // ------------------------ delete
    if (parsedPrev) {
      parsedPrev.nodes.forEach((prev) => {
        if (!parsed.nodes.has(prev.id)) {
          nodes.remove(prev.id)
        }
      })
      parsedPrev.edges.forEach((prev) => {
        if (!parsed.edges.has(prev.id)) {
          edges.remove(prev.id)
        }
      })
    }
    parsedPrev = parsed

    nodes.update([...parsed.nodes.values()])
    edges.update([...parsed.edges.values()])

    return parsed
  },
  { immediate: true },
)
