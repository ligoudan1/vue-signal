<!--
 * @Description: 父组件1
 * @Author: 李昭
 * @Date: 2021-03-31 16:08:29
 * @LastEditTime: 2021-03-31 16:21:50
 * @LastEditors: 李昭
-->
<template>
  <children ref="children"/>
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
    console.log(this.$children); // 此时得到的子组件是个集合,更推荐使用ref来获取组件值
    console.log(this.$children[0].msg);
    // -------------------------------------
    console.log(this.$refs.children); // 精准获取到想要获取的子组件
    console.log(this.$refs.children.msg);
  },
};
</script>