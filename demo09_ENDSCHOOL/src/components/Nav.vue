<template>
    <div class="nav">

        <ul>
            <li :class=tabClassList[index]   v-for="(item,index) in tabNameList" >{{ item }}</li>
        </ul>

        <div class="music">
                <!-- 音频播放控件 -->
                <div :class="textClass" @click="playMusic">{{ musicState }}</div>
                <!-- ::::VUE3 废弃tmd  !!!!!----此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素
                      需要用 refName=ref(null)调用 
                    对单个dom的操作只能使用声明并绑定的形式
                    -->
                <audio
                ref="audio"
                autoplay="autoplay" 
                controls="controls"
                preload="auto"
                >
                <source src="../assets/que.mp3"/>
                </audio>
            </div>
        </div>
</template>


<script setup>
import {ref} from "vue"
// music
var musicState=ref("播放音乐")
const audio=ref(null);
const textClass=ref("text");
const playMusic=()=>{
    if(musicState.value=="播放音乐"){
            audio.value.play();
            musicState.value="停止播放";
            textClass.value="text run" 

        }else{
            audio.value.pause();
            musicState.value="播放音乐";
            textClass.value="text"
        }
}
// tabList
const tabNameList=ref(["首页","红楼","西游","水浒","三国"]);
// 记录li数组样式状态
const tabClassList=ref(['current']);
// props swiper变化
import { defineProps,watch } from 'vue';
const props=defineProps({
    activeIndex:{
        default:0
    }
})

// 监听父组件传值
watch(()=>props.activeIndex,(newVal,oldVal)=>{
    tabClassList.value[oldVal]=''
    tabClassList.value[newVal]='current';
})
</script>



<style lang="less" scoped>
.nav{
    color: rgb(90, 90, 90);
    font-family: "幼圆";
    font-size: 1.5rem;
    font-weight: bold;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;

    ul{
        flex:1;

        li{
            margin-left: 1rem;
            transition: all 0.3s;
            &:hover{
                color: aquamarine;
                text-shadow: 0 0 .5rem rgb(0, 59, 176);
                transform: scale(1.2);
            }
        }
    }
    .music{
        display: flex;
        align-items: center;
        margin-right: 2rem;
        transition: all 0.3s;
        audio{
            display: none;
        }
        &:hover{
            color: pink;
            transform: scale(1.2);
        }
    }
}



.run{
    color: pink;
    animation: ro 5s infinite ;
    animation-timing-function:linear;
}

@keyframes ro{
    0%{
        rotate: 0deg;
        
    }
    50%{
        rotate: 180deg;
    }
    100%{
        rotate: 360deg;
    }
}

.current{
    color: #ff2b75;
    text-shadow: 0 0 .625rem pink;
}

</style>