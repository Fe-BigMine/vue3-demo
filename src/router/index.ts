import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../views/dashboard.vue')
  }
  , {
    path: '/console',
    name: 'Console',
    component: () => import('../views/Console/console.vue'),
    children: [{
      path: '/console/1',
      name: 'Console1',
      component: () => import('../views/Console/children/console1.vue'),
      children: [
        {
          path: '/consoleChild/1',
          name: 'ConsoleChild1',
          component: () => import('../views/ConsoleChildren/consoleChild1.vue'),
        },
        {
          path: '/consoleChild/2',
          name: 'ConsoleChild2',
          component: () => import('../views/ConsoleChildren/consoleChild2.vue'),
        },
        {
          path: '/consoleChild/3',
          name: 'ConsoleChild3',
          component: () => import('../views/ConsoleChildren/consoleChild3.vue'),
        },
        {
          path: '/consoleChild/4',
          name: 'ConsoleChild4',
          component: () => import('../views/ConsoleChildren/consoleChild4.vue'),
        },
      ],
    }, {
      path: '/console/2',
      name: 'Console2',
      component: () => import('../views/Console/children/console2.vue'),
    }, {
      path: '/console/3',
      name: 'Console3',
      component: () => import('../views/Console/children/console3.vue'),
    }]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
