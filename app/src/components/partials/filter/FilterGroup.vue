<template lang="html">
  <div>
    <h3>{{ readable }}</h3>
    <filter-input
      v-for='filter in filters'
      :key='filter.name'
      :filter='filter'/>
  </div>
</template>

<script>
import FilterInput from './FilterInput'
export default {
  props: ['group', 'value'],
  components: {
    FilterInput
  },
  computed: {
    name () {
      return this.group.name
    },
    readable () {
      return (
        this.name
          .replace(/[A-Z]/g, (m) => ' ' + m)
          .replace(/^[a-z]/, (m) => m.toUpperCase())
      )
    },
    filters () {
      return Object.entries(this.group.filters).map(([name]) => ({ name, group: this.name }))
    }
  },
  methods: {
    filterValue (filterName) {
      return this.value.find(f => f.name === this.filterName)
    }
  }
}
</script>

<style lang="css">
</style>
