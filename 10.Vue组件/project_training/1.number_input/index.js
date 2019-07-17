new Vue({
  el: '#app',
  template: `
    <div>
      <input-number v-model="value" :step="step" :max="100" :min="0"></input-number>
    </div>
  `,
  data: {
    value: 5,
    step: 10
  }
})
