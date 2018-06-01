<template lang="html">
  <div class="">
    <header>
      <h1>Rush App</h1>
    </header>
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
  header {
    background-color: #007A33;
    color: #FFFEF6;
  }
  .rushee-list{
    overflow: scroll;
    max-height: calc(100vh - 60px);
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
