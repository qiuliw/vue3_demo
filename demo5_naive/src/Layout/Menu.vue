<template>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <n-watermark
    v-if="show"
    content="武稞杭"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />
  <n-switch v-model:value="show" />
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
BookOutline as BookIcon,
HomeOutline as HomeIcon
} from "@vicons/ionicons5";

const show=ref(false)
function renderIcon(icon) {
return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
{
    label: () => h(
    "a",
    {
        href: "#/home",
        target: "_self",
        rel: "noopenner noreferrer"
    },
    "首页"
    ),
    key: "home-page",
    icon: renderIcon(HomeIcon)
},
{
    label: () => h(
    "a",
    {
        href: "#/HLM",
        target: "_self",
        rel: "noopenner noreferrer"
    },
    "红楼梦"
    ),
    key: "the-dream-of-red-mansion",
    icon: renderIcon(BookIcon)
},
{
    label: () => h(
    "a",
    {
        href: "#/XYJ",
        target: "_self",
        rel: "noopenner noreferrer"
    },
    "西游记"
    ),
    key: "journey-to-the-west",
    icon: renderIcon(BookIcon)
},
{
    label: () => h(
    "a",
    {
        href: "#/SHZ",
        target: "_self",
        rel: "noopenner noreferrer"
    },
    "水浒传"
    ),
    key: "all-men-are-brothers",
    icon: renderIcon(BookIcon)
},
{
    label: () => h(
    "a",
    {
        href: "#/SGYY",
        target: "_self",
        rel: "noopenner noreferrer"
    },
    "三国演义"
    ),
    key: "romance-of-the-three-kingdoms",
    icon: renderIcon(BookIcon)
},
];


const activeKey=ref(null)

</script>