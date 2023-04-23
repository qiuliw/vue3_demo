<template>
    <div clas="HLM">
        <n-layout position="absolute" has-sider>
        <n-layout-sider class="centent"
        :native-scrollbar="false"
         content-style="padding: 24px;" width="70%">

            <!-- 红楼梦介绍 -->
            <component :is="HLMContent"/>

        </n-layout-sider>

        <n-layout-content class="card"
        :native-scrollbar="false"
        content-style="padding: 24px;">

            <!-- 红楼梦卡片  -->
            <HLMCard/>

            <!-- 作者卡片 -->
            <HLMAuthor/>

        </n-layout-content>
      </n-layout>
        
    </div>
    
</template>

<style scoped>
.n-card{
    /* float: left; */
    max-width: 300px;
}

  /* .n-layout-content {
  background: rgba(128, 128, 128, 0.4);
} */


.centent{
    background-image: url("../static/HLMBack.jpg");
    background-size: cover;
  }
</style>

<script setup>
import HLMCard from '../components/HLMCard.vue';
import HLMContent from '../components/HLMContent.vue'
import HLMAuthor from '../components/HLMAuthor.vue'
</script>