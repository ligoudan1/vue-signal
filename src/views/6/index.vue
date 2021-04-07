<!--
 * @Description: vue组件通信方式,注入,注出(provide/inject)
 * @Author: 李昭
 * @Date: 2021-03-31 16:23:47
 * @LastEditTime: 2021-03-31 17:00:47
 * @LastEditors: 李昭
-->
<template>
  <div>
    <father />
    展示数据
    <br />
    {{ msg.val }}
    <button @click="changeVal">变更数据</button>
  </div>
</template>


<script>
import father from "./father";
export default {
  components: {
    father,
  },
  provide() {
    return { msg: this.msg };
  },
  data() {
    return {
      msg: { val: "我是祖父组件中的数据", index: 1 },
      sendVal: "这是我要发送下去的数据",
    };
  },
  methods: {
    changeVal() {
      this.msg.val += '数据改变了'      
    }
  },
};
</script>