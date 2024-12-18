
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

## 技术栈

- vue3
- vue-router
- pinia
- naive-ui
- swiper


## 已知bug

~~音乐进度条多次切换后可能无法正确渲染长度
views/page1.vue - 537行~~
>已修复，是使用e.target获取的音乐dom，可能获取的不是响应式更新的dom，一直使用的老dom第一首歌曲更新进度条。
>改用vue提供的ref api引用音乐dom后恢复正常

## 功能展示

#### 登录页
- 利用vue页面生命周期进行音乐播放和停止
- 登录页表框背景的**响应式布局**


```c
@media (max-width:800px) {
    .form {
        background-color: rgba(95, 126, 156,0.2);
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}
```

### 灵堂菜单 

- 点击切换轮播图页
- 与轮播图联动的高亮显示
- 灵堂页菜单搜索框**响应式布局**

### 灵堂 - 安魂曲页

- 音乐播放
- 音乐列表
- 音乐进度条拖动

### 香品管理页

- 商品列表
- 商品增删
- 浅色深色背景切换

