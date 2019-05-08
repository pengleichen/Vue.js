<template lang="pug">
  div#app
    Header
    router-view.container
    Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
  }
  .container {
    flex: 1;
    padding-top: 40px;
    padding-bottom: 60px;
    overflow: auto;
  }
</style>
