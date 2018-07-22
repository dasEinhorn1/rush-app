<template lang="html">
  <div class="side-menu-wrap" @click='$emit("close")'>
    <nav class='side-menu' @click.stop=''>
      <!-- <div class="">
        <icon-button class="close-button" icon='chevron-left' @click='$emit("close")'/>
      </li> -->
      <li @click='$emit("close")'>
        <router-link to="/" tag="a">Rushees</router-link>
      </li>
      <li @click='$emit("close")'>
        <router-link to="/login" tag="a">Login</router-link>
      </li>
    </nav>
  </div>
</template>

<script>
import IconButton from '@ui/buttons/IconButton'

export default {
  components: {
    IconButton
  }
}
</script>

<style lang="css">
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
  .close-button {
    position: absolute;
  }
</style>
