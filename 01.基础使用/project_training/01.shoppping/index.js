new Vue({
  el: '#app',
  data: {
    allChecked: false,
    list: [
      [
        {
          id: 1,
          name: 'iPhone 7',
          price: 6188,
          count: 1,
          checked: false
        },
        {
          id: 2,
          name: 'iPad Pro',
          price: 5888,
          count: 1,
          checked: false
        },
        {
          id: 3,
          name: 'MacBook Pro',
          price: 21488,
          count: 1,
          checked: false
        }
      ],
      [
        {
          id: 1,
          name: '拖把',
          price: 18.8,
          count: 1,
          checked: false
        },
        {
          id: 2,
          name: '洗衣盆',
          price: 38,
          count: 1,
          checked: false
        },
        {
          id: 3,
          name: '毛巾',
          price: 20,
          count: 1,
          checked: false
        }
      ]
      ,
      [
        {
          id: 1,
          name: '马铃薯',
          price: 2.3,
          count: 1,
          checked: false
        },
        {
          id: 2,
          name: '西红柿',
          price: 5.8,
          count: 1,
          checked: false
        },
        {
          id: 3,
          name: '黄瓜',
          price: 2.4,
          count: 1,
          checked: false
        }
      ]
    ]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      this.list.forEach(items => {
        totalPrice += items.filter(item => item.checked)
          .reduce((total, current) => total + current.price * current.count, 0)
      })
      return totalPrice
    }
  },
  methods: {
    minus(pIndex, index) {
      this.list[pIndex][index].count > 1 && this.list[index].count--
    },
    add(pIndex, index) {
      this.list[pIndex][index].count++
    },
    remove(pIndex, index) {
      this.list[pIndex].splice(index, 1)
    },
    checkAll() {
      this.allChecked = !this.allChecked
      //this.list.forEach(item => item.checked = this.allChecked)
      this.list.forEach(items => items.forEach(item => item.checked = this.allChecked))
    },
    checkItem(pIndex, index) {
      this.list[pIndex][index].checked = !this.list[pIndex][index].checked
      let $all_checkbox = this.$refs['check_all']
      if (this.isAllChecks()) {
        this.allChecked = true
        $all_checkbox.indeterminate = false
      } else if (this.isNonChecks()) {
        this.allChecked = false
        $all_checkbox.indeterminate = false
      } else {
        $all_checkbox.indeterminate = true
      }
    },
    isAllChecks() {
      // return !this.list.some(item => !item.checked)
      for (let i = 0; i < this.list.length; i++) {
        const some = this.list[i].some(item => !item.checked)
        if (some) {
          return false
        }
      }
      return true
    },
    isNonChecks() {
      //return !this.list.some(item => item.checked)
      for (let i = 0; i < this.list.length; i++) {
        const some = this.list[i].some(item => item.checked)
        if (some) {
          return false
        }
      }
      return true
    }
  },
  filters: {
    number(n) {
      return n && n.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  }
})
