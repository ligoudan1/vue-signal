<!--
 * @Description: vue组件通信(兄弟组件) bus
 * @Author: 李昭
 * @Date: 2021-03-31 15:25:14
 * @LastEditTime: 2021-03-31 15:48:32
 * @LastEditors: 李昭
-->
<template>
  <div>
    <button @click="sendBrother1">向兄弟组件1发送消息</button>
  </div>
</template>


<script>
import bus from "./bus";
export default {
  mounted() {
    bus.$on("sendBrother2", (val) => {
      console.log(val);
    });
  },
  methods: {
    sendBrother1() {
      bus.$emit("sendBrother1", "向兄弟组件1发送消息");
    },
  },
};
</script>


<style scoped>
</style>