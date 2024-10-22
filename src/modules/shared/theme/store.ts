import { useColorMode, useCycleList } from '@vueuse/core'
import { computed } from 'vue'

const modes = {
  dark: 'dark',
  light: 'light',
  // cafe: 'cafe',
}
export type Theme = keyof typeof modes

const DEFAULT_THEME: Theme = 'dark'

const { system, store } = useColorMode({
  selector: 'html',
  attribute: 'class',
  modes,
})

export const theme = computed(() => {
  if (store.value !== 'auto')
    return store.value

  return system.value
})

const themesList = useCycleList<Theme | 'auto'>(
  [
    'dark',
    'light',
    // 'cafe',
    'auto',
  ],
  { initialValue: DEFAULT_THEME },
)

export function nextTheme() {
  const next = themesList.next()
  store.value = next
}
