<template>
    <div>
        <h1>红楼梦</h1>
        <p>《红楼梦》，原名《石头记》，中国古代章回体长篇小说，中国古典四大名著之一。其通行本共120回，一般认为前80回是清代作家曹雪芹所著，后40回作者为无名氏，由高鹗，程伟元整理。小说以贾、史、王、薛四大家族的兴衰为背景，以富贵公子贾宝玉为视角，以贾宝玉与林黛玉、薛宝钗的爱情婚姻悲剧为主线，描绘了一些闺阁佳人的人生百态，展现了真正的人性美和悲剧美，是一部从各个角度展现女性美以及中国古代社会百态的史诗性著作。</p>
        <p>《红楼梦》版本有120回“程本”和80回“脂本”两大系统。程本为程伟元排印的印刷本，脂本为脂砚斋在不同时期抄评的早期手抄本。脂本是程本的底本。</p>
        <p>《红楼梦》是一部具有世界影响力的人情小说、中国封建社会的百科全书、传统文化的集大成者。其作者以“大旨谈情，实录其事”自勉，只按自己的事体情理，按迹循踪，摆脱旧套，新鲜别致，取得了非凡的艺术成就。“真事隐去，假语存焉”的特殊笔法更是令后世读者脑洞大开，揣测之说久而遂多。二十世纪以来，《红楼梦》更以其丰富深刻的思想底蕴和异常出色的艺术成就使学术界产生了以其为研究对象的专门学问—<z style="font-weight: 1000;">红学</z></p>
        <p>《红楼梦》是以贾、史、王、薛四大家族为背景，故事情节由主次两条矛盾线索构成的。 一条是以贾宝玉、林黛玉的爱情为中心，贯穿全书的全线。它以贾、林争取爱情自由、婚姻自主和个性解放的思想同封建制度、封建礼教之间的矛盾为线索，以贾、林最后对封建制度和封建礼教的彻底背叛和爱情的悲剧结局而告终。 这条线索从第三、四两回，林黛玉和薛宝钗接踵来到贾府，与宝玉的爱情纠葛开始形成，并在矛盾中向前开展。直到第九十七、九十八两回，黛玉和宝钗在“哀”“乐”截然不同，“悲”“欢”强烈对比之下，一个“魂归离恨天”，一个“出闺成大礼”，终成悲剧结局，是主线的高潮，也是实现全书主题的集中所在。后二十一回，则是在高潮的余波中，情节的下降、结尾阶段。在这个阶段里，贾家被抄而又赢得一个回光反照的局面。最后宝玉遁入空门，全书结束。 从这条主线看，造成贾、林爱情悲剧的根本原因是：在封建制度与礼教的桎梏下，青年男女爱情、婚姻不能自主，而取决于封建家长的意愿。具体地说，贾、林的爱情、婚姻不取决于他们自己的意志，而由以贾母为代表的荣府当权派们决定，而贾母又以封建的阶级利益做点为基点，她对林黛玉的“疼”，仅仅是从“骨血”关系出发，并不喜爱她不符封建道德规范要求的“孤高自许”、“目下无尘”和“小性儿”；而对薛宝钗的“爱”，则是以她“端方”的封建品格为基点，尤其是适应封建道德要求的“行为豁达，随分从时”的性格。由此终于选中了薛宝钗而弃置了林黛玉。其结果是，同时酿成3个人的悲剧：林黛玉，为爱情熬尽最后一滴眼泪，含恨而死；贾宝玉，终于离弃“温柔富贵之乡”而遁入了空门；薛宝钗，虽成了荣府的“二奶奶”，却没有真正赢得爱情，陪伴她提终生的凄凉孤苦。她和林黛玉，只不过是同一条封建毒草藤上两颗属性不同的苦瓜而已。 这条主线揭示了封建制度、封建礼教的罪恶；也歌颂了青年男女对封建制度的礼教的叛逆精神。 《红楼梦》的另一条线索赔是以宁、荣二府及其社会关系为中心，由一些彼此独立而又互相关联的情节组成的副线。它以封建的阶级压迫，等级制度以及封建遗族寄生腐朽，荒淫糜烂的生活所造成的封建制度自身的矛盾为线索，它以贾府及其亲族的所造成的封建制度自身的矛盾为线索，它以贾府及其亲族的一一衰败为结局，不仅构成主线的社会背景，并与主线殊途同归，提示和鞭笞了封建制度的罪恶。</p>
    </div>
</template>

<style scoped>
p{
    font-size: 16px;
    text-indent:32px;
    
}
h1{
    font-family: "楷书";
    color: #c93939;
    text-align: center;
}
</style>

<script setup>
const loadingBar = useLoadingBar()
const disabledRef = ref(true)

const message = useMessage();

onMounted(()=>{
    info();
    disabledRef.value = true
    loadingBar.error()
})

function info() {
    message.info(
    "你来的不巧了",
    {
        keepAliveOnHover: true,
        showIcon: false,
        duration: 1500
    }
)};
</script>