<template>
    <!-- 顶title条 -->
    <div class="indexTopTitle">

        <!-- 栏目切换 -->
        <div class="switchBtn">
            <label> &lt; </label>
            <label> &gt; </label>
        </div>

        <!-- 搜索音乐 -->
        <div class="searchMusic">

            <input
            class="inputSearchMusic"
            type="text"
            placeholder="搜索音乐"
            title="输入关键字搜索"
            />
            <!-- 弹出菜单 -->
            <div></div>
        </div>

        <!-- 听歌识曲 -->
        <div class="listenTosong" title="听歌识曲"></div>

        <!-- 顶部右侧 -->
        <div class="right">

            <!-- 用户头像,名称 -->
            <div class="userAvatar_Name">
                <label for=""></label>
                <span>老尚带你学前端</span>
            </div>

            <!-- level icon  -->
            <div class="level_icon" title="尽享绿钻会员，彰显不一样的你"></div>

            <!-- 下箭头 -->
            <div class="arrow_down"></div>

            <!-- 换肤 -->
            <div class="skin_icon"></div>

            <!-- 菜单 -->
            <div class="menu_icon"></div> 
        </div>

    </div>
</template>
<script setup>
</script>

<style lang="less" scoped>
//顶title条
.indexTopTitle{
    background-color:white;
    border-radius: 0 10px 0 0;
    height: 60px;
    display: flex;
    align-items: center;

    // 栏目切换
    .switchBtn{
        width:auto;height:60px;line-height: 60px;
        margin-left: 15px;

        label,span{
            color: #aeaeae;
            font-size: 30px;
            margin:0 10px;
            cursor:pointer;

            &:hover{
                color:#1fd4ae
            }
        }
        
    }

    // 搜索音乐
    .searchMusic{
        margin-left: 20px;
        .inputSearchMusic{
            width: 120px;height: 33px;background-color:#e3e3e3 ;
            border-radius: 33px;border: 0;
            padding-left: 40px;
            background-size:20px;
            background-repeat: no-repeat ;
            background-position: 9px center;
            background-image: url("../../assets/放大镜.png");
        
        }
    }

    // 听歌识曲
    .listenTosong{
        width: 25px; height: 25px;
        background:url("../../assets/tomusic.png");
        background-size:25px;
        background-repeat:no-repeat ;
        background-position:center;
        margin-left: 23px;
        cursor: pointer;
        &:hover{
            background-image: url('../../assets/tomusic2.png');
        }
    }

    .right{
        flex:1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        // 用户头像用户名
        .userAvatar_Name{

            width: 114px;
            display: flex;
            align-items: center;

            label{
                margin-right: 8px;
                background:url('../../assets/userAvatar.jpg');
                background-size:25px;
                background-repeat:no-repeat ;
                background-position:center;
                width:24px;height: 24px;border-radius:100%;
            }

            span{

                width:80px;
                text-overflow: ellipsis;white-space: nowrap;overflow: hidden;

            }
        }
        // 等级
        .level_icon{
            width: 34px;height: 16px;margin-right: 10px;
            background: url('../../assets/level.png');
            background-size:25px;
            background-repeat:no-repeat ;
            background-position:center;

        }
        // 下箭头
        .arrow_down{
            margin: 0 7px;
            width: 15px;height: 15px;
            background: url('../../assets/arrow_down.png');
            background-size:15px;
            background-repeat:no-repeat ;
            background-position:center;
        }

        // 换肤
        .skin_icon{
            margin: 0 7px;
            width: 15px;height: 15px;
            background: url('../../assets/skin_icon.png');
            background-size:15px;
            background-repeat:no-repeat ;
            background-position:center;
        }

        //菜单
        .menu_icon{
            margin: 0 14px 0 7px;
            width: 15px;height: 15px;
            background: url('../../assets/menu_icon.png');
            background-size:15px;
            background-repeat:no-repeat ;
            background-position:center;
        }


    }

}
</style>