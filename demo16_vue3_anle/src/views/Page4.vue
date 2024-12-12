<template>
  <div style="display: flex;flex-direction: column;">
    <div style="display: flex;justify-content: center;">
      <n-gradient-text :size="50" type="success">
        今日香王
      </n-gradient-text>

    </div>
    <n-card @Click="handleClick"  title="李芳" :bordered="false" hoverable>
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

</template>

<style scoped>
.n-card {
  max-width: 300px;
  max-height: 500px;
}
</style>

<script setup>

const numberAnimationInstRef = ref(null);
function handleClick() {
  numberAnimationInstRef.value?.play()
}

</script>