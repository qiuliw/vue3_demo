<template>
  <div style="display: flex;flex-direction: column;">
    <div style="display: flex;justify-content: center;">
      <n-gradient-text :size="50" type="success">
        今日香王
      </n-gradient-text>

    </div>
    <n-card @Click="handleClick"  title="邱xx" :bordered="false" hoverable>
      <template #cover>
        <img class="img" src="../../public/imgs/a-1.jpeg">
      </template>
      2024/12/12死于xx癌<br /><br />
      <n-statistic label="今日有" tabular-nums>
        <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
        <template #suffix>
          位后代为其上香
        </template>
      </n-statistic>
    </n-card>
  </div>

</template>

<style scoped>
.n-card {
  max-width: 300px;
  max-height: 400px;
}
</style>

<script setup>

const numberAnimationInstRef = ref(null);
function handleClick() {
  numberAnimationInstRef.value?.play()
}

</script>