<template lang="html">
  <div class='ticker'>
    <button
      @click="(yesVoted) ? vote(0) : vote(1)"
      :class='{yes:true, active:yesVoted}'>Yes</button>
    <button
      @click="(noVoted) ? vote(0) : vote(-1)"
      :class='{no:true, active:noVoted}'>No</button>
  </div>
</template>
<script>
export default {
  props: ['rushee'],
  data: function () {
    return {
      initialized: this.rushee.votes.user.vote !== 0
    }
  },
  computed: {
    votes () {
      return this.rushee.votes
    },
    userVote () {
      return this.votes.user.vote
    },
    hasVote () {
      return this.userVote !== 0
    },
    yesVoted () {
      return this.userVote === 1
    },
    noVoted () {
      return this.userVote === -1
    }
  },
  methods: {
    vote (v) {
      let id = this.rushee.id
      return this.$store.dispatch('vote', {
        id: id,
        vote: v
      })
    }
  }
}
</script>

<style scoped>
  .ticker {
    position: relative;
  }

  button {
    background: transparent;
    border: none;
    display: block;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
  }

  button.yes.active {
    color: white;
    background-color: green;
  }

  button.no.active {
    color: white;
    background-color: red;
  }
</style>
