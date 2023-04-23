<template>
    <n-watermark
      v-if="show"
      content="邱荔伟218308049"
      cross="true"
      fullscreen
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
    />

</template>
  
<script setup>
import { defineComponent, ref } from "vue";
import { useWaterStore } from "../stores/waterStore";
import { storeToRefs } from "pinia";
const store=useWaterStore();
const {show }=storeToRefs(store)
</script>