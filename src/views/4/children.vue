<!--
 * @Description: 子组件1
 * @Author: 李昭
 * @Date: 2021-03-31 16:08:53
 * @LastEditTime: 2021-03-31 16:22:21
 * @LastEditors: 李昭
-->
<template>
  <div></div>
</template>


<script>
export default {
  data() {
    return {
      msg:'我是子组件中的数据'
    }
  },
  mounted() {
    console.log(this.$parent.msg); // 如果有多个父组件,就会多次执行
  },
};
</script>