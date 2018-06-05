<template>
  <div id="app">
    <main-header/>
    <side-menu :open='open'/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import SideMenu from '@/components/partials/SideMenu'
import MainHeader from '@/components/partials/MainHeader'

export default {
  name: 'App',
  components: {
    'main-header': MainHeader,
    'side-menu': SideMenu
  },
  computed: {
    open () {
      return this.$store.sideMenuIsOpen
    }
  },
  methods: {
    toggleSideMenu () {
      this.open = !this.open
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

main {
  max-width: 600px;
  width: calc(100% - 80px);
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;
}

header {
  overflow: hidden;
  max-height: 60px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
