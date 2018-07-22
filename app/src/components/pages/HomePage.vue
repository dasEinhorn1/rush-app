<template lang="html">
  <base-page>
    <div slot="header">
      <main-header @open="menuIsOpen=true">
        <list-search class="search-bar" placeholder="Search rushees" style="flex: 1"/>
      </main-header>
      <filter-preview
        @close-filters="showFilters=false"
        @open-filters="showFilters=true"
        :menuOpen="showFilters"/>
    </div>
    <the-rushee-filters v-show="showFilters" @close="showFilters=false">
      <filter-group class="filter-groups" name="status">
        <template slot="header">Vote Status</template>
        <filter-input id="UP_FOR_VOTE"></filter-input>
        <filter-input id="HAS_BID"></filter-input>
        <filter-input id="ACCEPTED"></filter-input>
        <filter-input id="BLACKBALLED"></filter-input>
      </filter-group>
      <filter-group class="filter-groups" name="year">
        <template slot="header">Year</template>
        <filter-input id="FIRST_YEAR"></filter-input>
        <filter-input id="SECOND_YEAR"></filter-input>
        <filter-input id="THIRD_YEAR"></filter-input>
        <filter-input id="FOURTH_YEAR"></filter-input>
      </filter-group>
    </the-rushee-filters>
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
import TheRusheeFilters from './../filter/TheRusheeFilters'

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
    TheRusheeFilters,
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
