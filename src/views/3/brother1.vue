<!--
 * @Description: vue组件通信(vuex)
 * @Author: 李昭
 * @Date: 2021-03-31 15:25:14
 * @LastEditTime: 2021-03-31 16:05:25
 * @LastEditors: 李昭
-->
<template>
  <div>
  </div>
</template>


<script>
export default {
  computed:{
    testVal:{
      get() {
        return this.$store.state.testVal
      },
      set(val) {
        this.$store.commit('SET_TESTVAL',val)
      }
    }
  },
  created() {
    this.testVal = '改变了测试数据1'
  },
  mounted() {
    console.log(this.testVal);
  },
  methods: {

  },
};
</script>


<style scoped>
</style>