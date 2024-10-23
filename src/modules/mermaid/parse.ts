import type { GraphEdge, GraphNode } from '@/modules/shared/types'
import type { GraphDataParsed } from './types'

const EDGES: Record<string, Omit<GraphEdge, 'from' | 'to'>> = {
  '-': {},
  '->': { arrows: 'to' },
  '<-': { arrows: 'from' },
  '<->': { arrows: 'from,to' },

  '--': { dashes: true },
  '-->': { dashes: true, arrows: 'to' },
  '<--': { dashes: true, arrows: 'from' },
  '<-->': { dashes: true, arrows: 'from,to' },
}

function isEdge(s: string) {
  return EDGES[s]
}

export function parse(raw: string): GraphDataParsed {
  const nodes = new Map<string, GraphNode>()
  const edges = new Map<string, GraphEdge>()

  const lines = raw.split('\n')
  let line, word, lineArr

  // word is Node or Edge
  let lastNode, lastEdge, edgeId

  for (line of lines) {
    if (line.includes(':')) {
      lineArr = line.split(':')
      nodes.set(lineArr[0], {
        id: lineArr[0],
        label: lineArr[1] || lineArr[0],
        size: 10,
      })
      continue
    }

    lineArr = line.split(' ')

    lastNode = null
    for (word of lineArr) {
      // edge
      if (isEdge(word)) {
        lastEdge = word
        continue
      }

      // node
      if (!lastNode) {
        lastNode = word
        continue
      }

      if (lastNode && lastEdge) {
        edgeId = lastNode + lastEdge + word
        edges.set(edgeId, {
          from: lastNode,
          to: word,
          ...EDGES[lastEdge],
        })
        lastNode = word
      }
    }
  }

  return {
    nodes,
    edges,
  }
}
