import { defineStore } from 'pinia'
import Picture from '../Layout/Picture.vue'
export const useComStore = defineStore('com', {
  state: () => {
    return { 
        com:Picture
     }
  },
});