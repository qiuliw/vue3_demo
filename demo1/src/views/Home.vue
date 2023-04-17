<template>
    <h1>Home</h1>
    <A/>
    <B/>
    <C/>

</template>
<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue';
import A from '../components/A.vue';
import B from '../components/B.vue';
// import C from '../components/C.vue';

const C=defineAsyncComponent(()=>{
    import('../components/C.vue')
})

</script>

<style>

</style>
   
