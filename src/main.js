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

//导入武器管理
import WeaponList from './views/weapons/weaponlist.vue'
//导入装备管理
import EquipList from './views/equips/equiplist.vue'

//配置路由
const router=new VueRouter({
  routes:[
    {name:'home',path:'/',redirect:'/heroes'},
    {name:'heroes',path:'/heroes',component:HeroesList},
    {name:'weapons',path:'/weapons',component:WeaponList},
    {name:'equips',path:'/equips',component:EquipList},
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
