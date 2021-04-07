<!--
 * @Description: vue组件通信(兄弟组件) bus
 * @Author: 李昭
 * @Date: 2021-03-31 15:25:14
 * @LastEditTime: 2021-03-31 15:28:44
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