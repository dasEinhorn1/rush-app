<template lang="html">
  <div class="rushee-list">
    <rushee-list-item
    v-for='rushee in rushees'
    :rushee='rushee'
    :key='rushee.id'/>
    <!-- <p v-show="rushees.length === 0">No More Rushees</p> -->
    <div class="end-of-list" style="">
      <p v-if="rushees.length > 0">End of results.</p>
      <p v-if="rushees.length === 0">No results.</p>
    </div>
  </div>
</template>

<script>
import RusheeListItem from './RusheeListItem'

export default {
  props: ['rushees'],
  components: {
    RusheeListItem
  }
}
</script>

<style scoped>
.rushee-list {
  /* overflow-y: auto; */
  position: relative;
}
.end-of-list {
  text-align: center;
  padding: 8px;
  font-style: italic;
}
.end-of-list p {
  margin: 0;
}
</style>
