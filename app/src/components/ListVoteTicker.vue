<template lang="html">
  <div class='ticker'>
    <div class='ticker-cover' v-if="!hasVote && !initialized">
      <button @click="initialized=true">Vote</button>
    </div>
    <div class='ticker-active' v-if="initialized">
      <button
        @click="(yesVoted) ? vote(0) : vote(1)"
        :class='{active:yesVoted}'>Yes</button>
      <button
        @click="(noVoted) ? vote(0) : vote(-1)"
        :class='{active:noVoted}'>No</button>
    </div>
  </div>
</template>
<script>
  module.exports = {
    props: ['rushee'],
    data: function () {
      return {
        initialized: false
      }
    },
    computed: {
      hasVote: function() {
        return this.getUserVote() !== 0;
      },
      yesVoted: function() {
        return this.getUserVote() === 1;
      },
      noVoted: function() {
        return this.getUserVote() === -1;
      },
    },
    methods: {
      getUserVote: function() {
        return this.rushee.votes.user.vote;
      },
      setUserVote: function(v) {
        this.rushee.votes.user.vote = v;
        console.log(this.rushee.votes.user);
      },
      vote: function(v) {
        if (v === 1) {
          this.setUserVote(1);
        } else if (v === 0) {
          this.setUserVote(0);
        } else if (v === -1) {
          this.setUserVote(-1);
        } else {
          throw TypeError("vote() only takes an int b/n -1 and 1, inclusive.")
        }
      }
    }
  });
</script>

<style scoped>
  div {
    width: 60px;
    height: 60px;
    position: relative;
  }

  .ticker-cover button {
    width: 100%;
    height: 100%;
  }

  .ticker-active button {
    display: block;
    height: 50%;
    box-sizing: border-box;
  }
</style>
