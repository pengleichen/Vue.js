<template lang="pug">
  div.nav
    nut-navbar(@on-click-back="back", 
      @on-click-title="title", 
      @on-click-more="more",
      :leftShow="true",
      :rightShow="true") NavBar
</template>

<script>
export default {
  methods: {
    back() {
      alert('header头部，点击返回')
    },
    title() {
      alert('header头部，点击title')
    },
    more() {
      alert('header头部，点击更多')
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

