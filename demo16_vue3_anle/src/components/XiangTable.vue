<script setup>
import { ref } from 'vue';
import { NButton, NDataTable, NModal, NForm, NFormItem, NInput, NSpace, NTag, useMessage } from 'naive-ui';



// 商品列表
const products = ref([
    { id: 11, name: '宙斯之火', description: 'LED灯使用太阳能充电，夜晚自动亮起，同时有太阳属性加成，为墓地提供守护，防止邪灵侵扰。', price: '998元/盏' },
    { id: 14, name: '记忆之烛', description: '点燃后可增强墓地的历史感，为过往的灵魂提供指引。', price: '25元/支' },
    { id: 101, name: '金色回忆',description: '墓前的小金桔树，象征墓主生前的尊贵',price: '19998元/棵'},
    { id: 1, name: '灵魂之树', description: '象征生命的永恒，为墓地带来生机与安宁。', price: '120元/棵' },
    { id: 18, name: '守护之树', description: '种植于墓地旁，具有守护墓地，防止邪灵侵扰的神秘力量。', price: '150元/棵' },
    { id: 12, name: '守护石狮', description: '具有守护之力，可增强墓地的防御力，抵御邪灵侵扰。', price: '200元/对' },
    { id: 2, name: '守护石碑', description: '刻有保护符文，能够为墓地提供额外的保护。', price: '300元/块' },
    { id: 3, name: '安宁之花', description: '具有安抚灵魂的效果，使墓地周围环境更加宁静。', price: '50元/束' },
    { id: 4, name: '岁月之灯', description: '长明不熄，为墓地提供永恒的光明。', price: '80元/盏' },
    { id: 5, name: '静谧之水', description: '象征生命的源泉，为墓地带来清新与平静。', price: '200元/池' },
    { id: 6, name: '守护之链', description: '环绕墓地，具有防止邪灵侵扰的神秘力量。', price: '150元/条' },
    { id: 7, name: '岁月之门', description: '象征时间的流转，为墓地带来历史的厚重感。', price: '400元/扇' },
    { id: 8, name: '静谧之路', description: '引导灵魂走向安宁之地，为墓地增添一份祥和。', price: '100元/米' },
    { id: 10, name: '岁月之墙', description: '刻有历史故事，为墓地增添一份庄重与尊严。', price: '500元/面' },
    { id: 13, name: '安宁花环', description: '佩戴于墓碑上，象征安宁与和平，增加周围环境的和谐氛围。', price: '40元/个' },
    { id: 15, name: '净化香炉', description: '燃烧特殊香料，具有净化墓地周围负能量的效果。', price: '80元/个' },
    { id: 16, name: '岁月之碑', description: '刻有特殊符文，能够减缓时间对墓地的侵蚀，保持墓地的新鲜感。', price: '500元/块' },
    { id: 17, name: '静谧之泉', description: '象征生命之源，为墓地带来宁静与清新的气息。', price: '300元/座' },
    { id: 19, name: '和平鸽像', description: '象征和平与自由，放置于墓地可增加安宁祥和的气氛。', price: '120元/尊' },
    { id: 20, name: '岁月之椅', description: '供访客休息，具有岁月静好的效果，使坐者心情平和。', price: '180元/把' },
    { id: 21, name: '静谧之钟', description: '敲响时可驱散周围不安的情绪，为墓地带来宁静。', price: '250元/座' },
    { id: 23, name: '岁月之镜', description: '反映墓地的历史变迁，使观者感受到时间的流逝。', price: '200元/面' },
    { id: 24, name: '静谧之窗', description: '透过此窗可看到四季变化，为墓地带来生机。', price: '300元/扇' },
    { id: 25, name: '守护之门', description: '具有强大的防护力量，防止邪灵进入墓地。', price: '400元/扇' },
    { id: 26, name: '岁月之书', description: '记录墓地的历史和故事，增加墓地的文化氛围。', price: '150元/本' },
    { id: 28, name: '守护之盾', description: '象征保护，放置于墓地可增强墓地的防御力。', price: '300元/面' },
    { id: 29, name: '岁月之杖', description: '象征权威与尊严，放置于墓地可增加庄重感。', price: '350元/根' },
    { id: 30, name: '静谧之毯', description: '铺设于墓地小径，使行走其上的人感到平静。', price: '100元/条' },
    { id: 31, name: '守护之冠', description: '象征尊贵，放置于墓地可增加尊贵气息。', price: '400元/顶' },
    { id: 32, name: '岁月之杯', description: '象征生命的延续，放置于墓地可增加生命的活力。', price: '200元/个' },
    { id: 33, name: '线香', description: '形状如线，以香料粉末调粉糊，干燥定型而成。', price: '10元/盒' },
    { id: 34, name: '立香', description: '又称签香、芯香、拜拜香。以竹、木等材料作香芯，直线形。', price: '8元/盒' },
    { id: 35, name: '盘香', description: '在平面上回环盘绕、常呈螺旋形。', price: '12元/盒' },
    { id: 36, name: '塔香', description: '使用时以支架托起或悬挂与空中或之家之上，下垂如塔。', price: '15元/盒' },
    { id: 37, name: '印香（篆香）', description: '使用方式复杂，需要搭配香炉、香灰、香筷等一系列工具。', price: '20元/盒' },
    { id: 38, name: '香灰（末香）', description: '粉末状的香，点香末时，应于净香炉底铺香灰。', price: '5元/盒' },
    { id: 39, name: '香粉', description: '将香料磨碎后经筛滤，混合铅粉或米粉。', price: '18元/盒' },
    { id: 40, name: '香丸', description: '特型香材的一种，形状为丸状。', price: '16元/盒' },
    { id: 41, name: '愿态香材', description: '根据特定愿望制作的香材。', price: '25元/盒' },
    { id: 27, name: '静谧之画', description: '描绘自然风光，为墓地带来宁静与和谐。', price: '250元/幅' },
    { id: 42, name: '招财旺财香', description: '依据符的种类而来。', price: '30元/盒' },
    // ...其他商品
]);

// 添加商品模态框状态
const createModalVisible = ref(false);
const message = useMessage();

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
                <NForm :model="createForm" ref="createFormRef">
                <NFormItem label="名称" path="name" class="item">
                    <NInput v-model:value="createForm.name" placeholder="请输入商品名称" />
                </NFormItem>
                <NFormItem label="描述" path="description" class="item">
                    <NInput v-model:value="createForm.description" placeholder="请输入商品描述" />
                </NFormItem>
                <NFormItem label="价格" path="price" class="item">
                    <NInput v-model:value="createForm.price" placeholder="请输入商品价格" />

                </NFormItem>
                    <div style="display: flex;width: 100%;justify-content: space-between;padding: 0">
                        <NButton @click="createProduct" type="primary" style="width: 90px;">确定</NButton>
                        <NButton @click="createModalVisible = false" type="warning" style="width: 90px;">取消</NButton>
                    </div>

            </NForm>
            </NCard>
            <template #action>
                <NButton @click="createModalVisible = false">取消</NButton>
                <NButton @click="createProduct" type="primary">确定</NButton>
            </template>
        </NModal>

        <!-- 商品列表 -->
        <NDataTable :columns="columns" :data="products" :pagination="{ pageSize: 6 }" />
    </NSpace>
</template>

<style scoped>
.product-modal{
    height: auto;
    width: 300px;
    padding: 2rem;
    border-radius: 5px;
}
.item{
    margin:5px 0;
}
</style>
