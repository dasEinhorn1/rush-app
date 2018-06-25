<template lang="html">
  <form class='list-search'>
    <input v-model="query" placeholder='Search'/>
    <filter-form/>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import FilterForm from './filter/FilterForm'

export default {
  components: {
    FilterForm
  },
  computed: {
    ...mapState(['search']),
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
