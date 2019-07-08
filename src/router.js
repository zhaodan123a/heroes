//因为路由是基于vue的，所以需要将vue引入
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入英雄列表
import HeroesList from './views/heroes/heroeslist.vue'
import AddHero from './views/heroes/addhero.vue'

//导入武器管理
import WeaponList from './views/weapons/weaponlist.vue'
//导入装备管理
import EquipList from './views/equips/equiplist.vue'

//配置路由
const router=new VueRouter({
  //修改高亮显示，因为高亮已经有了需要的样式，所以将类名赋给样式类即可
  //linkExactActiveClass:'active',
    // 上面是精确高亮，表示必须地址栏路由完全是指定路由时才会高亮
    // 下面的这种是只要地址栏中包含了路由就会高亮
    linkActiveClass:'active',
  routes:[
    {name:'home',path:'/',redirect:'/heroes'},
    {name:'heroes',path:'/heroes',component:HeroesList},
    {name:'weapons',path:'/weapons',component:WeaponList},
    {name:'equips',path:'/equips',component:EquipList},
    {name:'addhero',path:'/heroes/add',component:AddHero},
  ]
})
//将路由模块导出
export default router;