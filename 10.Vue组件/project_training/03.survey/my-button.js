Vue.component('my-button', {
  template: `
      <button :type="type"><slot></slot></button>
  `,
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {}
  },
  methods: {}
})
