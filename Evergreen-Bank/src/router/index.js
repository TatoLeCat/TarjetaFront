import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthVue from '../views/AuthVue.vue'
import FormClient from '../views/FormClient.vue'

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
      component: AuthVue
    },
    {
      path: '/register',
      name: 'register',
      component: FormClient
    },
    {
      path: '/solicitud',
      name: 'solicitud',
      component: FormClient
    }
    

  ]
})

export default router
