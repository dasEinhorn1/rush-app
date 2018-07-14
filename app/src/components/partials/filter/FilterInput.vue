<template lang="html">
  <div>
    <label>
      <input
        type='checkbox'
        :name='name'
        :value='name'
        v-bind='$attrs'
        v-model='filters'/>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "FilterInput",
  inheritAttributes: false,
  props: ['name', 'group'],
  computed: {
    filters: {
      set (filters) {
        console.log(filters);
        console.log(this.name);
        this.$store.commit('SET_FILTER', { filters })
      },
      get () {
        return this.$store.state.filters
      }
    }
  }
}
</script>

<style lang="css">
</style>
