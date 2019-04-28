import Vue from 'vue/dist/vue'
import App from './App'
new Vue({
  el: '#app',
  template: `<App />`,
  components: {
    App
  }
})

const ROOT = 'dist'
let vue = new Vue()
const testFun = () => console.log('testFun')

console.log(typeof Promise)
Promise.resolve().finally()
new Promise((resolve => console.log(resolve)))