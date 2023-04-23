<template>
    <n-card 
    @click="changeNew"
    hoverable>
        <n-thing>
        <template v-if="avatar" #avatar>
            <n-avatar>
            <n-icon>
                <img src="../static/lgz.jpeg"/>
            </n-icon>
            </n-avatar>
        </template>
        <template v-if="header" #header>
            罗贯中
        </template>
        <template v-if="description" #description>
            作者
        </template>
        罗贯中（约1330年－约1400年），名本，字贯中，太原人，号湖海散人，元末明初小说家，《三国志通俗演义》的作者，其它主要作品有小说《隋唐两朝志传》《残唐五代史演义》《三遂平妖传》《水浒全传》。《三国志通俗演义》、《三国演义》）是罗贯中的力作，这部长篇小说对后世文学创作影响深远。
        </n-thing>
    </n-card>    
</template>
  
<script setup>
import { defineComponent, ref } from "vue";
import { CashOutline as CashIcon } from "@vicons/ionicons5";

const  avatar= ref(true)
const  header=ref(true)
const  headerExtra=ref(true)
const  description=ref(true)
const  footer= ref(true)
const  action= ref(true)

function changeNew(){
  window.open("https://baike.baidu.com/item/%E7%BD%97%E8%B4%AF%E4%B8%AD/172206?fromModule=lemma_search-box", "_blank");
}

  </script>