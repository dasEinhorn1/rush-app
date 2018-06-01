<template lang="html">
  <div class="rushee-list">
    <rushee-list-item
    v-for='rushee in rushees'
    :rushee='rushee'
    :key='rushee.id'/>
  </div>
</template>

<script>
import RusheeListItem from '@/components/partials/RusheeListItem'

export default {
  props: ['rushees'],
  components: {
    'rushee-list-item': RusheeListItem
  }
}
</script>

<style scoped>
  .rushee-list .list-item:not(:last-child) {
    border-bottom: 1px solid grey;
  }
</style>
