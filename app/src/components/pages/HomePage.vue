<template lang="html">
  <base-page>
    <div slot="header">
      <main-header @open="menuIsOpen=true">
        <list-search class="search-bar" style="flex: 1"/>
      </main-header>
      <filter-preview
        @close-filters="showFilters=false"
        @open-filters="showFilters=true"
        :menuOpen="showFilters"/>
    </div>
    <filter-menu v-show="showFilters" @close="showFilters=false">
      <filter-group class="filter-groups" name="status">
        <template slot="header">Vote Status</template>
        <filter-input name="upForVote">Up for vote</filter-input>
        <filter-input name="hasBid">Closing</filter-input>
        <filter-input name="accepted">Pledges</filter-input>
      </filter-group>
      <filter-group class="filter-groups" name="status">
        <template slot="header">Year</template>
        <filter-input name="firstYear">1st year</filter-input>
        <filter-input name="secondYear">2nd year</filter-input>
        <filter-input name="thirdYear">3rd year</filter-input>
        <filter-input name="fourthYear">4th year</filter-input>
      </filter-group>
    </filter-menu>
    <side-menu slot="aside" @close="menuIsOpen=false" v-show='menuIsOpen'/>
    <rushee-list
      :rushees='getRelevantRushees'/>
  </base-page>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import MainHeader from '@/components/MainHeader'
import BasePage from './BasePage'
import { mapGetters } from 'vuex'
import RusheeList from '@/components/list/RusheeList'
import ListSearch from '@/components/list/ListSearch'
import FilterPreview from './../filter/FilterPreview'
import FilterMenu from './../filter/FilterMenu'
import FilterInput from './../filter/FilterInput'
import FilterGroup from './../filter/FilterGroup'

export default {
  computed: {
    ...mapGetters(['getRelevantRushees']),
  },
  components: {
    RusheeList,
    ListSearch,
    MainHeader,
    SideMenu,
    BasePage,
    FilterMenu,
    FilterGroup,
    FilterInput,
    FilterPreview
  },
  data () {
    return {
      showFilters: false,
      menuIsOpen: false
    }
  }
}
</script>

<style scoped>
.rushee-list {
  /* max-height: calc(100vh - 90px); */
}
.search-bar >>> input {
  font-size: 1.5em;
}
</style>
