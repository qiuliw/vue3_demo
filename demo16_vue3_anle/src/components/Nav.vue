<template>
    <div class="nav">
        <div class="log">
            <img src="../../public/imgs/btmd.jpg" alt="" srcset="">
        </div>
        <ul>
            <li :class=tabCurrentList[index] @click="goTo(index)"   v-for="(item,index) in tabNameList" ><span>{{ item }}</span></li>
        </ul>
        <div class="seach">
            <input type="text"/>
            <div class="fa fa-search i-search"/>
        </div>
        <div class="buy-car">
            <div class="fa fa-shopping-cart i-car"/>
            <span>购物车</span>
        </div>
    </div>
</template>


<script setup>
import {ref} from "vue";
import { defineProps,watch } from 'vue';


// 导航栏内容
const tabNameList=ref(["首页","新品速递","热卖推荐","商品分类","品牌故事","关于"]);

//-------导航栏随动-----------
const tabCurrentList=ref(['current']);// li的current样式数组

const props=defineProps({ //活动页，接收父组件的swiper索引
    activeIndex:{
        default:0
    }
})

watch(()=>props.activeIndex,(newVal,oldVal)=>{//监听父组件swiper索引变化，修改样式数组
    tabCurrentList.value[oldVal]=''
    tabCurrentList.value[newVal]='current';
})

// ----------- 导航栏跳转 -------------
const emits =defineEmits(["goTo"])
function goTo(index){
    emits('slideToMiddle',index)
}
</script>



<style lang="less" scoped>
.nav{
    font-family:Arial, sans-serif;font-size: 1.3rem;
    position: fixed;z-index: 2;width:100%;height: 3rem;
    display: flex;align-items: center;
    // border-bottom: white solid 1px;
    background-color: #0decfc;
    .log{
        height: 100%;
        display: inline-block;
        img{
            height: 100%;
            border-radius: 0 0 20px 0 ;
        }
    }
    ul{
        margin-top: 0.4rem;
        flex:1;
        height: 80%;
        margin-left: 12px;
        li:nth-child(1){
            margin-left:20px;
        }
        li{
            margin: 0 5px;
            padding: 0 9px;
            color: white;
            transition: all 0.2s;
            &:hover{
                border-radius: 10px;
                background-color: white;
                color: rgb(88, 219, 255);
                cursor: pointer;
            }
            &:hover span{
                animation: 0.2s jump;
            }

            span{
                display: inline-block;
            }
            @keyframes jump {
                50%{
                    transform: translateY(-30%);
                }
                100%{
                    transform:translate(0);
                }
            }
        }
        //当前li的样式
        .current{
            color: rgb(66, 66, 66);
        } 
    }
    .seach{
        width: 250px;
        display: flex;
        align-items: center;
        input{
            height: 24px;
            border: 2px solid #eee;
            border-radius: 6px;
            // background-color: ;
        }
        .i-search{
            height: 28px;
            color:#eee;
            margin-left: 10px;
            &:hover{
                color: #707070;
            }
        }
    }
    .buy-car{
        width: 100px;
        margin-right: 20px;
        color: rgb(255, 76, 106);
        span{
            margin-left: 10px;
            font-size: 1.1rem;
        }
    }
}



</style>