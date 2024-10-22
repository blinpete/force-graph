import type { Network } from 'vis-network'
import { setSelectionRefs, unselectAll } from './handle-selection'

export function setEventHandlers(network: Network) {
  network?.on('select', (e) => {
    setSelectionRefs(e)
  })

  network?.on('click', (data) => {
    if (!data.nodes?.length && !data.edges?.length) {
      unselectAll()
    }
  })
}
