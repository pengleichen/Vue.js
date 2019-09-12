Vue.component('VInput', {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  render(h) {
    return h('div', [
      h('span', '昵称：'),
      h('input', {
        attrs: {
          type: 'text'
        },
        domProps: {
          value: this.value
        },
        on: {
          input: (event) => {
            this.$emit('input', event.target.value)
          }
        }
      })
    ])
  }
})

Vue.component('VTextarea', {
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  render(h) {
    return h('div', [
      h('span', '留言内容：'),
      h('textarea', {
        attrs: {
          placeholder: '请输入留言内容',
          row: 6
        },
        domProps: {
          value: this.value
        },
        ref: 'message',
        on: {
          input: event => {
            this.$emit('input', event.target.value)
          }
        }
      })
    ])
  },
  methods: {
    focus() {
      this.$refs.message.focus()
    }
  }
})