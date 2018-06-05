<template lang="html">
  <div class='profile-wrap'>
    <img class='profile' :src='rushee.pic' :alt='altText'/>
    <div class='icon-wrap'>
      <status-icon
        :status='rushee.votes.status'/>
    </div>
  </div>
</template>

<script>
import StatusIcon from '@/components/partials/StatusIcon'
export default {
  props: ['rushee'],
  computed: {
    altText () {
      return this.rushee.firstName + ' ' + this.rushee.lastName + ' profile pic'
    }
  },
  components: {
    'status-icon': StatusIcon
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
    overflow:hidden;
    font-size:.8em;
  }
  .icon-wrap {
    position: absolute;
    z-index: 1;
    width: 25%;
    height: 25%;
    top: 100%;
    left: 100%;
    transform: translate(-100%, -100%);
  }
</style>
