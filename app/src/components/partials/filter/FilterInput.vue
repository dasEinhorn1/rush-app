<template lang="html">
  <div>
    <input
      type='checkbox'
      :id='dashed'
      :value='filter'
      v-model='filters'/>
    <label :for='dashed'>{{readable}}</label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['filter'],
  computed: {
    ...mapState(['search']),
    name () {
      return this.filter.name
    },
    readable () {
      return this.name.replace(/[A-Z]/g, (m) => ' ' + m.toLowerCase())
    },
    dashed () {
      return this.name.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
    },
    filters: {
      set (filters) {
        this.$store.commit('setFilters', { filters })
      },
      get () {
        return this.search.filters
      }
    }
  },
  methods: {
    updateFilters () {
      console.log(this.value)
    }
  }
}
</script>

<style lang="css">
</style>
