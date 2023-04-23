<template>
    <n-button @click="handleError">
      加载
    </n-button>
</template>
<script setup>
const loadingBar = useLoadingBar()
const disabledRef = ref(true)
const handleError=()=>{
    disabledRef.value = true
    loadingBar.error()
}

</script>