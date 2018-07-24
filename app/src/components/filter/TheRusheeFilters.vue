<template lang="html">
  <div class="rushee-filter-wrap">
    <filter-menu class="rushee-filter-menu" v-bind="$attrs" v-on="$listeners">
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
    <div class="rushee-filter-menu-bg" @click="$emit('close')"></div>
  </div>
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

<style scoped>
.rushee-filter-wrap {
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
}

.rushee-filter-menu-bg {
  background-color: rgba(0,0,0,.3);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
}

.rushee-filter-menu {
  background-color: white;
  box-sizing: border-box;
  z-index: 2;
  padding-left: 40px;
  padding-right: 40px;
  box-shadow: 0px 0px 8px 0px black;
}
</style>
