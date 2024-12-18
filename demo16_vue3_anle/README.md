# demo16_vue3_anle

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### 技术栈

- vue3
- vue-router
- pinia
- naive-ui
- swiper


### 已知bug

~~音乐进度条多次切换后可能无法正确渲染长度
views/page1.vue - 537行~~
>已修复，是使用e.target获取的音乐dom，可能获取的不是响应式更新的dom，一直使用的老dom第一首歌曲更新进度条。
>改用vue提供的ref api引用音乐dom后恢复正常