import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入英雄列表
import HeroesList from './views/heroes/heroeslist.vue'


//配置路由
const router=new VueRouter({
  routes:[
    {name:'heroes',path:'/heroes',component:HeroesList}
  ]
})

new Vue({
  render: h => h(App),
}).$mount('#app')
