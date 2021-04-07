/*
 * @Description: 
 * @Author: 李昭
 * @Date: 2021-03-31 15:38:45
 * @LastEditTime: 2021-03-31 16:04:51
 * @LastEditors: 李昭
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testVal:'测试数据1',
    testNmae:'测试姓名1'
  },
  mutations: {
    SET_TESTVAL(state,newval) {
      state.testVal = newval
    }
  },
})
