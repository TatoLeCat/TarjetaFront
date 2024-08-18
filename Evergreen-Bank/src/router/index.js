import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthCliVue from '../views/AuthCliVue.vue'
import FormClient from '../views/FormClient.vue'
import FormSolicitud from '@/views/FormSolicitud.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: AuthCliVue
    },
    {
      path: '/register',
      name: 'register',
      component: FormClient
    },
    {
      path: '/solicitud',
      name: 'solicitud',
      component: FormSolicitud
    }
    

  ]
})

export default router
