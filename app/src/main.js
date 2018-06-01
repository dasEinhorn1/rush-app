// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import RushApi from './helpers/RushApiMock'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rushees: []
  },
  mutations: {
    updateRusheeVote (state, payload) {
      state.rushees
        .find(rushee => rushee.id === payload.id).votes = payload.votes
    },
    updateRushees (state, payload) {
      console.log('LOADING')
      state.rushees = payload
    }
  },
  actions: {
    loadRushees ({ commit }, payload = {}) {
      RushApi.getRushees(payload.queryParams)
        .then((response) => {
          commit('updateRushees', response)
        })
    },
    vote ({ commit }, payload) {
      RushApi.vote(payload.id, payload.vote)
        .then((response) => {
          commit('updateRusheeVote', {id: payload.id, votes: response})
        })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    this.$store.dispatch('loadRushees')
  }
})
