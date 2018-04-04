import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import NavigationBar from '@/components/Navigationbar'
import TabBar from '@/components/TabsBar'
import TabSide from '@/components/TabsSide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabbar',
      component: TabBar
    },
    {
      path: '/tabside',
      component: TabSide
    }
  ]
})
