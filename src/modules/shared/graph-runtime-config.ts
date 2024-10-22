import type { EdgeOptions, NodeOptions } from 'vis-network'
import type { Theme } from './theme/store'
import { reactive } from 'vue'

type ExtractObject<T> = T extends object ? T : never

type ThemableOptions<Options> =
  | Record<string, never> // don't allow extra keys
  | Record<Theme, Options> // only themes

export const edgeColors = reactive<ThemableOptions<ExtractObject<EdgeOptions['color']>>>({
  dark: {
    color: '#eeeeff',
    highlight: 'white',
    // inherit: 'from',
  },
  light: {
    color: '#000011',
    highlight: 'black',
  },
  // cafe: {
  //   color: '#442222',
  //   highlight: 'black',
  // },
})

export const nodeColors = reactive<ThemableOptions<ExtractObject<NodeOptions['color']>>>({
  dark: {
    background: '#bb33aa',
    highlight: {
      background: '#bb33aa',
      border: 'white',
    },
    border: '#000000',
  },
  light: {
    background: '#bb33aa',
    border: '#000000',
    highlight: {
      background: '#bb33aa',
      border: 'black',
    },
  },
  // cafe: {
  //   background: '#bb33aa',
  //   border: '#000000',
  //   highlight: 'red',
  // },
})
