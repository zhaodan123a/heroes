import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'


//导入路由模块
import router from './router'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
