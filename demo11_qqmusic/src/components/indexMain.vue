<template>
  <!-- 最外框 -->
  <div class="wrap">
    <!-- 左边导航条 -->
    <LeftNav/>
    
    <!-- 右边 -->
    <div class="right">

      <!-- 顶title条 -->
      <IndexTopTitle/>

      <!-- 中间音乐区 -->
      <musicArea/>

      <!-- 底部播放器区域 -->
      <buttomPlayArea/>

    </div>

      
  </div>
</template>

<script setup>
import LeftNav from './leftNav/leftNav.vue';
import IndexTopTitle from './indexTopTitle/indexTopTitle.vue';
import musicArea from './musicArea/musicArea.vue'
import buttomPlayArea from './buttomPlayArea/buttomPlayArea.vue'
const msg='qq音乐-网页版'

</script>

<style lang="less" scoped>
// 最外框
.wrap{
  width: 1020px;height: 690px;margin:30px auto;
  border-radius: 10px;
  display: flex;
  align-items: stretch;
  box-shadow:  0 0 50px #d5d5d5;

  // 右边
  .right{
    background: white;
    flex:1;
    display: flex;
    border-radius: 0 10px 10px 0;
    flex-direction: column;
    justify-content:stretch;
    overflow: hidden;

  }


}
</style>