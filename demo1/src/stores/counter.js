// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
        count: 0,
        name:'张三'
     }
  },

  getters: {},
  actions: {}
})