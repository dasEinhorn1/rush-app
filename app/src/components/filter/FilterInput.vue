<template lang="html">
  <label style="display:block">
    <input
      type='checkbox'
      :name='id'
      :value='id'
      v-bind='$attrs'
      v-model='filters'>
    {{ filter.name }} ({{ affectedNumber }})
  </label>
</template>

<script>
import Filters from '@/helpers/Filters'

export default {
  name: "FilterInput",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
      validator: (id) => {
        return Filters.available[id] !== undefined
      }
    }
  },
  computed: {
    filter () {
      return Filters.available[this.id]
    },
    affectedNumber () {
      const vm = this
      const otherGroupsSelectedFilters = this.filters
        .map(id => Filters.available[id]) // gets all filters to apply (the actual objects)
        .filter(f => f !== undefined && f.group != vm.filter.group) // remove any invalid filters
      const groupedFilters = [...otherGroupsSelectedFilters, this.filter]
        .reduce(Filters.toGrouped, {})
      return Object.values(this.$store.state.rushees)
        .filter(Filters.applyAll(groupedFilters)).length
    },
    filters: {
      set (filters) {
        this.$store.commit('SET_FILTERS', { filters })
      },
      get () {
        return this.$store.state.filters
      }
    },
  }
}
</script>

<style lang="css">
</style>
