<template>
    <h1>红楼梦</h1>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useComStore } from '../store/comStore'
import HLMAuthor from '../components/HLMAuthor.vue';
const comStore=useComStore();
const { com } =storeToRefs(comStore);
onBeforeMount(()=>{
    com.value=HLMAuthor
})

</script>