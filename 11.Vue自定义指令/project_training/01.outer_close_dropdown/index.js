new Vue({
  el: '#app',
  template: `
    <div class="main" v-outer-close.esc="handleClose">
      <button @click="show = !show">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
        <p>下拉框的内容，点击外面区域可以关闭</p>
      </div>
    </div>
  `,
  data: {
    show: false
  },
  methods: {
    handleClose() {
      this.show = false
    }
  }
})
