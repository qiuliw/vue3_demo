export const useUserStore = defineStore({
    id: 'user',
  
    state: () => {
      return {
        name: '张三'
      }
    },
    
    
    persist: {
      enabled: true
    }
  })