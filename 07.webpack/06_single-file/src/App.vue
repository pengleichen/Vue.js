<template>
  <div class="msg">
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, Vue Component'
    }
  }
}
</script>

<style>
  .msg {
    color: red;
  }
</style>
