import type { GraphEdge, GraphNode } from '@/modules/shared/types'

export interface GraphDataParsed {
  nodes: Map<string, GraphNode>
  edges: Map<string, GraphEdge>
}
