<template>
    <h1>Home</h1>
    <ul>
        <li 
            v-for='(item,index) in list' 
            :key='index'
            @click="change(index)"
        >
        {{ item.name }}
        </li>
    </ul>
    <component :is="currentComponent.com"></component>
    

</template>

<script setup>
import { reactive, ref } from 'vue';
import A from '../components/A.vue';
import B from '../components/B.vue';

let list=reactive([
    {name:'旋转',com:A},
    {name:'条约',com:B}
])

const currentComponent=reactive({
    com:list[0].com
})
const change=(idx)=>{
    currentComponent.com=list[idx].com
}

</script>
   
