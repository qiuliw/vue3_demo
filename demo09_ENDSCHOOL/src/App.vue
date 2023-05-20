<template>
  <Nav :activeIndex="activeIndex"/>
  <swiper
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

  <!-- 背景 -->
  <div class="g-bg">
        <div class="g-polygon g-polygon-1"></div>
        <div class="g-polygon g-polygon-2"></div>
        <div class="g-polygon g-polygon-3"></div>
  </div>
  
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
// import 'swiper/css/pagination';//分页小点

const modules=[Mousewheel];

// 当前页与tab随动的数值
let activeIndex=ref(0);

const onSlideChange=(swiper)=>{
  activeIndex.value=swiper.activeIndex;
}


</script>

