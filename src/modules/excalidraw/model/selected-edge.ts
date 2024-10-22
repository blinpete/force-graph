import type { GraphEdge } from '@/modules/shared/types'
import { computed, ref } from 'vue'
import { edges } from './data'

export const selectedEdgesIds = ref<string[]>()

const _selectedEdgesUpdate = ref<Date>()

export const selectedEdges = computed(() => {
  // reactivity hack
  // eslint-disable-next-line ts/no-unused-expressions
  _selectedEdgesUpdate.value

  if (!selectedEdgesIds.value)
    return null

  const selected = edges.get(selectedEdgesIds.value)
  console.log('🚀 | selectedEdges | selected:', selected)

  return selected as unknown as GraphEdge[]
})

export const selectedEdgesDashes = computed(() => selectedEdges.value?.length && selectedEdges.value?.every(x => x.dashes))
export const selectedEdgesNotDashes = computed(() => selectedEdges.value?.length && selectedEdges.value?.every(x => !x.dashes))

edges.on('update', (name, e) => {
  console.log('🚀 | edges.on.update | e:', e)
  const idx = e?.items.findIndex(x => selectedEdgesIds.value?.includes(x))

  if (idx !== -1) {
    _selectedEdgesUpdate.value = new Date()
  }
})
