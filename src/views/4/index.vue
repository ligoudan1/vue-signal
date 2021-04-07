<!--
 * @Description: vue多层级组件通信 ($parent / $children / ref)
 * @Author: 李昭
 * @Date: 2021-03-31 16:07:30
 * @LastEditTime: 2021-03-31 16:17:25
 * @LastEditors: 李昭
-->
<template>
  <div>
    <father />
    <!-- <children /> -->
  </div>
</template>


<script>
import father from "./father";
// import children from "./children";
export default {
  components: {
    father,
    // children,
  },
  data() {
    return {
      msg1: "我是祖父组件中的数据",
    };
  },
};
</script>