<template>
    <!-- 中间音乐区 -->
    <div class="musicArea">
        <!-- title区 -->
        <div class="titleDiv">
            <img class="coverImg" src="../../assets/tree.webp"/>
            <h1 class="title">歌单-标题</h1>
            <!-- 用户头像行 -->
            <div class="userInfo">
                <img src="../../assets/tree.webp" alt="" class="userAvater">
                <label class="userLabel">添加标签</label>
                <label class="userLabel">用户名称</label>
            </div>
            <div class="userDsc">歌单描述...</div>
            <!-- 四个按钮 -->
            <div class="btnsGrout">
                <div class="BtnsDiv BtnsDivFocus">播放全部</div>
                <div class="BtnsDiv">下载</div>
                <div class="BtnsDiv">批量操作</div>
                <div class="BtnsDiv">分享</div>
            </div>
        </div>

        <!-- 歌曲列表 -->
        <PlayList/>

    </div>
</template>
<script setup>
import PlayList from '../playList/playList.vue';
</script>

<style lang="less" scoped>
// 中间音乐区
.musicArea{
    width: 810px;
    height: 554px;
    //   title区
    .titleDiv{
        // background-color: aliceblue;
        height: 170px; margin: 30px 40px;
        position: relative;
        padding-left: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .coverImg{
            display:block;position: absolute;left: 0;top:0;
            height: 170px;width: 170px;
            border-radius: 10px;margin-right: 20px;
        }
        .title{
            flex:1;
            display: block;font-size: 30px;font-weight: bold;
        }
        // 用户头像行
        .userInfo{
            display: flex;
            align-items: center;
            flex: 1;
            .userAvater{
                display: block;width:25px;height: 25px;border-radius: 100%;
            }
            .userLabel{
                margin-left: 10px;
            }
        }
        .userDsc{
            flex:1;
            display: flex;
            align-items: center;
        }
        // 通用按钮组件
        .btnsGrout{
            flex: 1;
            display: flex;
            align-items: center;
            margin-bottom:3px;
            .BtnsDiv{
                display: flex;
                align-items: center;
                justify-content: center;
                float:left;width:110px;height: 30px;background:#ddd ;
                border-radius: 20px;
                margin:0 15px 0 0 ;
                &:hover{
                    cursor: pointer;
                    background-color:#d2d0d0 ;
                }
            }
            .BtnsDivFocus{
                color: white;
                background-color: #20c79a;
            }
        }

    }
}
</style>