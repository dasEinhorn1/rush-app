<template lang="html">
  <div>
    <label>
      <input
        type='checkbox'
        :name='name'
        :value='name'
        v-bind='$attrs'
        v-model='filters'/>
      <slot>{{ name | readable }}</slot>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Filters from '@/helpers/Filters'

export default {
  name: "FilterInput",
  inheritAttrs: false,
  props: ['name', 'checked'],
  computed: {
    filters: {
      set (filters) {
        this.$store.commit('SET_FILTER', { filters })
      },
      get () {
        return this.$store.state.filters
      }
    },
  },
  filters: {
    readable (value) {
      return value.replace(/[A-Z]/g, (m) => ' ' + m)
        .replace(/^[a-z]/, (m) => m.toUpperCase())
    }
  }
}
</script>

<style lang="css">
</style>
