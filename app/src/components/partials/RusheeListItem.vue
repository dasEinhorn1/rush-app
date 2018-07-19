<template lang="html">
  <div class='list-item'>
    <list-vote-ticker
    style="width: 40px; height: 60px;"
    :rushee='rushee'/>
    <rushee-profile-pic
      style="width: 60px; height: 60px;"
      :rushee='rushee'/>
    <div class='main'>
      <h3>{{rushee.firstName}} {{rushee.lastName}}</h3>
      <div class="main__details">
        <p class="main__details__detail">{{ rushee.year | yearToText }}</p>
        <p class="main__details__detail">{{ rushee.major }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import RusheeProfilePic from '@/components/partials/RusheeProfilePic'
import ListVoteTicker from '@/components/partials/ListVoteTicker'

export default {
  props: ['rushee'],
  computed: {
    yesVotes: function () {
      return this.rushee.votes.totals.yes
    },
    noVotes: function () {
      return this.rushee.votes.totals.no
    }
  },
  filters: {
    yearToText (val) {
      return ['1st year', '2nd year', '3rd year', '4th year'][val - 1]
    }
  },
  components: {
    'rushee-profile-pic': RusheeProfilePic,
    'list-vote-ticker': ListVoteTicker
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    width: calc(100% - 6px);
    overflow: hidden;
    box-sizing: border-box;
    margin: 5px;
    box-shadow: 0px 0px 3px 1px grey;
  }
  .list-item .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px 1em;
    font-size: .8em;
  }

  .main__details {
    display: flex;
    justify-content: space-between;
  }

  .main__details__detail {
    flex: 0 0 auto;
    margin: 0;
    vertical-align: middle;
  }

  .list-item .main h3 {
    margin: 0;
    flex: 0 1 30px;
  }
  .list-item list-vote-ticker {
    flex: 1;
    background-color: green;
  }
</style>
