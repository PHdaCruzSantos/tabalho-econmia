import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Grupo = () => import('../views/Grupo/index.vue')
const CPP = () => import('../views/Graficos/cppGrafico.vue')
export const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/grupo',
    name: 'Grupo',
    component: Grupo
  },
  {
    path: '/cpp',
    name: 'CPP',
    component: CPP
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router