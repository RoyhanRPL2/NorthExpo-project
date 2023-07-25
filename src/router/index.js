import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// Vue.component('loading', { template: '<div>Loading...</div>' })
import NProgress from 'vue-nprogress'

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
    component: () => import('../views/NewProfileView.vue')
  },
  {
    path: '/ticket/:id',
    name: 'ticket',
    component: () => import('../views/TicketFormView.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/profile/edit',
    name: 'profile-edit',
    component: () => import('../views/ProfileEdit.vue')
  },
  {
    path: '/payment/:id',
    name: 'payment',
    component: () => import('../components/paymentModal.vue')
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
