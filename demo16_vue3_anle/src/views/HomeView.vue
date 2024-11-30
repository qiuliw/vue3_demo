<template>
  <n-config-provider :theme="currentTheme">
    <!-- 布局 -->
    <n-layout class="home">
      <n-layout-header bordered>
        <!-- 绑定点击事件来切换主题 -->
        <n-button @click="toggleTheme">深色</n-button>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';

// 定义当前主题的响应式状态，默认为 lightTheme
const currentTheme = ref(null);

// 定义一个方法来切换主题
function toggleTheme() {
  // 如果当前是 lightTheme，则切换到 darkTheme，反之亦然
  currentTheme.value = currentTheme.value === null ? darkTheme : null;
}
</script>

<style scoped>
.home {
  height: 100vh;
}

.n-layout-header {
  height: 64px;
}

.n-layout-footer {
  height: 100%;
}
</style>