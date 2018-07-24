<template lang="html">
  <div class="filter-preview-item" :style="{ 'background-color': bgColor }" v-show="!removing">
    <p class="filter-preview-item__name">
      {{ filter.name }}
    </p>
    <icon-button icon="times" class="remove-button" @click.once="removeFilter"/>
    <!-- <icon-button icon="times" class="remove-button" @click="removeFilter"/> -->
  </div>
</template>

<script>
import Filters from '@/helpers/Filters'
import IconButton from '@ui/buttons/IconButton'
export default {
  components: {
    IconButton
  },
  props: {
    filter: {
      type: Object,
      required: true,
      validator: (f) => {
        return (!!f.apply && !!f.id && !!f.name && !!f.group)
      }
    }
  },
  computed: {
    bgColor () {
      return Filters.colors[this.filter.group]
    }
  },
  data:() => ({
    removing: false
  }),
  methods: {
    removeFilter () {
      this.removing = true;
      this.$store.commit('REMOVE_FILTER', { id: this.filter.id })
    }
  }
}
</script>

<style scoped>
.filter-preview-item {
  display: flex;
  margin: 4px;
  border-radius: 4px;
  color: white;
  white-space: nowrap;
}
.filter-preview-item__name {
  padding: 4px 8px 4px 8px;
  margin: 0;
  font-weight: bold;
}
.remove-button {
  display: block;
  flex: 1;
  box-sizing: border-box;
  border-left: 1px solid white;
  height: 100%;
}
.remove-button:focus,
.remove-button:hover {
  outline: none;
  border-color: white;
}

</style>
