<template>
  <div style="height:750px; position: relative">
    <n-layout position="absolute">
        <n-layout-header style="height: 70px; padding: 24px" bordered>
            <Menu/>
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 70px; bottom: 64px">
            <n-layout-sider bordered content-style="padding: 24px;" :width="450">
            <component :is="com"/>
            </n-layout-sider>
            <n-layout content-style="padding: 24px;"  :native-scrollbar="false">
            <RouterView/>
            </n-layout>
        </n-layout>
    </n-layout>
  </div>
</template>
<script setup>
import Picture from './Picture.vue';
import Menu from '../Layout/Menu.vue';
import { storeToRefs } from 'pinia';
import { useComStore } from '../store/comStore';
const comStore=useComStore();
const {com} =storeToRefs(comStore);

</script>