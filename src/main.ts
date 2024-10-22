import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import './assets/style.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
