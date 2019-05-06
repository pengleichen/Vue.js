<template>
  <div id="app">
    <NavBar/>
    <MainBody/>
    <BottomBar/>
  </div>
</template>

<script>
import MainBody from '@/components/MainBody'
import BottomBar from '@/components/BottomBar'
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar,
    MainBody,
    BottomBar
  }
}
</script>

<style lang="scss">

</style>
