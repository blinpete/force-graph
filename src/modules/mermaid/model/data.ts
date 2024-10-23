import type { GraphEdge, GraphNode } from '@/modules/shared/types'
import { DataSet } from 'vis-data'

export const nodes = new DataSet<GraphNode>()
export const edges = new DataSet<GraphEdge>()
