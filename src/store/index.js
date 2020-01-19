import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  
}

export default new Vuex.Store({
  state,
  actions:{
    // changeCity(ctx,city){
    //   ctx.commit('changeCity',city)
    // }
  },
  getters:{
    doubleCity(state){
      return state.city+' '+state.city
    }
  },
  mutations,
})


