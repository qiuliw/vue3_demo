<template>
  <div style="display: flex;
  max-width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ">

    <NSpace>
      <n-gradient-text :size="50" type="success">
        李二
      </n-gradient-text>
    </NSpace>
    <!-- <NSpace>
      <NMarqueue auto-fill>
        <n-image width="200" height="200" src="../../public/imgs/a-4.jpeg" style="margin-right: 24px" />
      </NMarqueue>
    </NSpace> -->
  </div>
</template>

<script setup>
import { NMarqueue, NSpace } from 'naive-ui';
</script>