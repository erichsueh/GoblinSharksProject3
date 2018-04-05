<template>
  <div id="app">
    <navigationbar></navigationbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigationbar from '@/components/Navigationbar'
export default {
  name: 'app',
  components: {
    Navigationbar
  }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
