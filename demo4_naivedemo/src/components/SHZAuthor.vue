<template>
    <n-card hoverable>
        <n-thing>
        <template v-if="avatar" #avatar>
            <n-avatar>
            <n-icon>
                <img src="../static/sna.jpeg"/>
            </n-icon>
            </n-avatar>
        </template>
        <template v-if="header" #header>
            施耐庵
        </template>
        <template v-if="description" #description>
            作者
        </template>
        施耐庵，名子安（一说名耳），又名肇瑞，字彦端，号耐庵。河北遵化人。中国古代著名作家，元末明初人，长篇古典小说《水浒传》作者。
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