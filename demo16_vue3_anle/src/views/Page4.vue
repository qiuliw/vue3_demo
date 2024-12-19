<template>
  <div style="display: flex;width: 100vw;height: 100vh;margin:100px;">
    <!-- 人物 -->
    <div style="flex:1;display: flex;flex-direction: column;justify-content: center;align-content: center;">
      <div style="display: flex;justify-content: center;align-items: center;">
        <span>
          <n-gradient-text :size="50" type="success">
            今日香王
          </n-gradient-text>
        </span>
      </div>
      <div style="display: flex;justify-content: center;">
        <n-card @Click="handleClick" title="李芳" :bordered="false" hoverable>
          <template #cover>
            <img class="img" src="../../public/imgs/a-1.jpeg">
          </template>
          李芳，慈爱母亲，以家庭为荣，温暖如春日阳光。2024年安详离世，享年76岁，爱永留心间。
          <n-statistic style="margin-top: 20px;" label="今日有" tabular-nums>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
            <template #suffix>
              位后代为其上香
            </template>
          </n-statistic>
        </n-card>
      </div>

    </div>
    <!-- 数据 -->
    <div class="datashow" style="">
      <NSpace>
        <QEcharts />
      </NSpace>
    </div>
  </div>


</template>

<style scoped>
.n-card {
  max-width: 300px;
  max-height: 500px;
}

.datashow {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width:800px) {
  .datashow {
    display: none;
  }
}
</style>

<script setup>
import QEcharts from '@/components/QEcharts.vue';
import { NCard, NSpace } from 'naive-ui';


const numberAnimationInstRef = ref(null);
function handleClick() {
  numberAnimationInstRef.value?.play()
}

</script>