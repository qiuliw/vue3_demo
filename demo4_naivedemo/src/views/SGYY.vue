<template>
    <div>
        <n-layout position="absolute" has-sider>
        <n-layout-sider class="centent"
        :native-scrollbar="false"
         content-style="padding: 24px;" width="70%">

            <!-- 介绍 -->
            <component :is="SGYYContent"/>

        </n-layout-sider>

        <n-layout-content class="card"
        :native-scrollbar="false"
        content-style="padding: 24px;">

            <!-- 作品卡片  -->
            <SGYYCard/>

            <!-- 作者卡片 -->
            <SGYYAuthor/>

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
    background-image: url("../static/SGYYBack.jpeg");
    background-size: cover;
  }

</style>

<script setup>
import SGYYCard from '../components/SGYYCard.vue';
import SGYYContent from '../components/SGYYContent.vue'
import SGYYAuthor from '../components/SGYYAuthor.vue'
</script>