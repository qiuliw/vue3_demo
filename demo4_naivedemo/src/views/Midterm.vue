<template>
    <n-card title="红楼梦" @click="changeHLM" hoverable>
      <template #cover>
        <img src="../static/hlm.webp">
      </template>
      卡片内容
    </n-card>
    <n-card title="西游记" hoverable>
      <template #cover>
        <img src="../static/xyj.webp">
      </template>
      卡片内容
    </n-card>
    <n-card title="水浒传" hoverable>
      <template #cover>
        <img src="../static/shz.webp">
      </template>
      卡片内容
    </n-card>
    <n-card title="三国演义" hoverable>
      <template #cover>
        <img src="../static/sgyy.webp">
      </template>
      卡片内容
    </n-card>
  </template>
  
  <style scoped>
  .n-card {
    float:left;
    max-width: 300px;
  }
  </style>

<script setup>
const route =useRoute()
const router = useRouter()
function changeHLM(){
  router.push('/HLM');
}

</script>