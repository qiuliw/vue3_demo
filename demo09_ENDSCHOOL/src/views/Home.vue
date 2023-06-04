<template>
    <!-- 导航栏 -->
    <Nav :activeIndex="activeIndex" @slideToMiddle="goTo"/>
    <!-- swiper -->
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
  import Page1 from "./Page1.vue";
  import Page2 from "./Page2.vue";
  import Nav from "../components/Nav.vue"
  
  import { ref } from "vue"
  // 引入swiper基础组件样式
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import { Mousewheel, Pagination } from 'swiper';

  
  //---------- swiper ----------------
  let useSwiper=null;
  const onSwiper=(swiper)=>{
    useSwiper=swiper;
  }
  //开启滚轮事件
  const modules=[Mousewheel];
  // 导航随动
  let activeIndex=ref(0);
  const onSlideChange=(swiper)=>{
    activeIndex.value=swiper.activeIndex;
  }
  // 导航跳转
  const goTo=(index)=>{
    useSwiper.slideTo(index);
  }
  </script>
  
<style lang="less">
body{
  background-image: linear-gradient(0deg,
          rgba(247, 247, 247, 1) 23.8%,
          #0decfc);
}

// swiper
.swiper {
width: 100vw;height: 100vh;background-color: rgba(0,0,0,0);
.swiper-slide {
    display: flex;justify-content: center;align-items: center;
    /* 防止分页干扰 */
    overflow: hidden;
    /* 分页透明 */
    // background-color: rgba(0,0,0,0);
}
}

  </style>