<template>
  <!-- 主题提供 :theme="darkTheme" -->
  <n-config-provider :theme="darkTheme" >
      <RouterView/>
  </n-config-provider>
</template>

<script setup>
import { darkTheme } from 'naive-ui';
</script>

<style scoped>

</style>
