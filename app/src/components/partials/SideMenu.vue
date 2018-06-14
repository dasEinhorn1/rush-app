<template lang="html">
  <div :class='classObj' @click='close'>
    <nav class='side-menu' @click.stop=''>
      <li>
        <menu-toggle-button icon='chevron-left'/>
      </li>
      <li @click='close'>
        <router-link to="/" tag="a">Rushees</router-link>
      </li>
      <li @click='close'>
        <router-link to="/login" tag="a">Login</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
import MenuToggleButton from '@/components/partials/MenuToggleButton'

export default {
  components: {
    MenuToggleButton
  },
  computed: {
    classObj () {
      return {
        'side-menu-wrap': true,
        'is-open': this.$store.state.sideMenuIsOpen
      }
    }
  },
  methods: {
    close () {
      this.$store.dispatch('toggleSideMenu')
    }
  }
}
</script>

<style lang="css">
  div.side-menu-wrap:not(.is-open) {
    background-color: transparent;
    width: 0;
  }
  div.side-menu-wrap:not(.is-open) nav.side-menu {
    width: 0;
  }
  div.side-menu-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    overflow: hidden;
    background-color: rgba(0,0,0,0.15);
    z-index: 5;
  }
  nav.side-menu {
    display: flex;
    flex-flow: column;
    width: 65%;
    height: 100%;
    overflow: hidden;
    background-color: white;
    transition: .2s width;
    position: relative;
    color: black;
    box-shadow: 0px 0px 25px 0px black;
  }
  nav li {
    text-decoration: none;
    list-style: none;
  }
</style>
