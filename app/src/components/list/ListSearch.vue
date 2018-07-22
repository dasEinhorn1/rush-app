<template lang="html">
  <form class='list-search' @submit.prevent="">
    <div class="search-bar">
      <search-input v-model="quickQuery" placeholder='Rushee name'></search-input>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import SearchInput from '@ui/inputs/SearchInput'
const debounce = require('lodash.debounce')

export default {
  components: {
    SearchInput
  },
  data: () => ({
    quickQuery: "",
    isDirty: false,
  }),
  methods: {
    search () {
      this.query = this.quickQuery
      this.isDirty = false
    }
  },
  watch: {
    quickQuery () {
      this.isDirty = true
      this.debouncedQuery()
    }
  },
  computed: {
    query: {
      set (query) {
        this.$store.commit('setSearchQuery', { query })
      },
      get () {
        return this.$store.state.search.query
      }
    }
  },
  created() {
    return this.debouncedQuery = debounce(this.search, 300)
  }
}
</script>

<style scoped>

</style>
