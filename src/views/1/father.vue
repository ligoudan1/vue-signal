<!--
 * @Description: 父子组件通信(父组件) props/$emit
 * @Author: 李昭
 * @Date: 2021-03-31 15:07:28
 * @LastEditTime: 2021-03-31 15:24:28
 * @LastEditors: 李昭
-->


<template>
  <div>
    <children :name="name" @childrenEmit="childrenEmit" />
  </div>
</template>

<script>
// 引入子组件
import children from "./children";

export default {
  components: {
    children,
  },
  data() {
    return {
      name: "父组件给子组件传递的值",
    };
  },
  methods: {
    /**
     * @description:子组件给父组件传递的事件
     * @param  {*}
     * @return {*}
     */
    childrenEmit(val) {
      console.log(val);
    },
  },
};
</script>
