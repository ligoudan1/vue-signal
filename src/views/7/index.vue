<!--
 * @Description: vue组件传值(插槽传值)solt
 * @Author: 李昭
 * @Date: 2021-03-31 17:02:14
 * @LastEditTime: 2021-03-31 17:15:33
 * @LastEditors: 李昭
-->
<template>
  <slotTag>
    <div slot-scope="props" slot='children'>{{ props.msg }}</div>
  </slotTag>
</template>


<script>
import slotTag from "./slotTag";
export default {
  components: {
    slotTag,
  },
};
</script>