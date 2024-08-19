import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthCliVue from '../views/AuthCliVue.vue'
import FormClient from '../views/FormClient.vue'
import FormSolicitud from '../views/FormSolicitud.vue'
import AuthPer from '../views/AuthPer.vue'
import NuevaTransaccion from '../views/NuevaTransaccion.vue'
import ListaCliente from '../views/ListaCliente.vue'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
import ListaSolicitudes from '../views/ListaSolicitudes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PaginaPrincipal
    },
    {
      path: '/home',
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
    },
    {
      path: '/loginPersonal',
      name: 'loginPersonal',
      component: AuthPer
    },
    {
      path: '/transaccion',
      name: 'transaccion',
      component: NuevaTransaccion
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ListaCliente
    },
    {
      path: '/Transacciones',
      name: 'Transacciones',
      component: ListaSolicitudes
    }
    

  ]
})

export default router
