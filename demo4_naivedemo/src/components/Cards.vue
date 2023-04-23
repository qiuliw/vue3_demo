<template>
    <n-card title="红楼梦" @click="changeHLM" hoverable>
      <template #cover>
        <img src="../static/hlm.webp"
        alt="红楼梦" title="红楼梦">
      </template>
      世事洞明皆学问<br>
      人情练达即文章
    </n-card>

    <n-card title="西游记" @click="changeXYJ" hoverable >
      <template #cover>
        <img src="../static/xyj.webp" 
        alt="西游记" title="西游记">
      </template>
      心生 种种魔生<br>
      心灭 种种魔灭
    </n-card>

    <n-card title="水浒传" @click="changeSHZ" hoverable>
      <template #cover>
        <img src="../static/shz.webp" 
        alt="水浒传" title="水浒传">
      </template>
      爷爷生在天地间<br>
      不怕朝廷不怕官<br>
      梁山泊里住一世啊<br>
      好酒好肉赛神仙
    </n-card>

    <n-card title="三国演义" @click="changeSGYY" hoverable>
      <template #cover>
        <img src="../static/sgyy.webp" alt="三国演义" title="三国演义">
      </template>
      滚滚长江东逝水<br>
      浪花淘尽英雄
    </n-card>
  </template>
  
  <style scoped>
  .n-card {
    float:left;
    max-width: 300px;
  }
  </style>

<script setup>
import { useMessage } from "naive-ui";

const route =useRoute()
const router = useRouter()

function changeHLM(){
  router.push('/HLM');

}
function changeXYJ(){
  router.push('/XYJ');
}
function changeSHZ(){
  router.push('/SHZ');
}
function changeSGYY(){
  router.push('/SGYY');
}

</script>