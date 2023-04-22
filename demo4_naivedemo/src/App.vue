<template>

  <!-- layout -->
  <n-layout position="absolute" has-sider
  style="height: 700px"
  >
    <!-- 边列表 -->
    <!-- width宽度属性 -->
    <n-layout-sider
      content-style="padding: 24px;"
      :native-scrollbar="false"
      width="200px"
      bordered
    >

    <Sider/>
    

    </n-layout-sider>

    <!-- 展示区 -->
    <n-layout content-style="padding: 24px;"
      :native-scrollbar="false"
    >
    
      <RouterView/>

    </n-layout>
  </n-layout>

</template>

<script setup>
import Sider from './components/Sider.vue'

</script>

<style scoped>


</style>