import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'


//导入路由模块
import router from './router'
//引入axios，将axios作为全局使用
import axios from '../node_modules/axios/dist/axios.js'
axios.defaults.baseURL='http://localhost:3000/'
//将axios放到vue的原型上,以后在使用axios时就直接使用this.newaxios.不用每次引入
Vue.prototype.newaxios=axios;


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
