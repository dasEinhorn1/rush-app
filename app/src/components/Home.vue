<template lang="html">
  <div class="">
    <list-search />
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
  max-height: calc(100vh - 40px);
}
</style>
