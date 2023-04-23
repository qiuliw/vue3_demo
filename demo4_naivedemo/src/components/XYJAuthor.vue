<template>
    <n-card hoverable>
        <n-thing>
        <template v-if="avatar" #avatar>
            <n-avatar>
            <n-icon>
                <img src="../static/wce.png"/>
            </n-icon>
            </n-avatar>
        </template>
        <template v-if="header" #header>
            吴承恩
        </template>
        <template v-if="description" #description>
            作者
        </template>
        吴承恩（约1500年—1582年），字汝忠，号射阳居士，又称射阳山人，南直隶淮安府山阳县河下（今江苏淮安）人（一说安徽桐城），祖籍安东。明代文学家。 [32] 
吴承恩自幼敏慧，博览群书，尤其喜爱神话故事。擅长绘画、书法，多才多艺。在科举中屡遭挫折，嘉靖中举为岁贡生。嘉靖二十八年（1549年）迁居南京，以卖文为生。嘉靖三十九年（1560年）任浙江长兴县丞，不久辞官归去。由于宦途困顿，晚年绝意仕进，闭门著书，终老于家。
        </n-thing>
    </n-card>    
</template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { CashOutline as CashIcon } from "@vicons/ionicons5";
  
  export default defineComponent({
    components: {
      CashIcon
    },
    setup() {
      return {
        avatar: ref(true),
        header: ref(true),
        headerExtra: ref(true),
        description: ref(true),
        footer: ref(true),
        action: ref(true)
      };
    }
  });
  </script>