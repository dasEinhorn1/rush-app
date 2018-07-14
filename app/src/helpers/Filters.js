import { StatusType, getRusheeStatus } from '@/helpers/StatusConfig'

const Filter = function (name, group, func) {
  if (name === undefined) throw new TypeError("Filter name must be defined")
  if (group === undefined) throw new TypeError("Filter category must be defined")
  const _name = name;
  const _function = func;
  const _group = group;
  return {
    name: _name,
    group: _group,
    apply (item) {
      return _function(item)
    }
  }
}

const makeStatusFilter = (name, status) =>
  Filter(name, "status", (rushee) => getRusheeStatus(rushee) === status)
const makeYearFilter = (name, year) => Filter(name, "year", (rushee) => rushee.year === year)

const filters = {
  hasBid: makeStatusFilter("hasBid", StatusType.HAS_BID),
  accepted: makeStatusFilter("accepted", StatusType.ACCEPTED),
  bidEligible: makeStatusFilter("bidEligible", StatusType.ELIGIBLE),
  fastTrack: makeStatusFilter("fastTrack", StatusType.FAST_TRACK),
  blackballed: makeStatusFilter("blackballed", StatusType.BLACK_BALL),
  noStatus: makeStatusFilter("noStatus", StatusType.NONE),
  firstYear: makeYearFilter("firstYear", 1),
  secondYear: makeYearFilter("secondYear", 2),
  thirdYear: makeYearFilter("thirdYear", 3),
  fourthYear: makeYearFilter("fourthYear", 4)
}

const groupNames = ["status", "year"]

const filterGroups = {
  status: {
    name: "status",
    filters: [
      "hasBid",
      "accepted",
      "bidEligible",
      "fastTrack",
      "blackballed",
      "noStatus"
    ],
  },
  year: {
    filters: []
  }
}

export default {
  available () {
    return filters
  },
  names () {
    return Object.keys(filters)
  },
  groupedFiltersNames () {
    return Object.keys(filters).map(name => filters[name])
      .reduce((groupNames, filter) => {

      }, {})
  }
}
