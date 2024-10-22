import type { DataSet } from 'vis-data'
import type { Edge } from 'vis-network'

export interface GraphData {
  nodes: DataSet<GraphNode>
  edges: DataSet<GraphEdge>
}

export interface GraphDataParsed {
  nodes: Map<string, GraphNode>
  edges: Map<string, GraphEdge>
}

/**
 * Basic node contract.
 */
export interface GraphNode {
  id: string
  // deps: string[]
  label?: string

  /**
   * tooltip content, can be html
   */
  title?: string

  size?: number
}

export interface GraphEdge extends Edge {}
