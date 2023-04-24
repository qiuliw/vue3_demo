<template>

    <n-card>
        <RouterLink to="/"><h2>首页🏠</h2></RouterLink>
    </n-card>    
    <n-card title="无序列⌚" @click="activate('right')"/>
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
                关水印
            </template>
            <template #unchecked>
                开水印
            </template>
        </n-switch>
    </n-card>

    <!-- <n-card>
        <RouterLink to="/NewComponentTest">新组件测试</RouterLink>
    </n-card> -->


    <!-- 抽屉内容 -->
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="无序列表">
        无序列表是一个没有特定顺序的列表项的集合，也称为项目列表。<br>在无序列表中，各个列表之间属于并列关系，没有先后顺序之分，它们之间以一个项目符号来标记。使用无序列表标签ul的type属性（使用CSS的list-style来代替），用户可以指定出现在列表项前的项目符号的样式，主要有：dis汉化🕸c（实心圆点）、circle（空心圆点）、square（实心方块）、none（无项目符号）。
      </n-drawer-content>
    </n-drawer>

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


// 抽屉
const active = ref(false);
const placement = ref("right");
const activate = (place) => {
    active.value = true;
    placement.value = place;
};



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
    color:#000000;
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