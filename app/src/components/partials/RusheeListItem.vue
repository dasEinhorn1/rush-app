<template lang="html">
  <div class='list-item'>
    <rushee-profile-pic
      style="width: 60px; height: 60px;"
      :rushee='rushee'/>
    <div class='main'>
      <h3>{{rushee.firstName}} {{rushee.lastName}}</h3>
      <p>Votes: <span style='color:green'>{{yesVotes}}</span> | <span style='color:red'>{{noVotes}}</span></p>
    </div>
    <list-vote-ticker
      style="width: 60px; height: 60px;"
      :rushee='rushee'/>
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
    },
    totalVotes: function () {
      return this.yesVotes() + this.noVotes()
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
    padding-left: 1em;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: .8em;
  }
  .list-item .main h3 {
    margin: 0;
    flex: 0 1 30px;
  }
  .list-item .main p {
    margin: 0;
    flex: 1;
    vertical-align:middle;
  }
  .list-item list-vote-ticker {
    flex: 1;
    background-color: green;
  }
</style>
