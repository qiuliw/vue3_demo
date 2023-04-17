<template>
    <h6>A组件</h6>
    {{ count }}
    {{ name }}
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter'

//解构
const store =useCounterStore()
const { count,name} = storeToRefs(store)

//批量更新
store.$patch(state=>{
    state.count++;
    state.name = '炸雷'
})

</script>