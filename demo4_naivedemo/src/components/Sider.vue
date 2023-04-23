<template>

    <n-card>
        <RouterLink to="/"><h2>首页🏠</h2></RouterLink>
    </n-card>    
    <n-card title="无序列⌚"/>
    <ul style="list-style-type:none">
        <li v-for="{name,path} in str">
            <n-card class="li"><a :href="path">{{ name }}</a></n-card>
        </li>
    </ul>
    <!-- <n-card class="li"><a href="#/happy">一起去看<br>流星雨✨</a></n-card> -->
    <n-button @click="changeDark">深色</n-button>
    <n-button @click="changeLight">浅色</n-button>
    <n-switch @click="changeWater">
        <template #checked >
            印水
        </template>
        <template #unchecked>
        水印
        </template>
  </n-switch>


</template>



<script setup>
import { storeToRefs } from 'pinia';
import { useThemeStore } from '../stores/themeStore'
import { useWaterStore } from '../stores/waterStore'
const waterStore=useWaterStore();

const { show }=storeToRefs(waterStore)
//解构
const themeStore =useThemeStore()
const { theme,darkTheme } = storeToRefs(themeStore)

function changeDark(){
    theme.value=darkTheme;
}
function changeLight(){
    theme.value=ref(null)
}
function changeWater(){
    if(show.value==true){
        show.value=ref(false);
    }else{
        show.value=ref(true)
    }
}



let str=ref([
    {name:'红楼梦',path:'#/HLM'},
    {name:'西游记',path:'#/XYJ'},
    {name:'水浒传',path:'#/SHZ'},
    {name:'三国演义',path:'#/SGYY'}
])




</script>

<style>
a{
    text-decoration:none
}
h2{
    margin: auto;
}
ul,li{
    padding:0;
    margin:0;
}
</style>