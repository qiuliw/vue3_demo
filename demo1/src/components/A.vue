<template>
    <h6>A组件</h6>
    {{ count }}
    {{ name }}
</template>


<script setup>
import { useCounterStore } from '../stores/counter'

//解构
const { count,name} = useCounterStore()


</script>