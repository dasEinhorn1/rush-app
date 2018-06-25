<template lang="html">
  <div>
    <filter-group v-for='group in filterGroups'
      :group='group'
      :key='group.name'/>
  </div>
</template>

<script>
import FilterGroup from './FilterGroup'
import { Filters } from '@/helpers/Filters'

export default {
  components: {
    FilterGroup
  },
  data () {
    return {
      filters: []
    }
  },
  computed: {
    filterGroups () {
      let f = Object.entries(Filters)
        .map(([name, filters]) => ({ name, filters }))
      console.log(f)
      return f
    }
  },
  methods: {
    relevantValues (name) {
      return this.values.filter((filter) => filter.group === name)
    },
    updateFilters (e) {
      this.$nextTick().then(_ => this.$emit('input', this.filters))
    },
    addFilter (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="css">
</style>
