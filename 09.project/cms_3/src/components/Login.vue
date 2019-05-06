<template lang="pug">
  div
    form
      nut-textinput(v-model="name",
        label="用户名：",
        :required="true"
        )
      nut-textinput(v-model="password",
        label="密码：",
        type="password")  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>
