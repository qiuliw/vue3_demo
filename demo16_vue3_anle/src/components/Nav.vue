<template>
    <div class="nav">
        <div class="log" @click="goT">
            <img src=".././assets/lt.svg" alt="" srcset="">
        </div>
        <ul>
            <li :class=tabCurrentList[index] @click="goTo(index)"   v-for="(item,index) in tabNameList" ><span>{{ item }}</span></li>
        </ul>
        <div class="seach">
            <n-input v-model:value="value" type="text" placeholder="输入你要查找的亲人姓名" />
            <div class="fa fa-search i-search"/>
        </div>
        <div class="buy-car">
            
            <RouterLink to="/buy">
              <n-button quaternary>
                <div class="fa fa-shopping-cart i-car" style="color: cadetblue;"/>
                <n-gradient-text type="info" size="22">
                去买香
                </n-gradient-text></n-button>

            </RouterLink>
        </div>
    </div>
</template>


<script setup>
import {ref} from "vue";
import { defineProps,watch } from 'vue';
import { useMessage } from "naive-ui";
import { useRouter } from 'vue-router';

const router = useRouter();
const msg = useMessage();

const goT = ()=>{
    router.push('/login');
}

// 导航栏内容
const tabNameList=ref(["安魂曲","昨日之亲","列祖列宗","香火鼎盛","入住"]);

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
    background-color: transparent;
    // log
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
            color: rgb(132, 132, 132);
            transition: all 0.2s;
            &:hover{
                border-radius: 10px;
                background-color: rgb(87, 87, 87);
                color: rgb(194, 194, 194);
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
            color: rgb(88, 152, 255);
        } 
    }
    .seach{
        margin-right: 30px;
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
        margin-right: 20px;
        cursor:pointer;
        color: rgb(53, 65, 135);
        span{
            margin-left: 10px;
            font-size: 1.1rem;
        }
    }
}
.buyText{
    color:#929292
}

@media (max-width:800px) {
    .seach{
        display: none;
        .n-input{
            display: none;
        }
        .i-search{
            display: none;
        }
    }
    .buy-car{
        display: none;
    }
    
}
</style>