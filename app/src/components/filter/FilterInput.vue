<template lang="html">
  <label>
    <input
      type='checkbox'
      :name='id'
      :value='id'
      v-bind='$attrs'
      v-model='filters'>
    <div class="checkmark"><font-awesome-icon class='check' icon="check"/></div>
    <span class="label-text">
      {{ filter.name }}
      ({{ affectedNumber }})
    </span>
  </label>
</template>

<script>
import Filters from '@/helpers/Filters'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: "FilterInput",
  inheritAttrs: false,
  components: {
    FontAwesomeIcon
  },
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

<style scoped>
label {
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 4px;
}
.label-text {
  display: block;
  flex: 1
}
input {
  position: absolute;
  opacity: 0;
}
.checkmark {
  background-color: #eee;
  height: 25px;
  flex: 0 0 25px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
}

.checkmark .check {
  display: none;
  flex: 1;
  color: white;
}

label:hover input ~ .checkmark {
  background-color: #ccc;
}

label input:checked ~ .checkmark .check {
  display: block;
}

label input:checked ~ .checkmark {
  background-color: #2196F3;
}
</style>
