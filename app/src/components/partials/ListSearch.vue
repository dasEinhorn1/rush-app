<template lang="html">
  <form class='list-search'>
    <input v-model="query" placeholder='Search'/>

    <filter-input v-for="f in filters"
      :key="f.name"
      :name="f.name"
      :group="f.group">{{f.name}}</filter-input>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import Filters from '@/helpers/Filters'
import FilterInput from './filter/FilterInput'

export default {
  components: {
    FilterInput
  },
  computed: {
    ...mapState(['search']),
    filters () {
      return Filters.available()
    },
    query: {
      set (query) {
        this.$store.commit('setSearchQuery', { query })
      },
      get () {
        return this.search.query
      }
    }
  }
}
</script>

<style lang="css">
</style>
