<template>
    <div class="wrap">
        <div class="wrap-left">
            <div class="up">
                <div class="some" v-for="item,index in upImgList">
                    <img :src=item alt="" srcset="">
                    <div class="name">{{upNameList[index]}}</div>
                    <div class="buy">加入购物车</div>
                </div>
            </div>
            <div class="load">
                <div class="some" v-for="item,index in loadImgList">
                    <img :src=item alt="" srcset="">
                    <div class="name">{{loadNameList[index]}}</div>
                    <div class="buy">加入购物车</div>
                </div>
            </div>
        </div>
        <div class="wrap-right">
            <div class="more">
                <span>更多精选商品 >></span>
            </div>
            <div class="shun">
                <span>顺丰快递到家 >></span>
            </div>
            <div class="new">
                <div class="title">
                    <span class="left">冰天美帝新闻</span>
                    <span class="right">更多</span>
                </div>
                <ul>
                    <li v-for="item in newLsit">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

const upImgList=['./imgs/m-1.jpg','./imgs/m-2.jpg','./imgs/m-3.jpg']
const loadImgList=['./imgs/m-4.jpg','./imgs/m-5.jpg','./imgs/m-6.jpg']
const upNameList=["珍珠奶茶","草莓奶茶","芒果圣代"]
const loadNameList=["珍珠国立","草莓圣代","红茶"]
const newLsit=["七人-伊拉克滑稽竟然真美用我电脑","冰淇淋有助怀孕","冰淇淋生石油","冰淇淋治疗游戏上瘾","冰淇淋复兴民族","冰淇淋拯救脑死亡病人","冰淇淋拯救世界"]
</script>

<style lang="less" scoped>
.wrap{
    margin-top: 50px;
    height: 600px;width: 1200px;
    display: flex;
    .wrap-left{
        padding-right: 100px;
        flex:3;display: flex;
        flex-direction:column;
        justify-content: space-around;;
        align-content:stretch;
        height: 100%;width: 100%;
        
        .up,.load{
            overflow: hidden;
            flex:1;display: flex;
            // background-color: red;
            .some{
                flex:1;
                margin: 5px 30px;
                border: 8px solid white;
                border-radius:20px;
                overflow: hidden;
                position: relative;
                transition: all 0.3s ease;
                img{
                    transition: all 0.3s ease;
                    height: 100%;
                }
                &:hover img{
                    transform: scale(1.4);
                }
                &:hover .buy{
                    bottom:0px;
                    cursor: pointer;
                }
                &:hover {
                    box-shadow: 0px 0 10px 1px #0decfc;
                    .name{
                        bottom: -30px;
                    }
                }
                .buy{
                    width: 100%;
                    display: flex;justify-content: center;align-items: center;font-size: 1rem;height: 30px;
                    transition: all 0.3s ease;
                    background-color: rgba(0,0,0,0.3);
                    position: absolute;bottom:-40px;right: 0;
                }
                .name{
                    transition: all 0.3s ease;
                    display: flex;justify-content: center;align-items: center;
                    position:absolute;width: 100% ;height: 30px;bottom: 0px;
                    
                }
            }
        }
        
    }
    .wrap-right{
        flex:1;height: 100%;width: 100%;
        .more{
            margin-top: 20px;
            width: 100%;height: 80px;
            background: url("./imgs/more.png");
            border-radius: 10px;border: solid #eee 2px;
            position: relative;
            span{
                position: absolute;top: 20px;left: 20px;
                font-size: large;font-weight: bold;color: white;
                text-shadow: 2px 2px 5px  black;
            }
        }
        .shun{
            width: 100%;height:200px;
            background: url("./imgs/shun.png");
            border-radius: 10px;border: solid #eee 2px;
            margin: 20px 0;
            position: relative;
            span{
                position: absolute;top: 20px;left: 20px;
                font-size: large;font-weight: bold;
            }
        }
        .new{
            height:300px;width: 100%;margin-top:30px;
            padding: 0 10px;
            .title{
                display: flex;justify-content: space-between;align-items: center;
                height: 30px;font-size: 1rem;
                border-bottom: 3px solid #444;
            }
            ul{
                li{
                    height: 20px;font-size:medium;
                    margin: 7px 0;
                }
            }
        }
    }
}

</style>