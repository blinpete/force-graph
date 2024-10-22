import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
