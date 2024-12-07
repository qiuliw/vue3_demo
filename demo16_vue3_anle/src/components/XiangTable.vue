<script setup>
import { ref } from 'vue';
import { NButton, NDataTable, NModal, NForm, NFormItem, NInput, NSpace, NTag, useMessage } from 'naive-ui';

// 商品列表
const products = ref([
    { id: 1, name: '线香', description: '形状如线，以香料粉末调粉糊，干燥定型而成。', price: '10元/盒' },
    { id: 2, name: '立香', description: '又称签香、芯香、拜拜香。以竹、木等材料作香芯，直线形。', price: '8元/盒' },
    { id: 3, name: '盘香', description: '在平面上回环盘绕、常呈螺旋形。', price: '12元/盒' },
    { id: 4, name: '塔香', description: '使用时以支架托起或悬挂与空中或之家之上，下垂如塔。', price: '15元/盒' },
    { id: 5, name: '印香（篆香）', description: '使用方式复杂，需要搭配香炉、香灰、香筷等一系列工具。', price: '20元/盒' },
    { id: 6, name: '香灰（末香）', description: '粉末状的香，点香末时，应于净香炉底铺香灰。', price: '5元/盒' },
    { id: 7, name: '香粉', description: '将香料磨碎后经筛滤，混合铅粉或米粉。', price: '18元/盒' },
    { id: 8, name: '香丸', description: '特型香材的一种，形状为丸状。', price: '16元/盒' },
    { id: 9, name: '愿态香材', description: '根据特定愿望制作的香材。', price: '25元/盒' },
    { id: 10, name: '招财旺财香', description: '依据符的种类而来。', price: '30元/盒' },
    // ...其他商品
]);

// 添加商品模态框状态
const createModalVisible = ref(false);
const message = useMessage();

// 添加商品表单数据
const createForm = ref({
    name: '',
    description: '',
    price: ''
});

// 添加商品规则
const createRules = {
    name: [
        { required: true, message: '请输入商品名称', trigger: 'blur' }
    ],
    description: [
        { required: true, message: '请输入商品描述', trigger: 'blur' }
    ],
    price: [
        { required: true, message: '请输入商品价格', trigger: 'blur' }
    ]
};

// 添加商品方法
const createProduct = () => {
    // 验证表单
    // TODO: 这里需要添加表单验证逻辑
    const newProduct = {
        id: products.value.length + 1,
        ...createForm.value
    };
    products.value.push(newProduct);
    message.success('商品添加成功');
    createModalVisible.value = false;
    createForm.value = { name: '', description: '', price: '' };
};

// 删除商品方法
const deleteProduct = (id) => {
    products.value = products.value.filter(product => product.id !== id);
    message.success('商品删除成功');
};

// 商品管理页面的列定义
const columns = [
    {
        title: '商品名称',
        key: 'name'
    },
    {
        title: '描述',
        key: 'description'
    },
    {
        title: '价格',
        key: 'price'
    },
    {
        title: '操作',
        key: 'action',
        render(row) {
            return h(NButton, {
                size: 'small',
                onClick: () => deleteProduct(row.id)
            }, {
                default: () => '删除'
            });
        }
    }
];
</script>

<template>
    <NSpace vertical :size="12" style="max-width: 1080px;margin: auto;">
        <!-- 添加商品按钮 -->
        <NButton @click="createModalVisible = true">添加商品</NButton>

        <!-- 添加商品模态框 -->
        <NModal v-model:show="createModalVisible" title="添加商品">
            <NForm :model="createForm" :rules="createRules" ref="createFormRef">
                <NFormItem label="名称" path="name">
                    <NInput v-model:value="createForm.name" placeholder="请输入商品名称" />
                </NFormItem>
                <NFormItem label="描述" path="description">
                    <NInput v-model:value="createForm.description" placeholder="请输入商品描述" />
                </NFormItem>
                <NFormItem label="价格" path="price">
                    <NInput v-model:value="createForm.price" placeholder="请输入商品价格" />
                </NFormItem>
            </NForm>
            <template #action>
                <NButton @click="createModalVisible = false">取消</NButton>
                <NButton @click="createProduct" type="primary">确定</NButton>
            </template>
        </NModal>

        <!-- 商品列表 -->
        <NDataTable :columns="columns" :data="products" :pagination="{ pageSize: 6 }" />
    </NSpace>
</template>



