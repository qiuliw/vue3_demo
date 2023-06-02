<template>
    <div class="nav">

        <ul>
            <li :class=tabClassList[index] @click="goTo(index)"   v-for="(item,index) in tabNameList" >{{ item }}</li>
        </ul>

    <!--废弃
        <div class="music">
            音频播放控件
            <div :class="textClass" @click="playMusic">{{ musicState }}</div>
                ::::VUE3 废弃tmd  !!!!!----此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素
                    需要用 refName=ref(null)调用 
                对单个dom的操作只能使用声明并绑定的形式
                
            <audio
            ref="audio"
            autoplay="autoplay" 
            controls="controls"
            preload="auto"
            >
            <source src="../assets/que.mp3"/>
            </audio>
        </div>
        
    -->
    </div>
</template>


<script setup>
import {ref} from "vue"
// music 废弃
// var musicState=ref("播放音乐")
// const audio=ref(null);
// const textClass=ref("text");
// const playMusic=()=>{
//     if(musicState.value=="播放音乐"){
//             audio.value.play();
//             musicState.value="停止播放";
//             textClass.value="text run" 

//         }else{
//             audio.value.pause();
//             musicState.value="播放音乐";
//             textClass.value="text"
//         }
// }



// tabList
const tabNameList=ref(["首页","红楼","西尤","水浒","三国"]);
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

// 调用父组件改变页
const emits =defineEmits(["goTo"])
function goTo(index){
    emits('slideToMiddle',index)
}


</script>



<style lang="less" scoped>
.nav{
    
    color:white;
    font-weight: bold;
    font-family:  "幼圆",Arial, sans-serif;
    font-size: 1.6rem;
    // font-weight: bold;
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
            transition: all 0.1s;

            &:hover{
                color: #b0b0b0;
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
            color: lightskyblue;
            transform: scale(1.2);
        }
    }
}



.run{
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
    color: #737373;
}

</style>