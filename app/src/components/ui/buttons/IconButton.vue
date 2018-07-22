<template lang="html">
  <button-minimal v-bind="$attrs" v-on="$listeners">
    <font-awesome-icon :icon='icon' :style="styles"/>
  </button-minimal>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import ButtonMinimal from "./ButtonMinimal"

export default {
  name: "IconButton",
  inheritAttrs: false,
  components: {
    FontAwesomeIcon,
    ButtonMinimal
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "inherit"
    }
  },
  computed: {
    styles () {
      return { "font-size": this.size }
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
  box-sizing: border-box;
  /* transition: border-color .5s; */
}
button:hover {
  border-color: #6f6f6f;
  text-decoration: none;
}
</style>
