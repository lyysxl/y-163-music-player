import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    // name: 'home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/discovered'
      },
      {
        path: '/discovered',
        name: 'discovered',
        component: () =>
          import(
            /* webpackChunkName: "discovered" */ '../views/Discovered/index.vue'
          )
      },
      {
        path: '/setting',
        name: '/setting',
        component: () =>
          import(
            /* webpackChunkName: "setting" */ '../views/Setting/Setting.vue'
          )
      },
      {
        path: '/my-music',
        name: '/my-music',
        component: () =>
          import(
            /* webpackChunkName: "my-music" */ '../views/MyMusic/MyMusic.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
