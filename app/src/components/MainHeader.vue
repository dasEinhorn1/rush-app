<template lang="html">
  <div class='main-header'>
    <icon-button
      @click="$emit('open')"
      size="1.5em"
      icon="bars"
      style="text-align: left"/>
    <slot><h1>Header Default</h1></slot>
  </div>
</template>

<script>
import IconButton from '@ui/buttons/IconButton'
export default {
  components: {
    IconButton
  }
}
</script>

<style scoped>
.main-header {
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
.main-header h1 {
  margin: 0
}
</style>
