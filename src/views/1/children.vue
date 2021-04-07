<!--
 * @Description: 父子组件通信(子组件) props/$emit
 * @Author: 李昭
 * @Date: 2021-03-31 15:15:24
 * @LastEditTime: 2021-03-31 15:23:51
 * @LastEditors: 李昭
-->
<template>
  <div>
    <button @click="childrenSendEmit">子组件给父组件发送值</button>
  </div>
</template>


<script>
export default {
  props: {
    // 子组件接收父组件传递过来的值
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      childrenVal:'子组件要给父组件传递的值'
    };
  },
  mounted() {
    console.log(this.name);
  },
  methods: {
    childrenSendEmit() {
      this.$emit('childrenEmit',this.childrenVal)
    }
  },
};
</script>


<style scoped>
</style>