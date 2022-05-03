import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
        url_base:'http://127.0.0.1:8000/api/',
        count: 0,
        token:'',
        name: '',
        isAdmin: false,
        isAuth: false,
    }
  },
  actions: {
    
    increment() 
    {
      this.count++
    }

  },
})