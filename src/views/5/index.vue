<!--
 * @Description: vue组件通信方式($attrs/$listeners)
 * @Author: 李昭
 * @Date: 2021-03-31 16:23:47
 * @LastEditTime: 2021-03-31 16:39:15
 * @LastEditors: 李昭
-->
<template>
  <div>
    <father :msg="msg" :sendVal="sendVal" @sendMsg="sendMsg"/>
  </div>
</template>


<script>
import father from "./father";
export default {
  components:{
    father
  },
  data() {
    return {
      msg:'我是祖父组件中的数据',
      sendVal:'这是我要发送下去的数据'
    }
  },
  methods: {
    sendMsg(val) {
      console.log(val);
    }
  },
}
</script>