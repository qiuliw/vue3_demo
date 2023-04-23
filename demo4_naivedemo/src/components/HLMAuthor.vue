<template>
    <n-card @click="changeNew"
    hoverable>
        <n-thing>
        <template v-if="avatar" #avatar>
            <n-avatar>
            <n-icon>
                <img src="../static/cxq.webp"/>
            </n-icon>
            </n-avatar>
        </template>
        <template v-if="header" #header>
            曹雪芹
        </template>
        <template v-if="description" #description>
            作者
        </template>
        曹雪芹（约1715-约1763），中国古典名著《红楼梦》作者，祖上是清代内务府正白旗“包衣”，生于南京，约14岁时迁居北京。他是江宁织造曹寅之孙，他早年在江宁过了一段锦衣纨绔、富贵风流的生活。至雍正六年（1728），曹家因亏空获罪被抄家，曹雪芹随家人迁回北京老宅。
后又移居北京西郊，靠卖字画和朋友救济为生。曹雪芹素性放达，爱好广泛，对金石、诗书、绘画、园林、中医、织补、工艺、饮食等均有所研究。他以坚忍不拔的毅力，历经多年艰辛，终于创作出极具思想性、艺术性的伟大作品——《红楼梦》。
        </n-thing>
    </n-card>    
</template>
  
<script setup>
import { defineComponent, ref } from "vue";
import { CashOutline as CashIcon } from "@vicons/ionicons5";

const  avatar= ref(true)
const  header=ref(true)
const  headerExtra=ref(true)
const  description=ref(true)
const  footer= ref(true)
const  action= ref(true)

function changeNew(){
  window.open("https://baike.baidu.com/link?url=OC75zVFCm2G--MmP12SusKBAwS7_NYjZR8-VRzHM38I8m7q3bc_NTPCWLE8Sic0E5TyIX1JIuOBPAFjE0ytwF0WzjZlci6PLlyC0scbA_H_fzHIZczrJLGTjPdNn9imi", "_blank");
}

  </script>