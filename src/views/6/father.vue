<!--
 * @Description: 父组件1
 * @Author: 李昭
 * @Date: 2021-03-31 16:08:29
 * @LastEditTime: 2021-03-31 17:01:52
 * @LastEditors: 李昭
-->
<template>
  <div>
    子组件中的值
    {{ msg.val }}
    <children />
  </div>
</template>


<script>
import children from "./children";
export default {
  components: {
    children,
  },
  inject: ["msg"], // 此处可拓展操作,类似props
  data() {
    return {
      msg1: "我是父组件中的数据",
    };
  },
  mounted() {

  },
};
</script>