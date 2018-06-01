<template lang="html">
  <div class='list-item'>
    <rushee-profile-pic
      style="width: 60px; height: 60px;"
      :rushee='rushee'/>
    <div class='main'>
      <h3>{{rushee.firstName}} {{rushee.lastName}}</h3>
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
  components: {
    'rushee-profile-pic': RusheeProfilePic,
    'list-vote-ticker': ListVoteTicker
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
  .list-item .main {
    flex: 1;
    padding-left: 1em;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .list-item .main h3 {
    margin: 0;
  }
  .list-item list-vote-ticker {
    flex: 1;
    background-color: green;
  }
</style>
<!--
  // an example rushee
  {
    firstName: 'Tim',
    lastName: 'Flenderbun',
    pic: 'https://images-na.ssl-images-amazon.com/images/I/51kpW-tYzRL.jpg',
    id: 906111950,
    status: '_', // no current status
    votes: {
      totals: {
        yes: 1,
        no: 0
      },
      user: {
        vote: 0, // 0 if no vote, 1 if yes -1 if no
      }
    }
  }

  // status options
  //  [
  //    'A'- 'accepted',
  //    'B'- 'has bid',
  //    'E'-'eligible for bid',
  //    'F'-'eligible for fast-tracking',
  //    'Z'- 'blackball'
  //    '_'- 'no status'
  //  ]
-->
