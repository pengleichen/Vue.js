<template lang="pug">
  mt-tabbar(fixed, v-model="selected")
    mt-tab-item(:id="tab.id", v-for="(tab,index) in tabs" :key="tab.id")       
      i.fas.fa-2x.icon(:class="tab.icon") 
      p.label {{tab.label}}
</template>

<script>
import {ID} from '@/router'
export default {
  data() {
    return {
      selected: '',
      tabs: [
        {
          id: ID.HOME,
          icon: 'fa-home',
          label: '首页'
        },
        {
          id: ID.VIP,
          icon: 'fa-crown',
          label: '会员'
        },
        {
          id: ID.SHOPPING_CART,
          icon: 'fa-shopping-cart',
          label: '购物车'
        },
        {
          id: ID.SEARCH,
          icon: 'fa-search',
          label: '查找'
        }
      ]
    }
  },
  watch: {
    'selected'(newV) {
      this.$router.push({
        name: newV
      })

    },
    '$route'(to, from) {
      this.selected = to.name
    }
  },
  created() {
    this.selected = location.hash.substring(2)
  },
}
</script>

<style lang="less" scoped>
  p {
    &.label {
      margin-top: 5px;
    }
  }
</style>
