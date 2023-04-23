<template>
  <n-config-provider :theme="theme">
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
  </n-config-provider>


  <!-- 水印 -->
  <WaterMark/>

</template>

<script setup>
import Sider from './components/Sider.vue'
import { storeToRefs } from 'pinia';
import { useThemeStore } from './stores/themeStore'
import WaterMark from './components/WaterMark.vue';
//解构
const store =useThemeStore()
const { theme } = storeToRefs(store)


</script>

<style scoped>

p{
    font-size: 16px;
    text-indent:32px;
    
}

</style>