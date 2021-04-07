<!--
 * @Description: vue组件通信(兄弟组件) bus
 * @Author: 李昭
 * @Date: 2021-03-31 15:25:14
 * @LastEditTime: 2021-03-31 15:37:37
 * @LastEditors: 李昭
-->
<template>
  <div>
    <button @click="sendBrother2">向兄弟组件2发送消息</button>
  </div>
</template>


<script>
import bus from "./bus";
export default {
  mounted() {
    bus.$on("sendBrother1", (val) => {
      console.log(val);
    });
  },
  methods: {
    sendBrother2() {
      bus.$emit("sendBrother2", "向兄弟组件2发送消息");
    },
  },
};
</script>


<style scoped>
</style>