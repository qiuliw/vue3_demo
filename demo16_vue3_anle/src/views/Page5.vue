<script setup lang="ts">
import { NCard } from 'naive-ui';
</script>

<template>
  <div class="wrap">
    <div class="left" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
      <div style="width: auto;display: flex;flex-direction: column;justify-content: center;align-content: center;">
        <n-gradient-text :size="50" type="warning">
          入住流程
        </n-gradient-text>
      </div>
      <NCard class="card">
        <In />
      </NCard>
    </div>
    <div class="right">
      <div style="width: auto;display: flex;flex-direction: column;justify-content: center;align-content: center;">
        <n-gradient-text :size="50" type="warning">
          联系我们 
        </n-gradient-text>
      </div>
      <NCard class="card">
        <n-card title="套餐一" size="small" hoverable class="card-item">
          99元：99支电子沉香、头七遗照特效、一年灵堂租期。
        </n-card>
        <n-card title="套餐二" size="small" hoverable class="card-item">
          999元：999支高级电子沉香、祭日遗照特效、一百年灵堂租期！
        </n-card>
        <n-card title="套餐三" size="small" hoverable class="card-item">
          9999元：99999支高级电子沉香、永久遗照特效、永久灵堂租期！
        </n-card>
        <NCard>
        联系电话：444-44444
        </NCard>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;

  min-width: 1000px;

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }
}

.card {
  background-color: rgba(255, 255, 255, 0.8);
  /* 白色背景，50%透明度 */
  width: 300px;
}

.card-item{
  margin-bottom: 10px;
}
</style>