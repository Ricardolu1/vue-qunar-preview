<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Home from '../src/pages/home/Home'
import Detail from '../src/pages/detail/Detail'
import City from '../src/pages/city/City'
export default {
  name: 'App',
  components:{
    Home,
    Detail,
    City
  }
}
</script>

<style>

</style>
