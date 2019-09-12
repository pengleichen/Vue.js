new Vue({
  el: '#app',
  template: `
    <div>
      <v-table :columns="columns" :data="data"></v-table>
    </div>
  `,
  data: {
    columns: [
      {
        title: '姓名',
        key: 'name',
        width: '50'
      },
      {
        title: '年龄',
        key: 'age',
        sortable: true
      },
      {
        title: '出生日期',
        key: 'birthday',
        sortable: true
      },
      {
        title: '地址',
        key: 'address'
      }
    ],
    data: [
      {
        name: '小明',
        age: 18,
        birthday: '1999-02-12',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '1992-01-23',
        address: '北京市海淀区西二旗'
      },
      {
        name: '李小红',
        age: 30,
        birthday: '1987-11-10',
        address: '上海市浦东新区世纪大道'
      },
      {
        name: '邹小伟',
        age: 26,
        birthday: '1991-10-10',
        address: '深圳市南山区深南大道'
      }
    ]
  },
  computed: {},
  methods: {
    handleAddData() {
      this.data.push({
        name: '刘晓彤',
        age: 19,
        birthday: '1998-03-20',
        address: '北京市东城区东直门'
      })
    }
  }
})
