<template>
    <div class="playListWrap">
        <van-tabs v-model:active="tabActiveIndex" animated>
            <van-tab title="歌曲">
                <!-- 歌曲列表 -->
                <div class="playList">
                    <ul v-for="n in playListData">
                        <li>{{ n.name }}</li>
                        <li>{{ n.singer }}</li>
                        <li>{{ n.Albun }}</li>
                    </ul>
                </div>
            </van-tab>
            <van-tab title="最近收藏">内容 2</van-tab>
            <van-tab title="评论">内容 3</van-tab>
        </van-tabs>

    </div>
</template>

<script setup>
import {ref} from 'vue'
// tab切换按钮的index
const tabActiveIndex= ref(0);

// 歌单的假数据
let playListData=[{
    name:'a111',
    singer:'a222',
    Albun:'zhuanji1111'
},{
    name:'a222',
    singer:'a332',
    Albun:'zhuanji11333311'
},{
    name:'a441',
    singer:'a255522',
    Albun:'zhuanji666661111'
}]

</script>

<style lang="less" scoped>
.playListWrap{
    width: 100%;
    .playList{

        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 10px 0;
            li{
                flex: 1;
                display:flex;
                align-items: center;
                line-height: 100%;
                height: 33px;background-color: #eee;
                margin: 0 10px;
            }
        }
    }
}
</style>