<template lang="html">
  <filter-menu v-bind="$attrs" v-on="$listeners">
    <filter-group class="filter-groups" name="status">
      <template slot="header">Vote Status</template>
      <filter-input id="UP_FOR_VOTE"></filter-input>
      <filter-input id="HAS_BID"></filter-input>
      <filter-input id="ACCEPTED"></filter-input>
      <filter-input id="BLACKBALLED"></filter-input>
    </filter-group>
    <filter-group class="filter-groups" name="year">
      <template slot="header">Year</template>
      <filter-input id="FIRST_YEAR">1st year</filter-input>
      <filter-input id="SECOND_YEAR">2nd year</filter-input>
      <filter-input id="THIRD_YEAR">3rd year</filter-input>
      <filter-input id="FOURTH_YEAR">4th year</filter-input>
    </filter-group>
  </filter-menu>
</template>

<script>
import FilterMenu from './../filter/FilterMenu'
import FilterInput from './../filter/FilterInput'
import FilterGroup from './../filter/FilterGroup'

export default {
  inheritAttrs: false,
  components: {
    FilterMenu,
    FilterGroup,
    FilterInput,
  }
}
</script>

<style lang="css">
</style>
