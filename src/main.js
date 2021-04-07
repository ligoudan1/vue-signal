/*
 * @Description: 
 * @Author: 李昭
 * @Date: 2021-03-31 15:02:59
 * @LastEditTime: 2021-03-31 15:33:58
 * @LastEditors: 李昭
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
 router,
 store,
 render: h => h(App)
}).$mount('#app')