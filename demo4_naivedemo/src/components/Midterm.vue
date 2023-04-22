<template>
    <n-card title="红楼梦"  hoverable>
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
    <n-card title="红楼梦" hoverable>
      <template #cover>
        <img src="../static/hlm.webp">
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