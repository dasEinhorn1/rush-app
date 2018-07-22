<template lang="html">
  <div class="filter-group">
    <h4 class="header"><slot name="header">{{ name | readable }}</slot></h4>
    <div class='filters'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import FilterInput from './FilterInput'
export default {
  components: {
    FilterInput
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  filters: {
    readable (value) {
      return value.replace(/[A-Z]/g, (m) => ' ' + m)
        .replace(/^[a-z]/, (m) => m.toUpperCase())
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
.header {
  margin-bottom: 8px;
}
.filters {
  padding-left: 8px;
}
</style>
