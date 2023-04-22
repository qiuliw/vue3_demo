import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy';

import path from 'path'//配置路径别名
export default defineConfig({

  base: './',

    plugins: [
        vue(),
        AutoImport({
            imports:['vue',
            'vue-router',
            {
              'naive-ui': [
                'useDialog',
                'useMessage',
                'useNotification',
                'useLoadingBar'
              ]
            }
          ]
        }),
        legacy({
          targets:["defaults","not IE 11"],
        }),
        
        Components({
          resolvers: [NaiveUiResolver()]
        })
    ],



    resolve: {
      alias: {
          //配置路径别名
        '@': path.resolve(__dirname, './src')
      }
    }
})