<!--
 * @Description: vue组件通信(任意组件) vuex
 * @Author: 李昭
 * @Date: 2021-03-31 15:25:14
 * @LastEditTime: 2021-03-31 15:47:51
 * @LastEditors: 李昭
-->
<template>
  <div>
    <brother1 />
    <brother2 />
  </div>
</template>


<script>
import brother1 from './brother1'
import brother2 from './brother2'

export default {
  components:{
    brother1,
    brother2
  }
};
</script>


<style scoped>
</style>