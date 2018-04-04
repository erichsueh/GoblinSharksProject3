import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import NavigationBar from '@/components/Navigationbar'
import TabBar from '@/components/Tabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: TabBar
    }
  ]
})
