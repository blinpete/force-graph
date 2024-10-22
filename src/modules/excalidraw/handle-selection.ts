import { network } from '@/modules/shared/store'
import { selectedEdgesIds } from './model/selected-edge'
import { selectedNodeId } from './model/selected-node'

export function unselectAll() {
  network?.unselectAll()
  selectedNodeId.value = undefined
  selectedEdgesIds.value = undefined
}

export function deleteSelected() {
  network?.deleteSelected()
  unselectAll()
}

export function setSelectionRefs(selection?: {
  nodes: string[]
  edges: string[]
}) {
  if (!selection) {
    unselectAll()
    return
  }

  selectedNodeId.value = selection.nodes[0]
  selectedEdgesIds.value = selection.edges
}
