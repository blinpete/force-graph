import type { GraphEdge, GraphNode } from '@/modules/shared/types'
import { useStorage } from '@vueuse/core'
import { DataSet } from 'vis-data'

export const nodesFromCache = useStorage('forcegraph-ex-nodes', [])
export const edgesFromCache = useStorage('forcegraph-ex-edges', [])

export const nodes = new DataSet<GraphNode>(nodesFromCache.value)
export const edges = new DataSet<GraphEdge>(edgesFromCache.value)
