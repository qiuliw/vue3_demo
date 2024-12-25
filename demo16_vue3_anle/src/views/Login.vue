<script setup lang="ts">
import Holder from '@/components/Holder.vue';
import LoginForm from '@/components/LoginForm.vue';
import { NCard, NSpace } from 'naive-ui';
import { ref, onMounted, onBeforeUnmount } from 'vue'
const audio = ref();
onMounted(() => {
    audio.value.play();
})
onBeforeUnmount(() => {
    audio.value.pause();
})

const play = () => {
    audio.value.play();
}
const pause = () => {
    audio.value.pause();
}
</script>

<template>
    <div class="wrap">
        <div class="snow" v-for="index in 100" :key="index"></div>

        <NSpace>
            <LoginForm class="form" />
            
        </NSpace>

    </div>

    <audio ref="audio" src="../../public/audios/安魂曲.mp3"></audio>
</template>



<style lang="scss" scoped>
.wrap {
    height: 100vh;
    width: 100vw;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);
}

@function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand * (($max - $min) + 1));
    @return $random_range;
}



.form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 140px;
    transform: translate(-50%, -50%);
    filter: grayscale(100%);

}

@media (max-width:800px) {
    .form {
        background-color: rgba(95, 126, 156, 0.2);
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}

.snow {
    $total: 100;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 6px solid white; // 创建白色圆环
    box-sizing: border-box; // 确保border包含在宽度和高度内

    // 铜钱中间透明效果
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%; // 与父元素相同
        height: 60%; // 与父元素相同
        border: 5px solid white;
        transform: translate(-50%, -50%); // 定位到中心并缩小到一半大小
    }

    @for $i from 1 through $total {
        $random-x: random(1000000) * 0.0001vw;
        $random-offset: random_range(-100000, 100000) * 0.0001vw;
        $random-x-end: $random-x + $random-offset;
        $random-x-end-yoyo: $random-x + ($random-offset / 2);
        $random-yoyo-time: random_range(30000, 80000) / 100000;
        $random-yoyo-y: $random-yoyo-time * 100vh;
        $random-scale: random(7000) * 0.0001 + 0.9;
        $fall-duration: random_range(10, 30) * 1s;
        $fall-delay: random(30) * -1s;
        $random-rotate: random(360) * 1deg;
        $random-scale1: $random-scale * random(10000) * 0.0001 ;
        $random-scale2: $random-scale * random(10000) * 0.0001 ;
        $random-scale3: $random-scale * random(10000) * 0.0001 ;


&:nth-child(#{$i}) {
opacity: random(10000) * 0.0001;
transform: translate($random-x, -40px) scale($random-scale,$random-scale1);
animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
}

@keyframes fall-#{$i} {
#{percentage($random-yoyo-time)} {
    transform: translate($random-x-end, $random-yoyo-y) scale($random-scale,$random-scale2) rotate($random-rotate);
}

to {
    transform: translate($random-x-end-yoyo, 100vh) scale($random-scale,$random-scale3) rotate($random-rotate + 180deg);
}
        }

    }
}
</style>