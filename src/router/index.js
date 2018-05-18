import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import scrollcontainer from '@/components/scroll-container'
import Md from '@/components/Md'
import Water from '@/components/Water'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home,
      iconCls: 'el-icon-message',
    },
    {
      path:'/',
      name:'导航。',
      component:Nav,
      children:[
        {
          path:'/scroll',
          name:'滑块',
          component:scrollcontainer,
        },
        {
          path:'/md',
          name:'md',
          component:Md,
        },
        {
          path:'/water',
          name:'water',
          component:Water,
        }
      ]
    }
  ]
})
