<template lang="pug">
  div
    mt-swipe.swipe(:auto="4000")
      mt-swipe-item(v-for="item in items", :key="item.id")
        img(:src="item.src")
</template>

<script>
  export default {
    data() {
      return {
        swipeNum: 5,
        items: []
      }
    },
    created() {
      for(let i = 0; i < this.swipeNum; i++) {
        this.items.push({id: i, src: `http://lorempixel.com/400/200?${i}`})
      }
    }
  }
</script>

<style lang="less" scoped>
.swipe {
  height: 200px;
}
</style>