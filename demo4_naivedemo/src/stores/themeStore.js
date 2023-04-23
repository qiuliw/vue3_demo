import { defineStore } from 'pinia'
import { darkTheme } from "naive-ui";
export const useThemeStore = defineStore('theme', {
  state: () => {
    return { 
        darkTheme,
        theme: ref(null)
     }
  },
})

