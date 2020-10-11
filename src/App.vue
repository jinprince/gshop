<template>
 <div id="app">
     <router-view></router-view>
     <Fooder-Guide v-show="$route.meta.showFooter"></Fooder-Guide>
 </div>
</template>
<script>
import FooderGuide from './components/FooderGuide/FooderGuide.vue'
export default {
  components:{
      FooderGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5

</style>
