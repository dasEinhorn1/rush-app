import Vue from 'vue'
import Vuex from 'vuex'
import RushApi from '@/helpers/RushApi'

import Filters from '@/helpers/Filters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    rushees: {},
    rusheeIds: [],
    filters: Filters.default,
    search: {
      query: '',
      isCaseSensitive: false
    },
  },
  getters: {
    getRushee (state) {
      return id => state.rushees[id]
    },
    queriedRushees (state) {
      const rusheeList = state.rusheeIds.map(id => state.rushees[id])
      if (state.search.query === '') return rusheeList
      let applyCaseSensitivity = (text) => (state.isCaseSensitive) ? text : text.toUpperCase()
      let getFullName = (rushee) => rushee.firstName + ' ' + rushee.lastName
      let addFullName = (rushee) => ({...rushee, fullName: getFullName(rushee)})
      // apply the query if there is one
      let queriedRushees = (state.search.query === '')
        ? rusheeList : rusheeList.map(addFullName).filter(rushee => (
          applyCaseSensitivity(rushee.fullName)
            .includes(applyCaseSensitivity(state.search.query))))
      return queriedRushees
    },
    filteredRushees: (state, getters) => {
      if (state.filters.length === 0) {
        return getters.queriedRushees
      }
      const groupedFilters = state.filters
        .map(id => Filters.available[id]) // gets all filters to apply (the actual objects)
        .filter(f => f !== undefined) // remove any invalid filters
        .reduce(Filters.toGrouped, {}) // reduce the filter list to { groupName: [...filters] }
      // curried function to apply all filters
      return getters.queriedRushees.filter(Filters.applyAll(groupedFilters))
    },

    getRelevantRushees: (state, getters) => {
      return getters.filteredRushees
    }
  },
  mutations: {
    // TODO: change over to types.MUTATION_NAME
    updateRusheeVote (state, payload) {
      state.rusheeIds.map(id => state.rushees[id])
        .find(rushee => rushee.id === payload.id).votes = payload.votes
    },
    // TODO: change over to types.MUTATION_NAME
    addRushees (state, payload) {
      payload.forEach(rushee => {
        Vue.set(state.rushees, rushee.id, rushee)
        state.rusheeIds.push(rushee.id)
      })
    },
    // TODO: change over to types.MUTATION_NAME
    setSearchQuery (state, payload) {
      state.search.query = payload.query
    },
    // TODO: change over to types.MUTATION_NAME
    ["SET_FILTERS"] (state, payload) {
      state.filters = payload.filters
    },
    ["REMOVE_FILTER"] (state, payload) {
      const { id } = payload
      state.filters = state.filters.filter(f => f.id !== id)
    },
  },
  actions: {
    loadRushees ({ commit }, payload = {}) {
      RushApi.getRushees(payload.queryParams)
        .then((response) => {
          commit('addRushees', response)
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
