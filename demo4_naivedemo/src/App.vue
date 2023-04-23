<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-config-provider :theme="theme"> 
          <Layout/>
      </n-config-provider>
    </n-message-provider>
  </n-loading-bar-provider>
  
    
  



  <!-- 水印 -->
  <WaterMark/>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useThemeStore } from './stores/themeStore'
import WaterMark from './components/WaterMark.vue';
import Layout from './components/Layout.vue';
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