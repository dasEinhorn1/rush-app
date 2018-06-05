<template lang="html">
  <div class="">
    <rushee-list
      :rushees='rushees'/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RusheeList from '@/components/partials/RusheeList'

export default {
  computed: {
    ...mapState(['rushees'])
  },
  components: {
    'rushee-list': RusheeList
  }
}
</script>

<style scoped>
  .rushee-list{
    overflow-y: scroll;
    max-height: calc(100vh - 60px);
    position: relative;
  }
</style>
