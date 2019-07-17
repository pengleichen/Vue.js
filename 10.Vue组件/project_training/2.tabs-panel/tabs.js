Vue.component('tabs', {
  template: `
    <div class="tabs">
      <div class="tabs-bar">
        <div :class="tabCls(item)"
          v-for="(item, index) in navList"
          :key="item.name"
          @click="handleChange(index)">{{ item.label }}
          <div class="close" v-show="item.closable" title="删除标签页" @click="closeNav(item.index)">x</div>
        </div>
      </div>
      <div class="tabs-content">
        <slot></slot>
      </div>
    </div>
  `,
  props: {
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      currentValue: this.value,
      navList: []
    }
  },
  methods: {
    tabCls(item) {
      return [
        'tabs-tab',
        {
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    handleChange(index) {
      const nav = this.navList[index]
      const name = nav.name
      this.currentValue = name
      this.$emit('input', name)
      this.$emit('on-click', name)
    },
    getTabs() {
      return this.$children.filter(item => item.$options.name === 'panel')
    },
    updateNav() {
      this.navList = []
      this.getTabs().forEach((panel, index) => {
        panel.name = panel.name || index
        const {label, name, closable} = panel
        this.navList.push({
          label,
          name,
          closable
        })
        if (index === 0) {
          if (!this.currentValue) {
            this.currentValue = panel.name
          }
        }
      })
      this.updateStatus()
    },
    closeNav(index) {
      this.navList.splice(index, 1)
      this.updateStatus()
    },
    updateStatus() {
      let tabs = this.getTabs()
      tabs.forEach(tab => tab.show = tab.name === this.currentValue)
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue() {
      this.updateStatus()
    }
  }
})
