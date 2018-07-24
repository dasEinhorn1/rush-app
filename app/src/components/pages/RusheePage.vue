<template lang="html">
  <base-page style="padding-top:50px">
    <back-header slot="header"><h1>{{ rushee.firstName }}'s profile</h1>
    </back-header>
    <div class="row">
      <img class="profile" :src="rushee.pic"/>
      <div class="profile-main-content">
        <h2>{{ rushee.firstName }} {{ rushee.lastName }}</h2>
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from './BasePage'
import RusheeProfilePic from '@/components/RusheeProfilePic'
import BackHeader from '@/components/BackHeader'
export default {
  components: {
    BasePage,
    BackHeader,
    RusheeProfilePic
  },
  computed: {
    rusheeId () {
      return this.$route.params.id
    },
    rushee () {
      return this.$store.getters.getRushee(this.rusheeId)
    }
  }
}
</script>

<style scoped>
img.profile {
  width: 100px;
  object-fit: cover;
  object-position: center;
}
.profile-main-content {
  padding-top: 8px;
  padding-bottom: 8px;
}
div.row {
  display: flex;
  height: 100px;
  margin: 0px -4px;
}
div.row > * {
  padding-left: 4px;
  padding-right: 4px;
}
div.row h2 {
  margin-top: 0;
}
</style>
