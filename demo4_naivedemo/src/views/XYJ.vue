<template>
    <div class="XYJ">
        <n-layout position="absolute" has-sider>
        <n-layout-sider class="centent"
        :native-scrollbar="false"
         content-style="padding: 24px;" width="70%">

            <!-- 介绍 -->
            <component :is="XYJContent"/>

        </n-layout-sider>

        <n-layout-content class="card"
        :native-scrollbar="false"
        content-style="padding: 24px;">

            <!-- 作品卡片  -->
            <XYJCard/>

            <!-- 作者卡片 -->
            <XYJAuthor/>

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
    background-image: url("../static/XYJBack.webp");
    background-size: cover;
  }

</style>

<script setup>
import XYJCard from '../components/XYJCard.vue';
import XYJContent from '../components/XYJContent.vue'
import XYJAuthor from '../components/XYJAuthor.vue'
</script>
