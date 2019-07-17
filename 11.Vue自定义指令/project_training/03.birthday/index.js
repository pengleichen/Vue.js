new Vue({
  el: '#app',
  template: `
    <div v-birthday="birthday"></div>
  `,
  data: {
    birthday: new Date('1986-09-20 03:32:21.992').getTime()
  }
})
