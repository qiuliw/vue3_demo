<template>
    <!-- 左边导航条 -->
    <div class="leftNav">
        <!-- logo -->
        <div class="logo"></div>

        <!-- 在线音乐 -->
        <div class="online_music">
            <dl>
                <dt>在线音乐</dt>
                <dd class="focusDd icon_dd dd_1_white">推荐</dd>
                <dd class="icon_dd dd_2_black">音乐馆</dd>
                <dd class="icon_dd dd_3_black">视频</dd>
                <dd class="icon_dd dd_4_black">电台</dd>
            </dl>
        </div>

        <!-- 我的音乐 -->
        <div class="my_music">
            <dl>
                <dt>我的音乐</dt>
                <dd class="focusDd icon_dd dd_5_white">我喜欢</dd>
                <dd class="icon_dd dd_6_black">本地和下载</dd>
                <dd class="icon_dd dd_7_black">最近播放</dd>
                <dd class="icon_dd dd_8_black">试听列表</dd>
            </dl>
        </div>

        <!-- 创建的歌单 -->
        <div class="create_song_list">
            <dl>
                <dt>创建的歌单</dt>
                <dd class="focusDd">1111</dd>
                <dd class="">默认列表</dd>
            </dl>
        </div>

        <!-- 收藏的歌单 -->
        <div class="favorite_list">
            <dl>
                <dt>收藏的歌单</dt>
                <dd class="focusDd">怀旧老歌</dd>
            </dl>
        </div>

    </div>
</template>

<script setup>
const msg="左导航条";
</script>

<style lang="less" scoped>
.leftNav{
    width: 210px;background: #f0f0f0;
    border-radius: 10px 0 0 10px;
    overflow-y:scroll ;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 0px;
    }
    // .element::-webkit-scrollbar { width: 0 !important }
    position: relative;
    .logo{
        height: 85px;
        width: 100%;
        top:0;
        position: sticky;
        background: url('../../assets/logo.jpg') no-repeat center;
        background-color: #f0f0f0;
    }

    // 在线音乐
    .online_music{
        width:160px;margin:20px auto 30px;

        dl{
            dt{
                height: 47px;line-height: 47px;
                color:#787878; 
            }
            dd{
                height: 30px;line-height: 30px;
                color:#303030;
                border-radius: 5px;
                padding-left: 40px;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover{
                    background-color:#d8d8d8;
                }  
            }
            .icon_dd{
                background-size:22px;
                background-repeat: no-repeat ;
                background-position: 9px center;
            }
            .focusDd{
                background-color: #1ed0a1;
                color: #d2f6ee;
            }
            .dd_1_white{
                background-image:url('../../assets/left_Icon_1_white.png');
            }
            .dd_1_black{
                background-image: url('../../assets/left_Icon_1_black.png');
            }

            .dd_2_white{
                background-image:url('../../assets/left_Icon_2_white.png');
            }
            .dd_2_black{
                background-image: url('../../assets/left_Icon_2_black.png');
            }

            .dd_3_white{
                background-image:url('../../assets/left_Icon_3_white.png');
            }
            .dd_3_black{
                background-image: url('../../assets/left_Icon_3_black.png');
            }

            .dd_4_white{
                background-image:url('../../assets/left_Icon_4_white.png');
            }
            .dd_4_black{
                background-image: url('../../assets/left_Icon_4_black.png');
            }
        }
    }

    // 我的音乐
    .my_music{
        width:160px;margin:20px auto 30px;

        dl{
            dt{
                height: 47px;line-height: 47px;
                color:#787878; 
            }
            dd{
                height: 30px;line-height: 30px;
                color:#303030;
                border-radius: 5px;
                padding-left: 40px;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover{
                    background-color:#d8d8d8;
                }  

            }
                // dd被选中
            .focusDd{
                background-color: #1ed0a1;
                color: #d2f6ee;
            }

            .icon_dd{
                background-size:22px;
                background-repeat: no-repeat ;
                background-position: 9px center;
            }

            .dd_5_white{
                background-image:url('../../assets/left_Icon_5_white.png');
            }
            .dd_5_black{
                background-image: url('../../assets/left_Icon_5_black.png');
            }

            .dd_6_white{
                background-image:url('../../assets/left_Icon_6_white.png');
            }
            .dd_6_black{
                background-image: url('../../assets/left_Icon_6_black.png');
            }

            .dd_7_white{
                background-image:url('../../assets/left_Icon_7_white.png');
            }
            .dd_7_black{
                background-image: url('../../assets/left_Icon_7_black.png');
            }

            .dd_8_white{
                background-image:url('../../assets/left_Icon_8_white.png');
            }
            .dd_8_black{
                background-image: url('../../assets/left_Icon_8_black.png');
            }
        }
    }

    // 创建的歌单
    .create_song_list{
        width:160px;margin:20px auto 30px;
        dl{
            dt{
                height: 47px;line-height: 47px;
                color:#787878; 
            }
            dd{
                height: 30px;line-height: 30px;
                color:#303030;
                border-radius: 5px;
                padding-left: 11px;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover{
                    background-color:#d8d8d8;
                }  

            }
                // dd被选中
            .focusDd{
                background-color: #1ed0a1;
                color: #d2f6ee;
            }
        }
    }

    // 收藏的歌单
    .favorite_list{
        width:160px;margin:20px auto 30px;
        dl{
            dt{
                height: 47px;line-height: 47px;
                color:#787878; 
            }
            dd{
                height: 30px;line-height: 30px;
                color:#303030;
                border-radius: 5px;
                padding-left: 11px;
                margin-bottom: 10px;
                cursor: pointer;
                &:hover{
                    background-color:#d8d8d8;
                }  

            }
                // dd被选中
            .focusDd{
                background-color: #1ed0a1;
                color: #d2f6ee;
            }
        }
    }
}
</style>