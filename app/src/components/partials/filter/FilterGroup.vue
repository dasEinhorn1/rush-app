<template lang="html">
  <div>
    <slot></slot>
  </div>
</template>

<script>
import FilterInput from './FilterInput'
export default {
  props: ['name'],
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
  },
  created () {
    const vm = this
    this.$children.filter(child => child.$options.name === "FilterInput")
      .forEach(child => child.group = vm.name)
  }
}
</script>

<style lang="css">
</style>
