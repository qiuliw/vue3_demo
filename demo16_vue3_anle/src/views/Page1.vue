<template>

    <!-- 音乐播放器 -->
    <div class="player-warp">

        <!-- 歌曲信息面板 -->
        <div class="play-info" ref="playInfoDom">
            <div class="info">
                <div class="name">{{ musicMsg.name }}</div>
                <div class="singer-album">{{ musicMsg.album }}</div>
                <!-- 进度条 -->
                <div class="music_progress">
                    <div class="music_progress_top">
                        <span class="current-time">{{ currentTimeStr }}</span>
                        <div class="time">{{ totalTimeStr }}</div>
                    </div>
                    <div class="music_progress_bar" ref="progressBar" @click="progressClick">
                        <div class="music_progress_line" ref="lineDom"></div>
                    </div>
                </div>

            </div>
        </div>

        <!-- 音乐控制器 -->
        <div class="play-control">

            <!-- 封面唱片 -->
            <div class="cover" ref="coverDom">
                <img :src=musicMsg.cover alt="封面" />
            </div>

            <!-- 控制按钮 -->
            <div class="control">
                <i @click="prev" class="fa fa-backward i-smell" ref="prevBtn"></i>
                <i @click="play" :class=playBtnClass ref="playBtn"></i>
                <i @click="next" class="fa fa-forward i-smell" ref="nextBtn"></i>
                <i @click="openMusicList" class="fa fa-reorder" ref="openModal"></i>
            </div>
        </div>
    </div>

    <!-- 音乐 -->
    <audio ref="audio" @ended="next()" @timeupdate="updateTime" :src=musicMsg.audio_url></audio>

    <!-- 模态框 -->
    <NModal v-model:show="createModalVisible" class="product-modal">
        <NCard title="安魂曲列表" style="width: 300px; position: fixed; right: 0px; top: 0px;height: 100vh;">
            <n-list hoverable clickable>
                <n-list-item @click="modalPlay(index)" :class="playing[index]" v-for="(item, index) in musicList">
                    <n-thing>
                        <div style="display: flex;justify-content: space-between;width: 100%;">
                            <span>{{ item.name }}  &nbsp; -  &nbsp; {{ item.singer }} </span>
                            <span :class="['fa', 'icon', 'fa-play-circle', modalIconClass[index]]" style="font-size: 20px;color: gray;"></span>
                        </div>
                    </n-thing>
                </n-list-item>
            </n-list>

        </NCard>
    </NModal>


</template>

