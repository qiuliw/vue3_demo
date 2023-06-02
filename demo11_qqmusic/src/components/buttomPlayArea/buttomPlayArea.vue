<template>
<div class="buttomPlayArea">

<div class="progress">
    <!-- 播放进度条 背景条 -->
    <div id="progressBgId" class="progressBg"></div>

    <!-- 当前播放进度条 -->
    <div class="current" :style="{width:pointerVal+'px'}"></div>


    <!-- 进度条圆按钮 -->
    <div class="point" :style="{left:pointerVal-3+'px'}">
        
    </div>

</div>
<div class="other">
        <!-- 歌曲图标 -->
    <div class="start">
        <img class="cover" src='../../assets/userAvatar.jpg'/>
    </div>
    <div class="mid"></div>

    <div class="end">
       
    </div>
</div>



</div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
let pointerVal=ref(100);
onMounted(()=>{
    // 背景条
    let pB = document.getElementById('progressBgId');
    // 背景条相对于浏览器位置
    let pBxy = pB.getBoundingClientRect()


    // 点击进度条的功能
    pB.addEventListener('mousedown',(e)=>{
        
    })

    //拖动是否开始
    let move=false;
    // 鼠标按下的事件
    pB.addEventListener('mousedown',(e)=>{
        move=true;
        pointerVal.value=e.clientX-pBxy.left;
    })

    //拖动事件
    document.body.addEventListener('mousemove',(e)=>{
        // 偏移距离
        let x= e.clientX-pBxy.left
        if(move==true&&x>0&&x<pBxy.width-10){
            pointerVal.value=x;
        }
    })

    //鼠标抬起
    document.body,addEventListener('mouseup',()=>{
        move=false;
    })


})
</script>



<style lang="less" setup>
//底部播放器区域
.buttomPlayArea{
    flex: 1;
    background-color: lightgreen;border-radius: 0 0 10px 0;
    display: flex;
    flex-direction: column;
    // 进度条区域
    .progress{
        position: relative;
        //背景条
        .progressBg{
            width:100%;
            height: 12px;
            background-color: #5e5e5e;
            position: absolute;
            z-index: 10;
            opacity: .2;
        }
        //当前进度条
        .current{
            width:30%;height:5px;background-color: aquamarine;position: absolute;
            left: 0;top:0px;z-index:8;
        }
        //进度条圆按钮
        .point{
            width:10px;height: 10px;border-radius: 100%;background-color: red;
            z-index:8;overflow: hidden;position: absolute;top:-3px;
        }
    }
    .other{
        flex: 1;
        display: flex;
        .start{
            flex: 1;
            height: 100%;
            display:flex;
            align-items: center;
            //歌曲封面
            .cover{
                display: block;
                height: 55x;
                width: 55px;
                border-radius: 5px;
                margin-top: 5px;
                margin-left: 18px;
            }
        }
        .mid{
            flex: 1;
        }
        .end{
            flex: 1;
        }
        
    }


}

</style>