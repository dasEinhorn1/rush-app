import Vue from 'vue'
import Vuex from 'vuex'
import RushApi from './helpers/RushApiMock'

import Filters from './helpers/Filters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    rushees: [],
    filters: [...Filters.default()],
    search: {
      query: '',
      isCaseSensitive: false
    },
    sideMenuIsOpen: false
  },
  getters: {
    queriedRushees (state) {
      if (state.search.query === '') return state.rushees
      let applyCaseSensitivity = (text) => (state.isCaseSensitive) ? text : text.toUpperCase()
      let getFullName = (rushee) => rushee.firstName + ' ' + rushee.lastName
      let addFullName = (rushee) => ({...rushee, fullName: getFullName(rushee)})
      // apply the query if there is one
      let queriedRushees = (state.search.query === '')
        ? state.rushees : state.rushees.map(addFullName).filter(rushee => (
          applyCaseSensitivity(rushee.fullName)
            .includes(applyCaseSensitivity(state.search.query))))
      return queriedRushees
    },
    filteredRushees: (state, getters) => {
      const availableFilters = Filters.available()
      if (state.filters.length === 0) {
        return getters.queriedRushees
      }
      const groupedFilters = state.filters
        .map(name => availableFilters[name]) // gets all filters to apply (the actual objects)
        .filter(f => f !== undefined)
        .reduce((groups, f) => {       // reduces the filters into groups {groupName: [...filtersInGroup], ...}
          if (!groups[f.group]) groups[f.group] = []
          groups[f.group].push(f)
          return groups
        }, {})
      return getters.queriedRushees.filter(rushee => {  // check each item individually
        return Object.values(groupedFilters).reduce((ands, group) => {
          return ands && group.reduce((ors, filter) => {
            return ors || filter.apply(rushee)
          }, false)
        }, true)
      })
    },

    getRelevantRushees: (state, getters) => {
      return getters.filteredRushees
    }
  },
  mutations: {
    // TODO: change over to types.MUTATION_NAME
    updateRusheeVote (state, payload) {
      state.rushees
        .find(rushee => rushee.id === payload.id).votes = payload.votes
    },
    // TODO: change over to types.MUTATION_NAME
    updateRushees (state, payload) {
      console.log('LOADING')
      state.rushees = payload
    },
    // TODO: change over to types.MUTATION_NAME
    toggleSideMenu (state) {
      state.sideMenuIsOpen = !state.sideMenuIsOpen
    },
    // TODO: change over to types.MUTATION_NAME
    setSearchQuery (state, payload) {
      state.search.query = payload.query
    },
    // TODO: change over to types.MUTATION_NAME
    ["SET_FILTER"] (state, payload) {
      state.filters = payload.filters
    },
    ["REGISTER_FILTER"] (state, filter) {
      if (!_availableFilters[filter.name]) {
        _availableFilterNames.push(filter.name)
      }
      _availableFilters[name] = filter
    },
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
