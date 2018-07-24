<template lang="html">
  <div class='back-header'>
    <icon-button
      @click="back"
      size="1.5em"
      icon="arrow-left"
      style="text-align: left"/>
    <slot><h1>Header Default</h1></slot>
  </div>
</template>

<script>
import IconButton from '@ui/buttons/IconButton'
export default {
  components: {
    IconButton
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.back-header {
  background-color: #007A33;
  color: #FFFEF6;
  box-shadow: 0px 0px 4px 0px black;
  z-index: 3;
  position: relative;
  height: 50px;
  box-sizing: border-box;
  font-size: .8em;
  display: flex;
  padding: 8px;
  align-items: center;
}
.back-header>>> h1 {
  margin: 0
}
</style>
