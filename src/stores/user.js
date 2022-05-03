import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
        url_base:'http://127.0.0.1:8000/api/',
        count: 0,
        token:'',
        user_name: '',
        name: '',
        isAdmin: false,
        isAuth: false,
    }
  },
  mutations: {
    doLogin(state, user_name) {
      state.isAuth = true;
      state.user_name = user_name;
    },
    doLogout(state) {
      state.isAuth = false;
      state.user_name = null;
    }
  },
  actions: {
    doLogin({ commit }, user_name) {
      commit("doLogin", user_name);
    },
    doLogout({ commit }) {
      commit("doLogout");
    }
  },
})