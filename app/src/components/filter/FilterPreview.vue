<template lang="html">
  <div class="filter-preview">
    <icon-button
      :icon="(menuOpen) ? 'times' : 'filter'"
      @click="(menuOpen) ? $emit('close-filters') : $emit('open-filters')"/>
    <div class="filter-preview__filters">
      <span
        v-show="filters.length === 0"
        class="filter-preview__filters__no-filter"><i>No Filters Applied</i></span>
      <span
        class="filter-preview__filters__filter"
        v-for="filter in filters"
        :key="filter.id">{{ filter.name }}</span>
    </div>
  </div>
</template>

<script>
import IconButton from '@ui/buttons/IconButton'
import Filters from '@/helpers/Filters'

export default {
  components: {
    IconButton
  },
  props: {
    menuOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    filters () {
      return this.$store.state.filters.map(id => Filters.available[id])
    },
  }
}
</script>

<style scoped>
.filter-preview {
  display: flex;
  height: 40px;
  align-items: center;
}
.filter-preview__filters {
  display: flex;
  overflow-x: auto;
  padding: -4px;
}
.filter-preview__filters__filter,
.filter-preview__filters__no-filter {
  display: block;
  margin: 4px;
  padding: 4px;
}
</style>
