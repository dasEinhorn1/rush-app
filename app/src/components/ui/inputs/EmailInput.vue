<template lang="html">
  <base-input
    class="email-input"
    type="email"
    v-on="inputListeners"
    :value="value"
    v-bind="$attrs"><slot></slot></base-input>
</template>

<script>
import BaseInput from './BaseInput'

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


export default {
  name: "EmailInput",
  inheritAttrs: false,
  components: {
    BaseInput
  },
  props: ['value'],
  computed: {
    inputListeners () {
      const vm = this
      return Object.assign({},this.$listeners, {input: function (val) {
        vm.$emit('input', val)
      }})
    },
    isValid () {
      return emailRegex.test(this.value)
    }
  }
}
</script>

<style scoped>
</style>
