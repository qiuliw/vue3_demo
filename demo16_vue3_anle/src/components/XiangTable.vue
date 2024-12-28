<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import mock from '../mock/mock.js'; // 引入 mock 实例
import { NButton, NDataTable, NModal, NForm, NFormItem, NInput, NSpace, useMessage } from 'naive-ui';

// 商品列表
const products = ref([]);

// 消息提示
const message = useMessage();

// 从 mock 接口获取商品数据
const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/products');
    products.value = response.data;
  } catch (error) {
    console.error('请求失败:', error);
    message.error('数据加载失败');
  }
};

// 在组件挂载时获取数据
onMounted(() => {
  fetchProducts();
});

// 添加商品模态框状态
const createModalVisible = ref(false);

// 添加商品表单数据
const createForm = ref({
  name: '太阳能木鱼',
  description: '增加30%投胎幸运值',
  price: '50元/个'
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
  products.value.unshift(newProduct);
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
    <NModal v-model:show="createModalVisible" title="添加商品" class="product-modal">
      <NCard style="min-width: 400px;">
        <NForm :model="createForm">
          <NFormItem label="名称" path="name" class="item">
            <NInput v-model:value="createForm.name" placeholder="请输入商品名称" />
          </NFormItem>
          <NFormItem label="描述" path="description" class="item">
            <NInput v-model:value="createForm.description" placeholder="请输入商品描述" />
          </NFormItem>
          <NFormItem label="价格" path="price" class="item">
            <NInput v-model:value="createForm.price" placeholder="请输入商品价格" />
          </NFormItem>
          <div style="display: flex;width: 100%;justify-content: space-between;padding-top: 10px">
            <NButton @click="createProduct" type="primary" style="width: 90px;">确定</NButton>
            <NButton @click="createModalVisible = false" type="warning" style="width: 90px;">取消</NButton>
          </div>
        </NForm>
      </NCard>
    </NModal>

    <!-- 商品列表 -->
    <NDataTable :columns="columns" :data="products" :pagination="{ pageSize: 7 }" />
  </NSpace>
</template>

<style scoped>
.product-modal {
  height: auto;
  width: 300px;
  padding: 2rem;
  border-radius: 5px;
}
.item {
  margin: 5px 0;
}
</style>