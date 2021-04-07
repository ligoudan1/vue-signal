<!--
 * @Description: 插槽组件
 * @Author: 李昭
 * @Date: 2021-03-31 17:04:25
 * @LastEditTime: 2021-03-31 17:14:23
 * @LastEditors: 李昭
-->
<template>
  <div>
    这是一个插槽
    <slot name="children" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  name:'slotTag',
  data() {
    return {
      msg: "插槽组件带的值",
    };
  },
};
</script>