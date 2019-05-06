import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/body/Home'
import Category from '@/components/body/Category'
import Discovery from '@/components/body/Discovery'
import Shopping from '@/components/body/Shopping'
import My from '@/components/body/My'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'category',
      path: '/category',
      component: Category
    },
    {
      name: 'discovery',
      path: '/discovery',
      component: Discovery
    },
    {
      name: 'shopping',
      path: '/shopping',
      component: Shopping,
      mate: {
        auth: true
      }
    },
    {
      name: 'my',
      path: '/my',
      component: My
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
})