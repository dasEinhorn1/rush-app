<template lang="html">
  <div class="filter-group">
    <h4 class="header"><slot name="header"></slot></h4>
    <div class='filters' :style="{'border-color': groupColor }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import FilterInput from './FilterInput'
import Filters from '@/helpers/Filters'
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
  computed: {
    groupColor () {
      return Filters.colors[this.name]
    }
  },
  methods: {
    filterValue (filterName) {
      return this.value.find(f => f.name === this.filterName)
    },
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
  margin: 8px 0;
}
.filters {
  border-left: 4px solid black;
  padding-left: 8px;
  margin-left: 8px;
  box-sizing: border-box;
}
</style>
