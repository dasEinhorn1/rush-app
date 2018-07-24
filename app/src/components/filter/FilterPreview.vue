<template lang="html">
  <div class="filter-preview">
    <icon-button
      :icon="(menuOpen) ? 'times' : 'filter'"
      @click="(menuOpen) ? $emit('close-filters') : $emit('open-filters')"/>
    <div class="filter-preview__filters">
      <span
        v-show="filters.length === 0"
        class="filter-preview__filters__no-filter"><i>No Filters Applied</i></span>
      <filter-preview-item
        class="filter-preview__filters__filter"
        v-for="filter in filters"
        :key="filter.id"
        :filter='filter'/>
    </div>
  </div>
</template>

<script>
import IconButton from '@ui/buttons/IconButton'
import Filters from '@/helpers/Filters'
import FilterPreviewItem from './FilterPreviewItem'
export default {
  components: {
    IconButton,
    FilterPreviewItem
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
  margin-right: 8px;
}

.filter-preview__filters__no-filter {
  white-space: nowrap;
  margin: 4px;
  padding: 4px;
}
</style>
