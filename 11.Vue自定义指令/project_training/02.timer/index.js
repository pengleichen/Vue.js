new Vue({
  el: '#app',
  template: `
    <div>
      <div v-time="timeNow"></div>
      <div v-time="timeBefore"></div>
    </div>
  `,
  data: {
    timeNow: (new Date()).getTime(),
    timeBefore: 1488930695721
  }
})
