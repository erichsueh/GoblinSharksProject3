<template>
  <div id="app">
    <navigationbar></navigationbar>
    <div id="navTab">
    <router-view></router-view>
    </div>
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

#navTab {
  padding-top: 56px;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 56px;
  z-index: 1020;
  background-color: #ffffff;
}
</style>
