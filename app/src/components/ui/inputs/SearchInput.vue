<template lang="html">
  <label>
    <input v-bind="$attrs" v-on="inputListeners" type="text" :value="value"/>
    <icon-button class='label' icon='search' style="font-size:1.3em;"/>
  </label>
</template>

<script>
import IconButton from '@ui/buttons/IconButton'
export default {
  name: "SearchInput",
  components: {
    IconButton,
  },
  inheritAttrs: false,
  props: {
    value: String,
  },
  computed: {
    inputListeners () {
      const vm = this
      return Object.assign({},this.$listeners, {
        input: function (event) {
          vm.$emit('input', event.target.value)
        }
      })
    }
  }
}
</script>

<style scoped>
label {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 4px; */
}
>>>.label {
  display: block;
  flex: 0;
  padding: 8px 8px;
  white-space: nowrap;
}

>>>.label:hover,
>>>.label:focus {
  box-shadow: none;
  border-color: none;
  outline: none;
  background-color: transparent;
}

input {
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid white;
  padding: 4px;
  flex: 1;
}

input::placeholder {
  color: white;
  opacity: 1;
}
input:-ms-input-placeholder {
  color: white;
  opacity: 1;
}
input::-ms-input-placeholder {
  color: white;
  opacity: 1;
}

input:focus {
  outline: none;
  border-bottom-width: 2px;
}

</style>
