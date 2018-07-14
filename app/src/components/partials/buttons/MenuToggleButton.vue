<template lang="html">
  <icon-button @click="toggleMenu" icon="bars" v-bind="$attrs" v-on="$listeners"/>
</template>

<script>
import IconButton from "./IconButton"

export default {
  inheritAttrs: false,
  components: {
    IconButton
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
button:hover {
  text-decoration: none;
}
</style>
