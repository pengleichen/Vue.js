// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

// 使用mint-ui引入全部的组件
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

// 配置Axios
import Axios from 'axios'
Vue.prototype.$axios = Axios

import '@/assets/css/style.less'

import '@/utils'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
