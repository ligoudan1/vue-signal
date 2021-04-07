<!--
 * @Description: 父组件1
 * @Author: 李昭
 * @Date: 2021-03-31 16:08:29
 * @LastEditTime: 2021-03-31 16:38:44
 * @LastEditors: 李昭
-->
<template>
  <children v-bind="$attrs" v-on="$listeners"/>
</template>


<script>
import children from "./children";
export default {
  components: {
    children,
  },
  data() {
    return {
      msg: "我是父组件中的数据",
    };
  },
  mounted() {
  
  },
};
</script>