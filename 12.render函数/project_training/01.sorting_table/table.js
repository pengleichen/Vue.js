Vue.component('vTable', {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentColumns: [],
      currentData: []
    }
  },
  methods: {
    makeColumns() {
      this.currentColumns = this.columns.map((col, index) => {
        col._sortType = 'normal'
        col._index = index
        return col
      })
    },
    makeData() {
      this.currentData = this.data.map((row, index) => {
        row._index = index
        return row
      })
    },
    handleSortByAsc(index) {
      const key = this.currentColumns[index].key
      this.currentColumns.forEach(col => {
        col._sortType = 'normal'
      })
      this.currentColumns[index]._sortType = 'asc'
      this.currentData.sort((a, b) => a[key] > b[key] ? 1 : -1)
    },
    handleSortByDesc(index) {
      const key = this.currentColumns[index].key
      this.currentColumns.forEach(col => {
        col._sortType = 'normal'
      })
      this.currentColumns[index]._sortType = 'desc'
      this.currentData.sort((a, b) => a[key] < b[key] ? 1 : -1)
    }
  },
  watch: {
    data() {
      this.makeData()
      let sortedColumn = this.currentColumns.filter(col => col._sortType !== 'normal')
      if (sortedColumn.length) {
        if (sortedColumn[0]._sortType === 'asc') {
          this.handleSortByAsc(sortedColumn[0]._index)
        } else {
          this.handleSortByDesc(sortedColumn[0]._index)
        }
      }
    }
  },
  mounted() {
    this.makeColumns()
    this.makeData()
  },
  render(h) {
    let ths = []
    let trs = []
    this.currentColumns.forEach((col, index) => {
      if (col.sortable) {
        ths.push(h('th', {
          attrs: {
            width: col.with
          }
        }, [
          h('span', col.title),
          // 升序
          h('a', {
            attrs: {
              title: '升序'
            },
            class: {
              on: col._sortType === 'asc'
            },
            on: {
              click: () => {
                this.handleSortByAsc(index)
              }
            }
          }, '↑'),
          // 降序
          h('a', {
            attrs: {
              title: '降序'
            },
            class: {
              on: col._sortType === 'desc'
            },
            on: {
              click: () => {
                this.handleSortByDesc(index)
              }
            }
          }, '↓')
        ]))
      } else {
        ths.push(h('th', {
          attrs: {
            width: col.width
          }
        }, col.title))
      }
    })
    this.currentData.forEach(row => {
      let tds = []
      this.currentColumns.forEach(cell => {
        tds.push(h('td', row[cell.key]))
      })
      trs.push(h('tr', tds))
    })
    return h('table', [
      h('thead', [
        h('tr', ths)
      ]),
      h('tbody', trs)
    ])
  }
})
