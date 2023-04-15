<template>
    <div>
        title: <input type="" v-model="title">
        content: <input type="" v-model="content"><br>
        <button  value="" @click="post">点我留言</button>
        <button  value="" @click="getAll">重新获取所有评论</button>
    </div>
        <div id="table">
            <a-table :columns="columns" :dataSource="messages" :row-key="rowKey"></a-table>            
        </div>

    
</template>


<script setup>
import AV from 'leancloud-storage'
import { onBeforeMount, onBeforeUnmount } from 'vue';
AV.init({
    appId: "GGSRcorcqtmmy5wUkL7auSWe-gzGzoHsz",
    appKey: "mQYhjoy86bxkkzjaRElwu9BT",
    serverURL: "https://ggsrcorc.lc-cn-n1-shared.com",
});

const title=ref('')
const content=ref('')
const mid=ref(0);
const messages=ref([]);

const columns = ref([
  {
    title:'mid',
    dataIndex:'mid'
  },
  {
    title:'标题',
    dataIndex:'title'
  },
  {
    title:'内容',
    dataIndex:'content'
  }
])

function rowKey(msg) {
  return msg.mid
}


const post=()=>{

    // 声明 class /表
    const Message = AV.Object.extend("Message");
    // 构建对象
    const message = new Message();
    // 为属性赋值
    message.set("title", title.value);
    message.set("content",content.value);
    // 将对象保存到云端
    message.save().then(
    (msg) => {
        // 成功保存之后，执行其他逻辑
        mid.value=msg.id;
        console.log('保存成功。objectId:'+msg.id);
    },
    (error) => {
        // 异常处理
        alert('arror')
    });
}

const getAll=()=>{
    const query = new AV.Query("Message");
    query.equalTo("state", "1");
    query.find().then((msgs) => {
        msgs.forEach((msg)=>{
            messages.value.push({//.value 响应式数据，亲
                mid:msg.attributes.mid,
                title:msg.attributes.title,
                content:msg.attributes.content
            })
        })
    });
}

onBeforeMount(()=>{
    getAll();
})

const dto = ref({page:1,size:10})

const pagination=ref({
    current:dto.value.page,
    pageSize:dto.value.size,
    total:messages.value.length,
    showSizeChanger: true,    // 显示页大小的下拉列表
    pageSizeOptions: ["1","2","3","4","5","6","7","8","9","10"] // 自定义下拉列表内容
})

const getPage=(page,size)=>{
    const query = new AV.Query("Message");
    query.equalTo("state", "1");
    query.limit(size);
    query.skip((page-1)*size);
    query.find().then((msgs) => {
        msgs.forEach((msg)=>{
            messages.value.unshift({//.value 响应式数据，亲
                objectId:msg.id,
                title:msg.attributes.title,
                content:msg.attributes.content
            })
        })
    });
}


// 分页



</script>

<style>
a-table{
    height:30%;
}

</style>