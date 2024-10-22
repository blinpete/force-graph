import type { Network } from 'vis-network'

// eslint-disable-next-line import/no-mutable-exports
export let network: Network | undefined
export function setNetwork(value: Network) {
  network = value
}
