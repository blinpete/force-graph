import { useStorage } from '@vueuse/core'

interface Settings {
  seed?: string
  zenMode: boolean
  physics: boolean
}
export const settings = useStorage<Settings>('forcegraph-settings', {
  zenMode: false,
  physics: true,
})
