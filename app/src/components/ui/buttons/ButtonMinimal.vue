<template lang="html">
  <button v-bind="$attrs" v-on="$listeners" type="button"><slot></slot></button>
</template>

<script>
export default {
  inheritAttrs:false
}
</script>

<style lang="css">
button {
  color: inherit;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
}
button:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
