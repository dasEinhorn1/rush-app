<template lang="html">
  <div class='profile-wrap'>
    <img class='profile' :src='rushee.pic' alt="profile picture"/>
    <div class='icon-wrap' v-if='rushee.status !== "_"'>
      <i :class='staticIconClass'></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rushee'],
  computed: {
    statusIconClass: function () {
      const status = this.rushee.status
      return {
        fas: true,
        'fa-check': status === 'A',
        'fa-circle': status === 'B',
        'fa-exclamation': status === 'E',
        'fa-angle-double-right': status === 'F',
        'fa-ban': status === 'Z'
      }
    }
  }
}
</script>

<style lang="css">
  img.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .profile-wrap {
    position: relative;
  }
  .icon-wrap {
    position: absolute;
    z-index: 1;
    width: 10%;
    height:10%;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }
</style>
