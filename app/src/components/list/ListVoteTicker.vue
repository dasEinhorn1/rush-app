<template lang="html">
  <div class='ticker'>
    <div class="lock-overlay" v-if="isLocked">
      <font-awesome-icon class="lock-overlay__icon" :icon='statusIcon'/>
    </div>
    <icon-button
      @click="(yesVoted) ? vote(0) : vote(1)"
      :class='{yes:true, "vote-button":true, active:yesVoted}'
      icon='thumbs-up'
      :disabled="isLocked"/>
    <icon-button
      @click="(noVoted) ? vote(0) : vote(-1)"
      :class='{no:true, "vote-button":true, active:noVoted}'
      icon='thumbs-down'
      :disabled="isLocked"/>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import IconButton from '@ui/buttons/IconButton'
import { StatusType, Status } from '@/helpers/StatusConfig'
export default {
  props: ['rushee'],
  components: { IconButton, FontAwesomeIcon },
  computed: {
    votes () {
      return this.rushee.votes
    },
    userVote () {
      return this.votes.userVote
    },
    hasVote () {
      return this.userVote !== 0
    },
    yesVoted () {
      return this.userVote === 1
    },
    noVoted () {
      return this.userVote === -1
    },
    isLocked () {
      return [
          StatusType.HAS_BID,
          StatusType.ACCEPTED,
          StatusType.ELIGIBLE,
          StatusType.BLACK_BALL,
        ].includes(this.rushee.votes.status)
    },
    statusIcon () {
      return Status.icon(this.rushee.votes.status)
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

  .lock-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: white;
  }
  .lock-overlay__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  button {
    background: transparent;
    border: none;
    display: block;
    height: 50%;
    width: 100%;
    box-sizing: border-box;
    font-size: 1em;
  }

  button.yes.active {
    color: #007A33;
    /* background-color: green; */
  }

  button.no.active {
    color: #FF381E;
    /* background-color: red; */
  }
</style>
