<template>
  <div>
    <RouterLink to="/home">home</RouterLink>
    |
    <RouterLink to="/about">about</RouterLink>
  </div>
  <RouterView/>
</template>
<script setup>
import About from './components/about.vue';


</script>

<style scoped>

</style>
