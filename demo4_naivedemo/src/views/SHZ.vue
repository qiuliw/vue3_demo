<template>
    <div>
        <n-layout position="absolute" has-sider>
        <n-layout-sider class="centent"
        :native-scrollbar="false"
         content-style="padding: 24px;" width="70%">

            <!-- 介绍 -->
            <component :is="SHZContent"/>

        </n-layout-sider>

        <n-layout-content class="card"
        :native-scrollbar="false"
        content-style="padding: 24px;">

            <!-- 作品卡片  -->
            <SHZCard/>

            <!-- 作者卡片 -->
            <SHZAuthor/>

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
    background-image: url("../static/SHZBack.jpg");
    background-size: cover;
  }

</style>

<script setup>
import SHZCard from '../components/SHZCard.vue';
import SHZContent from '../components/SHZContent.vue'
import SHZAuthor from '../components/SHZAuthor.vue'
</script>