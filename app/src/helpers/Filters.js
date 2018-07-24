import { StatusType, getRusheeStatus } from '@/helpers/StatusConfig'

const Filter = function (id, name, group, func) {
  if (name === undefined) throw new TypeError("Filter name must be defined")
  if (group === undefined) throw new TypeError("Filter category must be defined")
  const _name = name;
  const _id = id;
  const _function = func;
  const _group = group;
  return {
    id: _id,
    name: _name,
    group: _group,
    apply (item) {
      return _function(item)
    }
  }
}

const toGrouped = (groups, filter) => {
  if (!groups[filter.group]) groups[filter.group] = [];
  groups[filter.group].push(filter)
  return groups
}

const makeStatusFilter = (id, name, status) =>
  Filter(id, name, "status", (rushee) => getRusheeStatus(rushee) === status)
const makeYearFilter = (id, name, year) => Filter(id, name, "year", (rushee) => rushee.year === year)

const filterList = [
  makeStatusFilter("HAS_BID", "Bid In Hand", StatusType.HAS_BID),
  makeStatusFilter("ACCEPTED","Bid Accepted", StatusType.ACCEPTED),
  makeStatusFilter("BID_ELIGIBLE", "Bid Eligible", StatusType.ELIGIBLE),
  makeStatusFilter("FAST_TRACK", StatusType.FAST_TRACK),
  makeStatusFilter("BLACKBALLED", "Blackballed", StatusType.BLACK_BALL),
  makeStatusFilter("NO_STATUS", "No Status", StatusType.NONE),
  Filter("UP_FOR_VOTE", "Up For Vote", "status", (r) =>
    getRusheeStatus(r) === StatusType.FAST_TRACK || getRusheeStatus(r) === StatusType.NONE),
  makeYearFilter("FIRST_YEAR", "1st Year", 1),
  makeYearFilter("SECOND_YEAR", "2nd Year", 2),
  makeYearFilter("THIRD_YEAR", "3rd Year", 3),
  makeYearFilter("FOURTH_YEAR", "4th Year", 4)
]

const filters = filterList.reduce((filterObj, filter) => {
  filterObj[filter.id] = filter;
  return filterObj
}, {})

const filterIds = filterList.map(filter => filter.id)

const groupedFilters = filterList.reduce(toGrouped, {})

const groupNames = Object.keys(groupedFilters)

const applyAll = (groupedFilters) => r => {  // check each item individually
  return Object.values(groupedFilters).reduce((ands, group) => {
    return ands && group.reduce((ors, f) => {
      if (!f.apply) console.log(f, f.name)
      return ors || f.apply(r)
    }, false)
  }, true)
}

export default {
  available: filters,
  ids: filterIds,
  colors: {
    status: "#3D2F8C",
    year: "#EAAA00"
  },
  default: ["UP_FOR_VOTE"],
  toGrouped,
  applyAll
}
