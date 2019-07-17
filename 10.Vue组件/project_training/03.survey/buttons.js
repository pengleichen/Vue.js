Vue.component('buttons', {
  template: `
    <div class="button-group">
      <my-button v-show="button.show" :type="button.type" disabled
        v-for="(button, index) in buttons"
        :key="button.id"
        >{{ button.text }}</my-button>
    </div>
  `,
  data() {
    return {
      buttons: [
        {
          id: 0,
          text: '提交',
          show: true,
          type: 'primary'
        },
        {
          id: 1,
          text: '下一步',
          show: true,
          type: 'primary'
        },
        {
          id: 2,
          text: '上一步',
          show: true
        },
        {
          id: 3,
          text: '重置',
          show: true
        }
      ]

    }
  },
  methods: {}
})
