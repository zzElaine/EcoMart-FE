//createRouter 创建router实例对象
//createWebHistory 创建history模式的路由对象

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import home from '@/views/Home/index.vue' 
import category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/', 
      component: Layout,
      children:[
        {
          path: '',
          component: home
        },
        {
          path: '/category/:id',
          component: category
        },
        {
          path: '/category/sub/:id',
          component: SubCategory
        }
      ]
    }
  ]
})

export default router

