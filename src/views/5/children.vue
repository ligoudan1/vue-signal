<!--
 * @Description: 子组件1
 * @Author: 李昭
 * @Date: 2021-03-31 16:08:53
 * @LastEditTime: 2021-03-31 16:39:35
 * @LastEditors: 李昭
-->
<template>
  <div>
    <button @click="sendMsg">将子组件的数据传递给祖父组件</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg:'我是子组件中的数据'
    }
  },
  mounted() {
    console.log(this.$attrs); // 接收到了祖父组件中的数据,如果需继续向下传递继续给子组件写  <xx v-bind="$attrs"></xx> 即可
  },
  methods: {
    sendMsg() {
      this.$emit('sendMsg',this.msg)
    }
  },
};
</script>