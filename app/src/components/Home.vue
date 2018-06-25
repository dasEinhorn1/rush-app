<template lang="html">
  <div class="">
    <list-search />
    <rushee-list
      :rushees='getRelevantRushees'/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RusheeList from '@/components/partials/RusheeList'
import ListSearch from '@/components/partials/ListSearch'

export default {
  computed: {
    ...mapGetters(['getRelevantRushees'])
  },
  components: {
    RusheeList,
    ListSearch
  }
}
</script>

<style scoped>
.rushee-list{
  max-height: calc(100vh - 40px);
}
</style>
