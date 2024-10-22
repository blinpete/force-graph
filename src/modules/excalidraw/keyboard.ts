import { onBeforeUnmount, onMounted } from 'vue'
import { deleteSelected, unselectAll } from './handle-selection'

function handler(e: KeyboardEvent) {
  console.log('🚀 keyboard.ts | e:', e)
  if (e.target instanceof HTMLInputElement) {
    // do nothing when the event bubbles from <input>
    return
  }

  if (e.key === 'Escape') {
    unselectAll()
    return
  }

  if (e.key === 'Backspace') {
    deleteSelected()
  }
}

export function handleKeyboard() {
  onMounted(() => {
    window.addEventListener('keydown', handler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handler)
  })
}
