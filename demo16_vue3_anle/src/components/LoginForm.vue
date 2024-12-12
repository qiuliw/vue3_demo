<template>
                <NCard style="min-width: 400px;">
                <NForm  ref="createFormRef">
                <NFormItem label="用户名" path="name" class="item">
                    <NInput  placeholder="请输入用户名" />
                </NFormItem>
                <NFormItem label="密码" path="description" class="item">
                    <NInput placeholder="请输入密码"/>
                </NFormItem>

                    <div style="display: flex;width: 100%;justify-content: space-between;padding: 0">
                        <NButton  type="primary" style="width: 90px;"><RouterLink to="/home">登录</RouterLink></NButton>
                    </div>

            </NForm>
            </NCard>
</template>