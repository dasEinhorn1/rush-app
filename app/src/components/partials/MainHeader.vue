<template lang="html">
  <header class='main-header'>
    <menu-toggle-button icon='bars'/>
    <h1>Rush App</h1>
  </header>
</template>

<script>
import MenuToggleButton from '@/components/partials/MenuToggleButton'
export default {
  components: {
    MenuToggleButton
  }
}
</script>

<style scoped>
header {
  background-color: #007A33;
  color: #FFFEF6;
  box-shadow: 0px 0px 4px 0px black;
  z-index: 3;
  position: relative;
  height: 40px;
  box-sizing: border-box;
  font-size: .8em;
  display: flex;
  align-items: center;
}
header h1 {
  margin: 0;
}
</style>
