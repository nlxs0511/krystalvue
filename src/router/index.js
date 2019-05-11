import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Process from '@/components/login/Process'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',// path 设置为 “/” ，默认显示该页面
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path:"/login",
      component:Process,
      name:"Process"
    }
  ],
  mode:"history"    // mode 设置为history ，去掉地址栏上的 # 号
})
