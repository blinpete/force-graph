import type { DataSet } from 'vis-data'
import type { Edge, Node } from 'vis-network'

export interface GraphData {
  nodes: DataSet<GraphNode>
  edges: DataSet<GraphEdge>
}

export interface GraphNode extends Node {}
export interface GraphEdge extends Edge {}
