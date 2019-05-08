<template lang="pug">
  mt-header(fixed, title="标题过长会隐藏后面的内容啊哈哈哈哈")
    router-link(to="/", slot="left")
      mt-button(icon="back") 返回
    mt-button(icon="more", slot="right")
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>

</style>