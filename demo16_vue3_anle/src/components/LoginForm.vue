<script setup lang="ts">
import { NSpace } from 'naive-ui';
</script>

<template>
    <NCard style="min-width: 400px;">
        <div class="log">
            <img src=".././assets/lt-b.svg" alt="" srcset="" class="lt">
        </div>
        <NForm ref="createFormRef">
            <NFormItem label="用户名" path="name" class="item">
                <NInput placeholder="请输入用户名" />
            </NFormItem>
            <NFormItem label="密码" path="description" class="item">
                <NInput placeholder="请输入密码" />
            </NFormItem>

            <div style="display: flex;width: 100%;justify-content: space-between;padding: 0">
                <RouterLink to="/home">
                    <NButton type="primary" style="width: 90px;">登录</NButton>
                </RouterLink>
            </div>

        </NForm>
    </NCard>
</template>

<style scoped>
.log{
    display: flex;
    justify-content: center;
}

</style>