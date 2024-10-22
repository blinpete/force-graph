import { network } from '@/modules/shared/store'
import { edges, edgesFromCache, nodes, nodesFromCache } from './data'

nodes.on('*', () => saveNodes())
edges.on('*', () => saveEdges())

function saveNodes() {
  const positions = network?.getPositions()

  nodesFromCache.value = nodes.map((node) => {
    const cached = { ...node }
    cached.x = positions[node.id].x
    cached.y = positions[node.id].y

    return cached
  })
}

function saveEdges() {
  edgesFromCache.value = edges.map(x => x)
}

export function saveData() {
  saveNodes()
  saveEdges()
}

export function dropCache() {
  nodes.clear()
  edges.clear()
  nodesFromCache.value = []
  edgesFromCache.value = []
}
