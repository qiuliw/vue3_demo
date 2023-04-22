import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/

import path from 'path'//配置路径别名
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports:['vue','vue-router']
        })
    ],
    resolve: {
      alias: {
          //配置路径别名
        '@': path.resolve(__dirname, './src')
      }
    }
})