<template lang="html">
  <div class="filter-menu">
    <!-- <icon-button class="close-btn" icon="times" @click="$emit('close')"/> -->
    <slot></slot>
  </div>
</template>

<script>
import IconButton from "@ui/buttons/IconButton"
export default {
  name: "FilterMenu",
  components: {
    IconButton
  }
}
</script>

<style scoped>
.filter-menu {
  display: flex;
  position: relative;
  padding-bottom: 8px;
}
/* .close-btn {
  display: block;
  position: absolute;
  height: 40px;
  width: 40px;
  font-size: 1.5em;
  top: 0;
  left: 100%;
  transform: translateX(-100%);
} */
.filter-menu >>> .filter-group {
  flex: 0 1 150px;
}
</style>
