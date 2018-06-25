import Vue from 'vue'
import Vuex from 'vuex'
import RushApi from './helpers/RushApiMock'

import { Filters } from './helpers/Filters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    rushees: [],
    search: {
      query: '',
      filters: [],
      isCaseSensitive: false
    },
    sideMenuIsOpen: false
  },
  getters: {
    getRelevantRushees: state => {
      if (state.search.query === '' && state.search.filters.length === 0) {
        return state.rushees
      }
      let applyCaseSensitivity = (text) => (state.isCaseSensitive) ? text : text.toUpperCase()
      let getFullName = (rushee) => rushee.firstName + ' ' + rushee.lastName
      let addFullName = (rushee) => ({...rushee, fullName: getFullName(rushee)})
      // apply the query if there is one
      let queriedRushees = (state.search.query === '')
        ? state.rushees : state.rushees.map(addFullName).filter(rushee => (
          applyCaseSensitivity(rushee.fullName)
            .includes(applyCaseSensitivity(state.search.query))))
      // apply all Filters
      let filterFunctions = state.search.filters.map((f) => Filters[f.group][f.name])
      // console.log(TESTING)
      let filteredQueriedRushees = filterFunctions.reduce((properRushees, func) => {
        // get the unique rushees which match the current filter
        let rusheesFromCurrentFilter = queriedRushees
          .filter((r) => properRushees.indexOf(r) < 0) // unique
          .filter(func) // match current filter
        return properRushees.concat(rusheesFromCurrentFilter) // concat with others
      }, [])
      return filteredQueriedRushees
    }
  },
  mutations: {
    updateRusheeVote (state, payload) {
      state.rushees
        .find(rushee => rushee.id === payload.id).votes = payload.votes
    },
    updateRushees (state, payload) {
      console.log('LOADING')
      state.rushees = payload
    },
    toggleSideMenu (state) {
      state.sideMenuIsOpen = !state.sideMenuIsOpen
    },
    setSearchQuery (state, payload) {
      state.search.query = payload.query
    },
    setFilters (state, payload) {
      state.search.filters = payload.filters
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
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    }
  }
})
