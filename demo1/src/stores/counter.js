// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
        count: 0,
        name:'张三'
     }
  },

  getters: {
    changeNum(){
        return this.count=1111
    }
  },
  actions: {},
  //持久化存储
  persist:{
    enabled:true,
    strategies:[
      {
        key: 'my_user',
        storage: localStorage,
        paths:['name','age']
      }
    ]
  }
})