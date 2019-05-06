import Vue from 'vue'
import NutUI from '@nutui/nutui'
import App from '@/App.vue'

import router from '@/router'
import 'normalize.css'
import '@nutui/nutui/dist/nutui.scss'
import '@/assets/css/style.scss'


Vue.config.productionTip = false

NutUI.install(Vue)

router.beforeEach((to, from, next) => {
  if (to.mate && to.mate.auth) {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
