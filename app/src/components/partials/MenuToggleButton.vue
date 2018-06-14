<template lang="html">
  <button @click="toggleMenu">
    <font-awesome-icon :icon='icon' transform="grow-7"/>
  </button>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: ['icon'],
  components: {
    FontAwesomeIcon
  },
  methods: {
    toggleMenu: function () {
      this.$store.dispatch('toggleSideMenu')
    }
  }
}
</script>

<style scoped>
button {
  flex: 0 0 40px;
  height: 100%;
  color: inherit;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
}
</style>
