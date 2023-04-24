import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
import path from 'path'//配置路径别名


export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports:['vue','vue-router',
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