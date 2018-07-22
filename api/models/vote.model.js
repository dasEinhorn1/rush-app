function VoteModel ( yesTotal, noTotal, userVote, bidStatus ) {
    var status = "_"
    if (bidStatus === "has-bid") {
        status = StatusType.HAS_BID
    } else if (bidStatus === "accepted-bid") {
        status = StatusType.ACCEPTED
    } else {
        status = StatusType.fromVotes(yesTotal, noTotal)
    }

    return {
        status: status,
        total: NestedTotal(yesTotal, noTotal),
        userVote: userVote || 0
    }
}

function NestedTotal (yes, no) {
    return {
        yes: yes,
        no: no
    }
}

const thresholds = {
  BLACK_BALL: (yes, no) => no > 5,
  FAST_TRACK: (yes, no) => yes > 20 && yes < 40,
  BID: (yes, no) => yes >= 40
}

const StatusType = {
  ACCEPTED: 'A',
  HAS_BID: 'B',
  ELIGIBLE: 'E',
  FAST_TRACK: 'F',
  BLACK_BALL: 'Z',
  NONE: '_',
  fromVotes: function (yes, no) {
    if (thresholds.BLACK_BALL(yes, no)) {
      return StatusType.BLACK_BALL
    } else if (thresholds.FAST_TRACK(yes, no)) {
      return StatusType.FAST_TRACK
    } else if (thresholds.BID(yes, no)) {
      return ([
        StatusType.ACCEPTED,
        StatusType.HAS_BID,
        StatusType.ELIGIBLE])[randInt(2)]
    }
    return StatusType.NONE
  }
}

module.exports = VoteModel;