<template lang="html">
  <form class='list-search' @submit.prevent="">
    <div class="search-bar">
      <label for="rushee-search">Search:</label>
      <input id="rushee-search" v-model="query" placeholder='Rushee name'/>
    </div>
    <div>
      Filters: <span v-for="(filter,n) in filters" :key="n">{{filter}}</span>
      <icon-button
        icon="filter"
        size="1em"
        v-show="!showingFilters"
        @click="openFilters()"/>
      <icon-button
        icon="chevron-up"
        size="1em"
        v-show="showingFilters"
        @click="closeFilters()"/>
    </div>
    <div class="filter-menu" v-show="showingFilters">
      <filter-group class="filter-groups__filter-group" name="status">
        <template slot="header">Vote Status</template>
        <filter-input name="upForVote">Up for vote</filter-input>
        <filter-input name="hasBid">Closing</filter-input>
        <filter-input name="accepted">Pledges</filter-input>
      </filter-group>
      <filter-group class="filter-groups__filter-group" name="status">
        <template slot="header">Year</template>
        <filter-input name="firstYear">1st year</filter-input>
        <filter-input name="secondYear">2nd year</filter-input>
        <filter-input name="thirdYear">3rd year</filter-input>
        <filter-input name="fourthYear">4th year</filter-input>
      </filter-group>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import IconButton from '@/components/partials/buttons/IconButton'
import ButtonMinimal from '@/components/partials/buttons/ButtonMinimal'
import Filters from '@/helpers/Filters'
import FilterInput from './filter/FilterInput'
import FilterGroup from './filter/FilterGroup'

export default {
  components: {
    FilterInput,
    FilterGroup,
    IconButton,
    ButtonMinimal
  },
  data: () => ({
    showingFilters: false
  }),
  computed: {
    ...mapState(['search', 'filters']),
    groups () {
      return Filters.grouped() || {}
    },
    appliedFilters () {
      return this.$store
    },
    query: {
      set (query) {
        this.$store.commit('setSearchQuery', { query })
      },
      get () {
        return this.search.query
      }
    }
  },
  methods: {
    openFilters () {
      this.showingFilters = true
    },
    closeFilters() {
      this.showingFilters = false
    }
  },
  created() {
    return this.$listeners
  }
}
</script>

<style scoped>
  .filter-menu {
    display: flex;

  }
  .filter-groups__filter-group {
    flex: 0 1 150px;
  }
</style>
