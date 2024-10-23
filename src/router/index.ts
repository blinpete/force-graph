import ExcalidrawView from '@/modules/excalidraw/ExcalidrawView.vue'
import MermaidView from '@/modules/mermaid/MermaidView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/me',
      component: MermaidView,
    },
    {
      path: '/ex',
      component: ExcalidrawView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
