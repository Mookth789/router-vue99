import { createRouter, createWebHistory } from 'vue-router'


const router = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
   path: '/login'    
   name: 'Login',
   component: () => import('./views/Login.vue'),
  },
  {
  path: '/register',
  name: 'Register',
  component: () => import('./views/Register.vue'),
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router