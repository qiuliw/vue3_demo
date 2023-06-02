<template>
  <Nav :activeIndex="activeIndex" @slideToMiddle="goTo"/>
  <swiper
    @swiper="onSwiper"
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="0"
    :speed="400"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    @slideChange="onSlideChange"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><Page1/></swiper-slide>
    <swiper-slide><Page2/></swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>

  
</template>
<script setup>
import Page1 from "./views/Page1.vue";
import Page2 from "./views/Page2.vue";
import Nav from "./components/Nav.vue"

import { ref } from "vue"
// 引入swiper基础组件样式
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Mousewheel, Pagination } from 'swiper';
import './style.css';

const modules=[Mousewheel];

// 导航随动
let activeIndex=ref(0);
const onSlideChange=(swiper)=>{
  activeIndex.value=swiper.activeIndex;
}

// 导航切换
let useSwiper=null;
const onSwiper=(swiper)=>{
  useSwiper=swiper;
}
const goTo=(index)=>{
  useSwiper.slideTo(index);
}



</script>

<style>
.swiper {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0);

}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* my set */
  overflow: hidden;
  /* 分页透明 */
  background-color: rgba(0,0,0,0);
}

</style>