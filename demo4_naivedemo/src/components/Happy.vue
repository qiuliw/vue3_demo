<template>
    <div class="canvas">
        <canvas id="canvas"></canvas>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

var canvas=null;
var ctx=null;
var str=null;
var Arr=null;
var colors=null;
var colorNum=null;

onMounted(()=>{
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    canvas.height = screen.availHeight; //可视区域的高度
    canvas.width = screen.availWidth; //可视区域的宽度
    str = '石蒙'.split('');
    Arr = Array(Math.ceil(canvas.width / 10)).fill(0); //获取宽度例如1920 / 10 192；行各字符的y坐标
    console.log(Arr);
    colors = ['#0f0', 'chartreuse', 'yellow', 'indianred'];
    colorNum = 0;
    setInterval(rain, 40);
})


const rain = () => {
        ctx.fillStyle = 'rgba(0,0,0,0.05)'; //填充背景颜色，不断覆盖
        ctx.fillRect(0, 0, canvas.width, canvas.height); //背景
        ctx.fillStyle = colors[colorNum % 4]; //文字颜色
        colorNum++;
        //遍历192个字
        Arr.forEach((item, index) => {
            ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10);
            Arr[index] = item >= canvas.height || item > 10000 * Math.random() ? 0 : item + 10; //设定各个的y坐标，超出为0，每超出就+10添加随机数让字符随机出现不至于那么平整
        });
    };
</script>

<style>
.canvas{
    padding: 0;
    margin: 0;
    overflow: hidden;
}
</style>