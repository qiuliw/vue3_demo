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
    <n-card class="li"><a href="#/happy">一起去看<br>流星雨✨</a></n-card>
</template>



<script setup>

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