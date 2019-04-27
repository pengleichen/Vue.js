import Vue from 'vue/dist/vue'
import App from './App'

import {num1, num2, add} from './App'

console.log(num1)
console.log(num2)

add(6, 7)

new Vue({
  el: '#app',
  template: `<App />`,
  components: {
    App
  }
})