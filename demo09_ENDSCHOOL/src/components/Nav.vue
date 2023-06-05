<template>
    <div class="nav">

        <ul>
            <li :class=tabCurrentList[index] @click="goTo(index)"   v-for="(item,index) in tabNameList" ><span>{{ item }}</span></li>
        </ul>

    </div>
</template>


<script setup>
import {ref} from "vue";
import { defineProps,watch } from 'vue';


// 导航栏内容
const tabNameList=ref(["首页","红楼","西尤","水浒","三国"]);

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
    font-family:Arial, sans-serif;font-size: 1.6rem;
    position: fixed;z-index: 2;width: 70%;height: 2.5rem;
    display: flex;align-items: center;
    ul{
        flex:1;
        height: 80%;
        margin-left: 12px;
        li{
            margin: 0 2px;
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
}



</style>