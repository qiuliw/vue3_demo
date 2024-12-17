<template>
  <n-config-provider :theme="currentTheme">
    <!-- 布局 -->
    <n-layout class="home">
      <n-layout-header bordered>
        <div style="display: flex; justify-content: space-between;width: 100vw;">
          <div style="display: flex;align-items: center;">
            <RouterLink to="/home">
              <n-button quaternary><n-gradient-text type="danger" size="20">
                  去灵堂
                </n-gradient-text></n-button>

            </RouterLink>
          </div>
          <div style="display: flex;justify-content: center;align-items: center;">
            <n-gradient-text type="info" size="30">
              香品管理
            </n-gradient-text>
          </div>
          <div style="display: flex;align-items: center;">
            <n-button @click="toggleTheme" quaternary>{{currentThemeStr}}</n-button>
          </div>

        </div>



      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <XiangTable />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';
import XiangTable from '@/components/XiangTable.vue';

// 定义当前主题的响应式状态，默认为 lightTheme
const currentTheme = ref(darkTheme);
const currentThemeStr = ref('浅色');
// 定义一个方法来切换主题
function toggleTheme() {
  // 如果当前是 lightTheme，则切换到 darkTheme，反之亦然
  currentTheme.value = currentTheme.value === null ? darkTheme : null;
  currentThemeStr.value = currentTheme.value === null ? '深色': '浅色';
}
</script>

<style scoped>
.home {
  height: 100vh;
}

.n-layout-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
  padding: 3em;
}

.n-layout-footer {
  height: 100%;
}
</style>