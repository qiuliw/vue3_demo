<template>
    <div class="container_header">
        <header class="header" id="HOME">
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :speed="1200"
                :loop="true"
                :space-between="0"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                effect="fade"
            >
                <swiper-slide>
                    <img src="../assets/vue.svg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../../public/vite.svg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/vue.svg" alt="" />
                </swiper-slide>
            </swiper>
        </header>
    </div>
</template>

<script setup>
//  引入想要效果模块
import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
// 引入样式
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

// 嫌麻烦，直接引入了所有 Swiper 样式，包括所有模块样式
// import 'swiper/css/bundle'

const onSwiper = (swiper) => {}
const onSlideChange = () => {}

</script>

<style scoped>
.swiper-slide {
  height: 300px;
  line-height: 300px;
  font-size: 30px;
  text-align: center;
  background-color: pink;
}
.swiper::v-deep(.swiper-pagination .swiper-pagination-bullet) {
  background: rgb(255, 255, 255);
}
.swiper::v-deep(.swiper-pagination .swiper-pagination-bullet-active ){
  background: rgb(255, 255, 255);
}
</style>
