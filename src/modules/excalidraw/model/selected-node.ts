import { computed, ref } from 'vue'
import { nodes } from './data'

export const selectedNodeId = ref<string>()

const _selectedNodeUpdate = ref<Date>()

export const selectedNode = computed(() => {
  // reactivity hack
  // eslint-disable-next-line ts/no-unused-expressions
  _selectedNodeUpdate.value

  if (!selectedNodeId.value)
    return null

  const node = nodes.get(selectedNodeId.value)
  console.log('🚀 | selectedNode | node:', node)

  return node
})

nodes.on('update', (name, e) => {
  console.log('🚀 | nodes.on.update | e:', e)
  const idx = e?.items.findIndex(x => x === selectedNodeId.value)

  if (idx !== -1) {
    _selectedNodeUpdate.value = new Date()
  }
})