<style lang="less">
// 音乐播放器
.player-warp {
    position: relative;
    margin-top: 3rem;

    // 歌曲信息面板
    div.play-info {
        width: 90%;
        height: 110%;
        position: absolute;
        top: 0%; // -100%;
        left: 50%;
        transform: translateX(-50%); //水平居中
        padding: 10px;
        z-index: -1;
        background: rgba(255, 255, 255, 0.55);
        box-shadow: 0 20px 20px 0 rgba(81, 128, 162, 0.822);
        backdrop-filter: blur(3.5px);
        border-radius: 10px; //毛玻璃
        display: flex;
        justify-content: flex-end;
        opacity: 0;
        transition: all 1s ease;

        .info {
            width: 63%;
            font-size: .7rem;

            .name {
                font-size: 1rem;
                font-weight: bold;
            }

            .singer-album {
                color: #757474;
                line-height: 1.25rem;
            }

            //进度
            .music_progress {
                width: 100%;

                .music_progress_top {
                    display: flex;
                    justify-content: space-between;
                    color: #f2789b;
                    line-height: 20px;
                }

                .music_progress_bar {
                    width: 100%;
                    height: 5px;
                    background-color: #cccaca;
                    border-radius: 10px;
                    margin-top: 3px;

                    .music_progress_line {
                        position: relative;
                        width: 0%;
                        height: 100%;
                        background-color: #f2709b;
                    }
                }
            }



        }
    }

    // 音乐控制器
    .play-control {
        width: 400px;
        height: 100px;
        padding: 20px 30px;
        background-color: #d5d5d5;
        border-radius: 15px;
        box-shadow: 0 20px 20px 0 rgba(81, 128, 162, 0.822);
        display: flex;
        justify-content: space-between;
        z-index: 10;

        //封面唱片
        .cover {
            width: 6.5rem;
            height: 6.5rem;
            border-radius: 50%;
            background-color: #fff;
            margin-top: -60px;
            padding: 6px;
            position: relative;
            animation: zhuan 5s infinite linear;
            animation-play-state: paused;

            &::before {
                content: "";
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%); //居中
                background-color: #fff;
            }

            img {
                width: 100%;
                border-radius: 50%;
            }

            @keyframes zhuan {
                0% {
                    transform: rotate(0);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
        }

        // 控制按钮
        .control {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 5px;

            i {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 26px;
                color: #1d8dbd;
                cursor: pointer;
                transition: all 0.2s;

                &:hover {
                    border-radius: 6px;
                    background-color: #cedbf7;
                    color: #fff;
                }
            }

            .i-big {
                font-size: 30px;
            }

            .i-smell {
                font-size: 20px;
            }
        }
    }

}

// 模态框
.modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: none;

    // 侧边
    .modal-box {
        width: 30%;
        height: 100%;
        padding: 20px;
        background-color: #fff;
        position: absolute;
        padding-top: 50px;

        top: 0;
        right: 0;


        // 标题
        .modal-box-top {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .modal-title {
                font-size: 18px;
            }

        }

        // 内容
        .modal-wrapper {
            width: 100%;
            height: calc(100%-40px);
            overflow-y: auto;

            .music-list {
                list-style: none;

                li {
                    padding: 10px 5px;
                    border-radius: 3px;
                    border-bottom: 1px solid rgb(186, 182, 182);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.1s 0s;

                    &:hover {
                        cursor: pointer;
                        background-color: #cccaca;
                    }
                }

            }

            .playing {
                color: #bbff00;
            }
        }
    }
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';
import '../assets/css/font-awesome.min.css' //引入图标
import axios from 'axios'
import { useDateFormat } from '@vueuse/core'

const createModalVisible = ref(false);

// 保存音乐列表信息
var musicList = [
    {
        "name": "我记得",
        "audio_url": "./audios/我记得.mp3",
        "singer": "赵雷",
        "album": "少年",
        "cover": "./imgs/0.jpg",
        "time": "05:29"
    },
    {
        "name": "成都",
        "audio_url": "./audios/成都.mp3",
        "singer": "赵雷",
        "album": "成都",
        "cover": "./imgs/1.jpg"
    },
    {
        "name": "南方姑娘",
        "audio_url": "./audios/南方姑娘.mp3",
        "singer": "赵雷",
        "album": "赵小雷",
        "cover": "./imgs/2.jpg"
    },
    {
        "name": "阴天快乐",
        "audio_url": "./audios/阴天快乐.mp3",
        "singer": "陈奕迅",
        "album": "Rice&Shine",
        "cover": "./imgs/3.jpg"
    },
    {
        "name": "爱情转移",
        "audio_url": "./audios/爱情转移.mp3",
        "singer": "陈奕迅",
        "album": "认了吧",
        "cover": "./imgs/4.jpg"
    },
    {
        "name": "火葬场之歌",
        "audio_url": "./audios/火葬场之歌.mp3",
        "singer": "钨丝,梦魇",
        "album": "死有分",
        "cover": "./imgs/5.jpg"
    }
];
// 当前播放哪一首歌曲
var currentIndex = ref(0);
// 模态框列表当前播放的歌曲样式
const playing = ref([]);
// 歌曲播放时间
var currentTimeStr = ref("00:00");
var currentTime = ref(0);
// 当前播放的音乐信息
var musicMsg = ref('')
// 载入信息
const render = (data) => {
    musicMsg.value = data;
}
// 歌曲总时间
var totalTime = ref('')
var totalTimeStr = ref('');

// 音乐
const audio = ref();
const prevBtn = ref();
// 播放按钮
const playBtn = ref();
const nextBtn = ref();
const openModal = ref();
// 播放按钮的类
const playBtnClass = ref(['fa', 'i-big', 'fa-play']);


// 信息面板
const playInfoDom = ref();
// 封面
const coverDom = ref();

// 更新侧栏样式
const pushStyle = () => {
    modalIconClass.value[currentIndex.value] = 'fa-pause-circle';
    playing.value[currentIndex.value] = 'playing';
}
const popStyle = () => {
    playing.value[currentIndex.value] = '';
    modalIconClass.value[currentIndex.value] = ''
}

// 无需资源加载完成的播放开始时事件
const playMusicOther = () => {
    // 切换图标
    playBtnClass.value.pop();
    playBtnClass.value.push("fa-pause");
    // 显示信息面板
    playInfoDom.value.style = 'top:-100%;opacity:1';
    // 封面转
    coverDom.value.style = 'animation-play-state: running';
    //更新总时长
    totalTime.value = audio.value.duration;
    totalTimeStr.value = format(totalTime.value);
    // 更新模态框列表样式
    pushStyle();
}
const stopMusicOther = () => {
    playBtnClass.value.pop();
    playBtnClass.value.push("fa-play")
    playInfoDom.value.style = 'top:0;opacity:0';
    coverDom.value.style = 'animation-play-state: pause';
    // 停止播放，清空侧栏样式
    popStyle();
}


// 监听currentIndex 修改modal列表
watch(() => currentIndex.value, (newVal, oldVal) => {//监听父组件swiper索引变化，修改样式数组
    // 细粒化清除样式
    playing.value[oldVal] = ''
    modalIconClass.value[oldVal] = '';
    pushStyle();
})


// 播放按钮的事件
const play = () => {
    if (playBtnClass.value.includes('fa-play')) {
        playMusicOther();
        audio.value.play();
    } else {
        stopMusicOther();
        audio.value.pause();
    }
}
// 回退按钮的事件
const prev = () => {
    if (currentIndex.value > 0) currentIndex.value--;
    else currentIndex.value = musicList.length - 1;
    render(musicList[currentIndex.value]);//更新面板信息
    playMusicOther();//其他动效
    // 只在切换加载完触发，首次打开页面vue已提前渲染好dom不触发
    audio.value.ondurationchange = () => {
        audio.value.play();
    }
}
const next = () => {
    currentIndex.value = (currentIndex.value + 1) % musicList.length;
    render(musicList[currentIndex.value]);
    playMusicOther();
    audio.value.ondurationchange = () => {
        audio.value.play();
    }
}

// 格式化时间
const format = (s) => {
    s = Math.floor(s);
    var h;
    h = Math.floor(s / 60);
    s = s % 60;
    h += '';
    s += '';
    h = (h.length == 1) ? '0' + h : h;
    s = (s.length == 1) ? '0' + s : s;
    return h + ':' + s
};


// 进度条对象
const lineDom = ref();

// 歌曲播放时触发的事件,自动更新进度条
const updateTime = (e) => {
    currentTimeStr.value = format(audio.value.currentTime);
    let persent = audio.value.currentTime /  audio.value.duration * 100;
    lineDom.value.style = "width:" + persent + "%";
}
// 歌曲播放结束

onMounted(() => {

    // 请求本地数据,加载音乐列表信息 无法跨域
    // axios.get('/json/music.json',{responseType:'json'}).then(res =>{
    //     musicList=res.data;
    //     // 注意要在异步的回调中进行，保证数组中有所需值
    //     render(musicList[currentIndex.value]);
    // })
    render(musicList[currentIndex.value]);
    audio.value.ondurationchange = () => {
        playMusicOther();
        audio.value.play();
    }
})


// 模态框播放音乐
const modalPlay = (index) => {
    if (index == currentIndex.value) {
        play();//如果是当前音乐，则与点击play结果相同
    } else {
        currentIndex.value = index;
        render(musicList[index]);//加载信息
        playMusicOther();//加载动效
        audio.value.ondurationchange = () => {
            audio.value.play();
        }
    }
}

const modalDom = ref();
const modalIconClass = ref([]);
// 打开模态框
const openMusicList = () => {
    createModalVisible.value = true;
}
//关闭
const closeMusicList = () => {
    modalDom.value.style = 'display:none';
}

const progressBar = ref();
// 点击进度条
const progressClick = (e) => {

    const rect = progressBar.value.getBoundingClientRect();

    let persent = Math.floor(e.clientX - rect.left) / rect.width * 100;

    audio.value.currentTime = persent * audio.value.duration / 100;

}
</script>
