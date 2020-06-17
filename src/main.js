/*
 * @Description: 
 * @Author: gleason
 * @Github: https://github.com/GleasonBian
 * @Date: 2020-06-17 10:49:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-06-17 11:18:28
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入 mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

// 使用 mint 
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
