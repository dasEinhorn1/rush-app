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
export default {
  props: ['rushee'],
  data: function () {
    return {
      initialized: false
    }
  },
  computed: {
    userVote: function () {
      return this.rushee.votes.user.vote
    },
    hasVote: function () {
      return this.userVote !== 0
    },
    yesVoted: function () {
      return this.userVote === 1
    },
    noVoted: function () {
      return this.userVote === -1
    }
  },
  methods: {
    vote: function (v) {
      let id = this.rushee.id
      this.$store.dispatch('vote', {
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

  .ticker div {
    width: 100%;
    height: 100%;
  }

  button {
    background: transparent;
    border: none;
  }

  .ticker-cover button {
    width: 100%;
    height: 100%;
  }

  .ticker-active button {
    display: block;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
  }
  .ticker-active button.active {
    color: white;
    background-color: black;
  }
</style>
