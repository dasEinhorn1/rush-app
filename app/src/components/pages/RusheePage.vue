<template lang="html">
  <div class="">
    {{ rushee.firstName }}
  </div>
</template>

<script>
export default {
  computed: {
    rusheeId () {
      return this.$route.params.id
    },
    rushee () {
      return this.$store.getters.getRushee(this.rusheeId)
    }
  }
}
</script>

<style lang="css">
</style>
