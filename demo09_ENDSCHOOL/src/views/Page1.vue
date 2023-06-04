<template>
    <!-- 提示 -->
    <div class="msg"><h1>请点击播放<br>开始欣赏我们的表演</h1></div>

    <!-- 音乐播放器 -->
    <div class="player-warp">

        <!-- 歌曲信息面板 -->
        <div class="play-info">
            <div class="info">
                <div class="name">我记得</div>
                <div class="singer-album">赵雷 - 眼前的少年</div>
                <!-- 进度条 -->
                <div class="music_progress">
                    <div class="music_progress_top">
                        <span class="current-time">00:00</span>
                        <div class="time">05:29</div>
                    </div>
                    <div class="music_progress_bar">
                        <div class="music_progress_line"></div>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- 音乐控制器 -->
        <div class="play-control">

            <!-- 封面唱片 -->
            <div class="cover">
                <img src="../assets/imgs/我记得.jpg" alt="封面"/>
            </div>

            <!-- 控制按钮 -->
            <div class="control">
                <i class="fa fa-backward i-smell"></i>
                <i class="fa fa-play i-big"></i>
                <i class="fa fa-forward i-smell"></i>
                <i class="fa fa-reorder"></i>
            </div>
        </div>
    </div>

    <!-- 音乐 -->
    <audio src="../assets/audios"></audio>

    <!-- 模态框 -->
    <div class="modal">
        <div class="modal-box">
            <div class="modal-box-top">
                <div class="modal-title">音乐列表</div>
                <div class="modal-close">✖</div>
            </div>
            <div class="modal-wrapper">
                <ul class="music-list">
                    <li>
                        <span>01. 我记得 - 赵雷</span>
                        <span class="fa fa-play-circle icon"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
// 提示
.msg{
    position: absolute;
    font-size: 30px;font-weight: bolder;color: white;
    top: 30%;left: 50%;transform: translate(-50%,-50%);//居中
    h1{
        text-shadow: 0px 5px 5px rgba(8, 182, 212, 0.822);
    }
}
// 音乐播放器
.player-warp{
    position: relative;
    margin-top:90px ;

    // 歌曲信息面板
    div.play-info{
        width: 90%;
        position: absolute;
        top:0;// -100%;
        left: 50%;transform: translateX(-50%);//水平居中
        padding: 10px;z-index: -1;
        background: rgba(255,255,255,0.55);box-shadow: 0 20px 20px 0 rgba(8, 182, 212,0.37);backdrop-filter: blur(3.5px);border-radius: 10px;//毛玻璃
        display: flex;justify-content:flex-end;

        .info{
            width:60%;font-size: 10px;

            .name{
                font-size: 14px;font-weight:bold;
            }
            .singer-album{
                color: #757474;line-height:20px;
            }
            //进度
            .music_progress{
                width: 100%;

                .music_progress_top{
                    display: flex;justify-content: space-between;color: #f2789b;line-height: 20px;
                }
                .music_progress_bar{
                    width: 100%;height: 3px;background-color: #cccaca;border-radius: 10px;margin-top: 3px;

                    .music_progress_line{
                        width: 50%;
                        height:100%;
                        background-color: #f2709b;
                    }
                }
            }


            
        }
    }

    // 音乐控制器
    .play-control{
        width: 360px;height: 80px;padding: 20px 30px;
        background-color: #fff;border-radius: 15px;
        box-shadow: 0 20px 20px 0 rgba(8, 182, 212, 0.822);
        display: flex;justify-content: space-between;
        z-index: 10;

        //封面唱片
        .cover{
            width: 100px;height: 100px;border-radius:50%;background-color: #fff;margin-top: -60px;padding:6px;position: relative;
            animation: zhuan 5s infinite linear;
            animation-play-state: paused;

            &::before{
                content: "";display: inline-block;width: 15px;height: 15px;border-radius: 50%;position: absolute;
                top: 50%;left: 50%;transform: translate(-50%,-50%);//居中
                background-color:#fff;

            }
            
            img{
                width:100%;border-radius: 50%;
            }

            @keyframes zhuan{
                0%{
                    transform: rotate(0);
                }
                100%{
                    transform: rotate(360deg);
                }
            }
        }

        // 控制按钮
        .control{
            flex: 1;display:flex;align-items:center;justify-content:space-between;
            margin-left: 5px;
            i{
                width: 40px;height: 40px;
                display: flex;align-items: center;justify-content: center;
                font-size: 26px;color: #0decfc;
                cursor: pointer;
                transition: all 0.2s;
                &:hover{
                    border-radius:6px;background-color: rgba(71,70,70,0.2);color:#fff;
                }
            }
            .i-big{
                font-size: 30px;
            }
            .i-smell{
                font-size: 20px;
            }
        }
    }

}

// 模态框
.modal{
    width:100%;height: 100%;
    background-color: rgba(0,0,0,0.5);
    position:absolute;top:0;left: 0;
    display: none;
    // 侧边
    .modal-box{
        width: 30%;height: 100%;padding: 20px;background-color: #fff;position: absolute;
        top:0;right: 0;


        // 标题
        .modal-box-top{
            width: 100%;height:40px;display: flex;align-items: center;justify-content: space-between;
            .modal-title{
                font-size: 18px;
            }
            .modal-close{
                font-size: 20px;cursor: pointer;transition: transform 0.4s;
                &:hover{
                    transform: rotate(180deg);
                }
            }
        }

        // 内容
        .modal-wrapper{
            width: 100%;
            height: calc(100%-40px);
            overflow-y: auto;
            .music-list{
                list-style: none;
                li{
                    padding: 10px 0;border-radius: 3px;
                    border-bottom: 1px solid rgb(186,182,182);
                    display: flex; justify-content: space-between;align-items: center;
                    transition: all 0.1s 0s;
                    &:hover{
                        cursor: pointer;
                        background-color: #cccaca;
                    }
                }
                .icon{
                    margin:0 10px;
                    font-size: 20px;
                    
                }
                
            }
        }
    }


}

</style>

<script setup>
import '../assets/css/font-awesome.min.css' //引入图标
</script>
