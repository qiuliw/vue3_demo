<template>
    <div id="stars" class="star" @click="toggleAnimation">
      <div class="star-after"></div>
    </div>
    <div id="stars2" class="star" @click="toggleAnimation">
      <div class="star-after"></div>
    </div>
    <div id="stars3" class="star" @click="toggleAnimation">
      <div class="star-after"></div>
    </div>
    <div id="title">
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarField',
    data() {
      return {
        animationRunning: true,
      };
    },
    methods: {
      toggleAnimation() {
        this.animationRunning = !this.animationRunning;
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
          star.style.animationPlayState = this.animationRunning ? 'running' : 'paused';
        });
      },
    },
  };
  </script>
  
  <style lang="scss">
  
  // n is number of stars required
  @function multiple-box-shadow($n) {
    $value: '#{random(2000)}px #{random(2000)}px #FFF';
    @for $i from 2 through $n {
      $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
    }
    @return unquote($value);
  }
  
  $shadows-small: multiple-box-shadow(700);
  $shadows-medium: multiple-box-shadow(200);
  $shadows-big: multiple-box-shadow(100);
  
  html {
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden;
  }
  
  .star {
    width: 1px;
    height: 1px;
    background: transparent;
    position: absolute;
  }
  
  #stars {
    box-shadow: $shadows-small;
    animation: animStar 50s linear infinite;
  }
  
  #stars2 {
    box-shadow: $shadows-medium;
    animation: animStar 100s linear infinite;
  }
  
  #stars3 {
    box-shadow: $shadows-big;
    animation: animStar 150s linear infinite;
  }
  
  .star-after {
    content: ' ';
    position: absolute;
    top: 2000px;
  }
  
  #title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #FFF;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
  }
  
  #title span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  </style>