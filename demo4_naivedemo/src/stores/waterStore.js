import { defineStore } from 'pinia'

export const useWaterStore = defineStore('water', {
    state: () => {
      return { 
          show: ref(false)
       }
    },
  })