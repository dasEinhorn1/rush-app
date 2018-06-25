import { StatusType, getRusheeStatus } from '@/helpers/StatusConfig'

const makeStatusFilter = (status) => (rushee) => getRusheeStatus(rushee) === status
const makeYearFilter = (year) => (rushee) => rushee.year === year

const hasBid = makeStatusFilter(StatusType.HAS_BID)
const accepted = makeStatusFilter(StatusType.ACCEPTED)
const bidEligible = makeStatusFilter(StatusType.ELIGIBLE)
const fastTrack = makeStatusFilter(StatusType.FAST_TRACK)
const blackballed = makeStatusFilter(StatusType.BLACK_BALL)
const noStatus = makeStatusFilter(StatusType.NONE)

const firstYear = makeYearFilter(1)
const secondYear = makeYearFilter(2)
const thirdYear = makeYearFilter(3)
const fourthYear = makeYearFilter(4)

export const Filters = {
  voteStatus: {
    hasBid,
    accepted,
    bidEligible,
    fastTrack,
    blackballed,
    voteEligible: (rushee) => fastTrack(rushee) || noStatus(rushee)
  },
  year: {
    firstYear,
    secondYear,
    thirdYear,
    fourthYear
  }
}
