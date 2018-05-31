<template lang="html">
  <li>
    <rushee-profile-pic
      style="width: 50px; height: 50px;"
      :rushee='rushee'/>
    <div class='main'>
      <h3>{{rushee.firstName}} {{rushee.lastName}}</h3>
    </div>
    <list-vote-ticker
      style="width: 50px; height: 50px;"
      :rushee='rushee'/>
  </li>
</template>

<script>
  const RusheeProfilePic = require('./RusheeProfilePic.vue');
  const ListVoteTicker = require('./ListVoteTicker.vue');

  module.exports = {
    props: ['rushee'],
    components: {
      "rushee-profile-pic": RusheeProfilePic,
      "list-vote-ticker": ListVoteTicker
    }
  });
</script>

<style scoped>

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
