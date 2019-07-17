new Vue({
  el: '#app',
  template: `
    <div class="main">
      <slice >
        <question slot="question"></question>
        <buttons slot="buttons"></buttons>
      </slice>
    </div>
  `,
  data: {
    slices: [
      {
        question: {}
      }
    ]
  },
  computed: {},
  methods: {}
})
