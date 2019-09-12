new Vue({
  el: '#app',
  data: {
    username: '',
    message: '',
    list: []
  },
  methods: {
    send() {
      if (!this.username) {
        alert('请输入昵称')
        return
      }
      if (!this.message) {
        alert('请输入留言内容')
        return
      }
      this.list.push({
        name: this.username,
        message: this.message
      })
      this.message = ''
    },
    reply(index) {
      const name = this.list[index].name
      this.message = `回复@${name}：`
      this.$refs.message.focus()
    },
    remove(index) {
      this.list.splice(index, 1)
    }
  }
})