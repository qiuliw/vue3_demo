<template>
    <div class="return" @click="goTo(0)">
        <i class="fa fa-chevron-up fa-2x i-up"></i>
    </div>
</template>

<style lang="less" scoped>
.return{ 
    z-index: 99;
    position:fixed; bottom:0px; right:0px;
    height: 30px;width: 30px;
    background-color: pink;
    border-radius: 50% 0 0 0;
    display: flex;justify-content: center;align-items: center;
    transition: all 0.2s ease;
    color: white;
    &:hover{
        cursor: pointer;
        width: 50px;height: 50px;
        color: #0decfc;
    }
    .i-up{
        margin-left: 3px;
    }
}
</style>

<script setup>
const emits =defineEmits(["goTo"])
function goTo(index){
    emits('slideToMiddle',index)
}
</script>