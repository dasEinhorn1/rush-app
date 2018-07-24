import { StatusType } from '@/helpers/StatusConfig'
import { randInt } from '@/helpers/Random'

function _fakeRandom () {
  let yes = randInt(50)
  let no = randInt(3)
  let user = randInt((no > 0) ? -1 : 0, (yes > 0) ? 1 : 0)
  if (yes < 10) {
    no = randInt(9)
  }
  return _fake(yes, no, user)
}

function _fake (yes, no, user) {
  if (no === 0) {
    if (user === -1) user = 0
  } else if (yes === 0) {
    if (user === 1) user = 0
  }
  return {
    status: StatusType.fromVotes(yes || 0, no || 0),
    totals: {
      yes: yes || 0,
      no: no || 0
    },
    userVote: user || 0
  }
}

function fake (vote = {}, randomized = false) {
  const yes = (vote.totals) ? (vote.totals.yes || 0) : 0
  const no = (vote.totals) ? (vote.totals.yes || 0) : 0
  const user = (vote.user) ? (vote.user.vote || 0) : 0
  return randomized ? _fakeRandom() : _fake(yes, no, user)
}

export default {
  fake: fake
}
