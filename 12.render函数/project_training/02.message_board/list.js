Vue.component('list', {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  render(h) {
    let list = []
    this.list.forEach((msg, index) => {
      const node = h('div',
        {
          class: 'list-item'
        },
        [
          h('span', msg.name + ': '),
          h('div',
            {
              class: 'list-msg'
            },
            [
              h('p', msg.message),
              h('a', {
                class: 'msg-remove',
                on: {
                  click: () => {
                    this.remove(index)
                  }
                }
              }, '删除'),
              h('a', {
                class: 'msg-reply',
                on: {
                  click: () => {
                    this.reply(index)
                  }
                }
              }, '回复')
            ])
        ])
      list.push(node)
    })
    if (this.list.length) {
      return h('div',
        {
          class: 'list'
        },
        list
      )
    } else {
      return h('div',
        {
          class: 'list-nothing'
        },
        '留言列表为空'
      )
    }
  },
  methods: {
    reply(index) {
      this.$emit('reply', index)
    },
    remove(index) {
      let confirm = window.confirm('确认需要删除吗？')
      if (confirm) {
        this.$emit('remove', index)
      }
    }
  }
})