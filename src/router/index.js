import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/tiket',
    name: 'tiket',
    component: () => import('../views/TicketView.vue')
  },
  {
    path: '/destinasi',
    name: 'destinasi',
    component: () => import('../views/DestinasiView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail-destinasi',
    component: () => import('../views/detailView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/mapTourist.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/tes',
    name: 'tes',
    component: () => import('../views/TestView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
