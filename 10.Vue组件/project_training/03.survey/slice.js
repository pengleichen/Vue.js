Vue.component('slice', {
  template: `
    <div>
      <div class="content">
        <slot name="question"></slot>
      </div>
      <div class="footer">
        <slot name="buttons"></slot>
      </div>
    </div>
  `,
  data() {
    return {}
  },
  methods: {}
})
