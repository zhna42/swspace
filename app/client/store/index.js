import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      mail: false,
      idUser: 0,
      admin: false
    },
    actions: {
      
    },
    mutations: {
      setUser(state, user){
        console.log(state)
        state.mail = user.mail;
        state.idUser = user.id;
        state.admin = user.admin;
      }
    }
  })
}
