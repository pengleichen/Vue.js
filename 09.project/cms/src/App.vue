<template>
  <div id="app">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/home.svg">
        首页
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/custom-discovery.svg">
        发现
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/order.svg">
        订单
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/me.svg">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null
    }
  },
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

</style>
