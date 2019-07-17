Vue.component('panel', {
  template: `
    <div class="panel" v-show="show">
      <slot></slot>
    </div>
  `,
  props: {
    label: {
      type: String,
      default: ''
    },
    name: String,
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    updateNav() {
      this.$parent.updateNav()
    }
  },
  watch: {
    label() {
      this.updateNav()
    }
  },
  mounted() {
    this.updateNav()
  }
})
