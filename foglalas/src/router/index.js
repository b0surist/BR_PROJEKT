import { createRouter, createWebHistory } from 'vue-router'
import Idopont from '../views/Idopont.vue'
import Adatok from '../views/Adatok.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'idopont',
      component: Idopont,
    },
    {
      path: '/adatok',
      name: 'adatok',
      component: Adatok,
    },
  ],
})

export default router
