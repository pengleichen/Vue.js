import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import Vip from '@/components/vip/Vip'
import ShoppingCart from '@/components/shoppingcart/ShoppingCart'
import Search from '@/components/search/Search'

import NewList from '@/components/news/NewList'

Vue.use(Router)

const HOME = 'home'
const VIP = 'vip'
const SHOPPING_CART = 'shoppingcart'
const SEARCH = 'search'

export const ID = {HOME, VIP, SHOPPING_CART, SEARCH}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/${HOME}`,
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: `/${HOME}`,
      name: HOME,
      component: Home
    },
    {
      path: `/${VIP}`,
      name: VIP,
      component: Vip
    },
    {
      path: `/${SHOPPING_CART}`,
      name: SHOPPING_CART,
      component: ShoppingCart
    },
    {
      path: `/${SEARCH}`,
      name: SEARCH,
      component: Search
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewList
    }
  ]
})
