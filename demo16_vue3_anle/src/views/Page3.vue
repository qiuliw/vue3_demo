<template>
    <div class="wrap">
        <div class="wrap-left">
            <div class="up">
                    <div class="some " v-for="item, index in upImgList" @click="upXiang()">
                    <img class="img" :src=item alt="" srcset="">
                    <div class="name">{{ upNameList[index] }}</div>
                    <div class="buy">上香</div>
                </div>
            </div>
            <div class="load">
                <div class="some" v-for="item, index in loadImgList" @click="upXiang()">
                    <img class="img" :src=item alt="" srcset="">
                    <img class="img" :src=item alt="" srcset="">
                    <div class="name">{{ loadNameList[index] }}</div>
                    <div class="buy" @click="upXiang">上香</div>
                </div>
            </div>
        </div>
        <div class="wrap-right">
            <div class="more">
                <span>线下扫墓 >></span>
            </div>
            <div class="shun">
                <span>墓地风景直播 >></span>
            </div>
            <NCard title="最近上香动态" style="height: 250px;overflow: hidden;
                border-radius: 8px;
                background-color: rgba(255, 255, 255, 0.6);
                " hoverable size="small">
                <UpData />
            </NCard>
        </div>
    </div>
</template>

<script setup>
import UpData from '@/components/UpData.vue';
import { useMessage } from 'naive-ui'

const upImgList = ['./imgs/a-1.jpeg', './imgs/a-2.jpeg', './imgs/a-3.jpeg']
const loadImgList = ['./imgs/a-4.jpeg', './imgs/a-5.jpeg', './imgs/a-6.jpeg']
const upNameList = ["张三", "张四", "李二"]
const loadNameList = ["张五", "张六", "张七"]
const newLsit = ["A为B上香", "A为B上香", "A为B上香", "A为B上香", "A为B上香", "A为B上香", "A为B上香"]

const msg = useMessage();

const upXiang = () => {
    msg.success('上香成功');
};

</script>

<style lang="less" scoped>
.wrap {
    margin-top: 50px;
    height: 600px;
    width: 1200px;
    display: flex;

    .wrap-left {
        padding-right: 100px;
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        ;
        align-content: stretch;
        height: 100%;
        width: 100%;

        .up,
        .load {
            overflow: hidden;
            flex: 1;
            display: flex;

            // background-color: red;
            .some {
                flex: 1;
                margin: 20px 40px;

                border-radius: 10px;
                overflow: hidden;
                position: relative;
                transition: all 0.3s ease;

                box-shadow: 0px 0 10px 1px #767676;

                img {
                    transition: all 0.3s ease;
                    width: 100%;
                    height: 100%;
                }

                .name {
                    size: 1rem;
                    font-weight: 600;
                    color: aliceblue;
                }

                &:hover img {
                    transform: scale(1.4);
                }

                &:hover .buy {
                    bottom: 0px;
                    color: #ed6d6d;
                    cursor: pointer;
                }

                &:hover {
                    box-shadow: 0px 0 10px 1px #0decfc;

                    .name {
                        bottom: -30px;

                    }
                }

                .buy {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    height: 30px;
                    transition: all 0.3s ease;
                    background-color: rgba(0, 0, 0, 0.3);
                    position: absolute;
                    bottom: -40px;
                    right: 0;
                }

                .name {
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    width: 100%;
                    height: 30px;
                    bottom: 0px;

                }

                &::after {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    box-shadow: 0 0 50px 20px #1c1c1c inset;
                }
            }

        }

    }

    .wrap-right {
        flex: 1;
        height: 100%;
        width: 100%;

        .more {
            margin-top: 20px;
            width: 100%;
            height: 80px;
            background: url("../../public/imgs/m-1.jpeg") no-repeat center center;
            background-size: cover;
            border-radius: 10px;
            border: solid #eee 2px;
            position: relative;

            span {
                position: absolute;
                top: 20px;
                left: 20px;
                font-size: large;
                font-weight: bold;
                color: white;
                text-shadow: 2px 2px 5px black;
            }
        }

        .shun {
            width: 100%;
            height: 200px;
            background: url("../../public/imgs/m-2.jpg") no-repeat;
            background-size: cover;
            border-radius: 10px;
            border: solid #eee 2px;
            margin: 20px 0;
            position: relative;

            span {
                position: absolute;
                top: 20px;
                left: 20px;
                font-size: large;
                font-weight: bold;
            }
        }

        .new {
            height: 300px;
            width: 100%;
            margin-top: 30px;
            padding: 0 10px;

            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 30px;
                font-size: 1rem;
                border-bottom: 3px solid #444;
            }

            ul {
                li {
                    height: 20px;
                    font-size: medium;
                    margin: 7px 0;
                    display: block;
                }
            }
        }
    }
}


.box {
  /* 超出部分要隐藏 */
  overflow: hidden;

  /* 撑开父盒子大小 */
  padding: 15vmin 10vmin;
  /* 小圆角 */
  border-radius: 5vmin;
  /* 文字颜色、大小 */
  color: #66ddf7;
  font-size: 8vmin;

  /* 简单定位 */
  position: relative;
  /* 显示层级最上面 */
  z-index: 0;
}
.box::before {
  content: "";

  /* 宽高要超过父级默认的大小 */
  width: 200%;
  height: 200%;
  /* 基础背景颜色 */
  background-color: #22292f;
  /* conic-gradient 围绕中心点旋转的渐变 */
  background-image: conic-gradient(transparent, #66ddf7, transparent 30%);

  /* 定位到中间 */
  position: absolute;
  left: -50%;
  top: -50%;
  /* 显示层级最底层 */
  z-index: -2;

  /* 旋转整个灯光渐变这一层 */
  animation: rotate 5s linear infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
.box::after {
  content: "";

  /* 往内撑开盒子宽高，正好小一圈当做边框 */
  inset: 1vmin;
  background: #000;
  border-radius: 4vmin;

  position: absolute;
  /* 显示层级中间，盖住最后一层的灯光 */
  z-index: -1;
}
</style>