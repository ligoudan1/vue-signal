<!--
 * @Description: 导航页面
 * @Author: 李昭
 * @Date: 2021-03-31 15:13:32
 * @LastEditTime: 2021-03-31 17:03:31
 * @LastEditors: 李昭
-->
<template>
  <div>
    <router-link to="/father">父子组件通信(props,$emit)</router-link>
    <br />
    <router-link to="/brother">兄弟组件通信(bus)</router-link>
    <br />
    <router-link to="/vuex">vue组件通信方式(vuex)</router-link>
    <br />
    <router-link to="/parent">vue多层级组件通信 ($parent / $children / ref)</router-link>
    <br />
    <router-link to="/attrs">vue组件通信方式($attrs/$listeners)</router-link>
    <br />
    <router-link to="/provide">vue组件通信方式,注入,注出(provide/inject)</router-link>
    <br />
    <router-link to="/solt">vue组件传值,插槽传值(solt)</router-link>
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>

</style>