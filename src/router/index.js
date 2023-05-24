import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/destinasi',
    name: 'destinasi',
    component: () => import('../views/DestinasiView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
})

export default router
