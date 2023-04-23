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
    <n-card :bordered="false">
        <n-button @click="changeTheme">{{ themeStr }}</n-button>
    </n-card>

    <n-card :bordered="false">
        <n-switch @click="changeWater">
            <template #checked >
                印水
            </template>
            <template #unchecked>
                水印
            </template>
        </n-switch>
    </n-card>


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
const themeStr=ref('深色');
function changeTheme(){
    if(theme.value==null){
        theme.value=darkTheme;
        themeStr.value='浅色'
    }else{
        theme.value=ref(null);
        themeStr.value='深色'
    }

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

<style scoped>
a{
    text-decoration:none;
    font-size:16px;
}
h2{
    margin: auto;
}
ul,li{
    padding:0;
    margin:0;
}
.n-button{
    padding: auto;
    margin:0;
}
</style>